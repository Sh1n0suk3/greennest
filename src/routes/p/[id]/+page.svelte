<script>
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { AOS } from 'svelte-animate-on-scroll';

    import EstateCard from '../../EstateCardSmall.svelte';
    import ViewButton from '../../ViewButtonFull.svelte';

    import * as consts from '$lib/constants';

    /** 
     * @type {import('./$types').PageProps} */
    let { data } = $props(); 

    let borderDebug = $state(true);

    let currentImage = $state(data.property.src);
    let previousImage = $state(undefined);
    let intervalId;

    $effect(() => { 
        currentImage = data.property.src;
        previousImage = undefined;

        intervalId = setInterval(() => {
            const availableImage = imageList.filter((img) => img !== previousImage);
            const randomImage = availableImage[Math.floor(Math.random() * availableImage.length)];
			selectImage(randomImage, false);
	    }, 2500);

        return () => {
			clearInterval(intervalId);
		};
    });

    function selectImage(img, clearTimer = true) {
        if (intervalId && clearTimer) {
            clearInterval(intervalId);
            intervalId = null;
        }
        previousImage = currentImage;
        currentImage = img;
    }

    let imageList = $derived( 
        [
            data.property.src,
            '/img/ecosmarta_cinematic_composited.webp',
            '/img/ecosmarta_cinematic2_composited.webp',
            '/img/ecosmarta_improved.webp',
            '/img/ecosmarta_improved2.webp'
        ].filter((src, index, self) => src && self.indexOf(src) === index)
    );
    let otherImage = $derived(imageList.filter(img => img !== currentImage)); 

    let properties = $state([ 
        { ...consts.ec1, visible: false, id: consts.ec1.property }, 
        { ...consts.ec2, visible: false, id: consts.ec2.property },
        { ...consts.ec3, visible: false, id: consts.ec3.property }
    ]);
    let otherProperties = $derived.by(() => {
        if (!data?.property) return []; 
        return properties.filter(prop => prop.property !== data.property.property); 
    });
    let propertiesVisible = $state(false); 

    let isLoaded = $state(false); 
    onMount(() => {
        isLoaded = true;
    });

    let floatingPurchaseButtonVisible = false;
</script>

{#if isLoaded}
<section class="estate-page" aria-labelledby="property-heading" >
    <h2 id="property-heading" in:fly={{ y: 35, duration: 1250, delay: 100 }}>Property Details</h2>
    <article class="estate-content">
        <div class="estate-content-left neumorphism" in:fly={{ y: 35, duration: 1250, delay: 200}} role="region" aria-label="Property image gallery">
            <div class="image-container">
                <div class="full-media-container">
                    {#key currentImage}
                        <img class="full-media" id="fullImage" src={currentImage} alt={data.property.alt} transition:fade={{ duration: 300 }}/>
                    {/key}
                </div>
                <div class="small-media-container">
                    {#each otherImage as img, i}
                        {#key img}
                            <img role="button" class="small-media small-media-{i + 1}" src={img} alt="Thumbnail view" onclick={() => selectImage(img)} transition:fade={{ duration: 300 }}/>
                        {/key}
                    {/each}
                </div>
            </div>
        </div>
        <div class="estate-content-right neumorphism" in:fly={{ y: 35, duration: 1250, delay: 400}}>
            <div class="estate-content-right-text">
                <h3>{data.property.name}</h3>
                <p>{data.property.description}</p>
                <div class="property-features">
                    <p>Includes</p>
                    <ul>
                        <li>{data.property.features1}</li>
                        <li>{data.property.features2}</li>
                    </ul>
                    <ul>
                        <li>{data.property.features3}</li>
                        <li>{data.property.features4}</li>
                    </ul>
                </div>
                <p class="property-price">Price: {data.property.price}</p>
            </div>
            <div class="button-container">
                <ViewButton text="Purchase" href="/vid/rr.mp4"/>
                <ViewButton text="Contact Sales" href="/vid/rr.mp4" />
            </div>
        </div>
    </article>
    <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1250} distance="35px">
    <article class="estate-content-information neumorphism">
        <h3 class="estate-content-information-header">Information</h3>
        <p>{@html data.property.information}</p>
    </article>
    </AOS>
    <aside aria-labelledby="related-heading">
        <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1250} distance="35px">
        <h2 id="property-heading">You May Also Like</h2>
        </AOS>
        <div class="mamm-stuff-grid" role="list">
            {#each otherProperties as prop, i (prop.id)}
                        <AOS animate="fade-up" ease="ease-out-cubic" delay={100 + i * 50} duration={1250} distance="35px" onupdate={(visible) => { prop.visible = true }}><div>
                                <EstateCard 
                                    name={prop.name} 
                                    description={prop.description}
                                    src={prop.src} 
                                    alt={prop.alt}
                                    price={prop.price}
                                    visible={prop.visible} 
                                    index={i} 
                                    href={`/p/${prop.property}`}
                                />
                        </div>
                        </AOS>
            {/each}
        </div>
    </aside>
</section>
{/if}

<style>
    /*
    .border-debug {
        border: 1px solid black;
    }
    */

    .estate-page {
        background-color: var(--fourth-color);
        height: fit-content;
        width: 100%;
        padding-top: 24px;
        padding-bottom: 32px;
    }

    #property-heading {
        position: relative;
        width: 80%;
        font-size: 4rem;
        padding: 0 24px;
        margin: 64px auto 0;
    }

    .estate-content {
        padding-top: 24px;
        width: 80%;
        display: flex;
        flex-direction: row;
        height: fit-content;
        margin: 0 auto;
        gap: 32px;
    }

    .estate-content-left {
        width: 60%;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-radius: 16px;
        background-color: var(--fourth-color-brighter);
        margin: 0;
    }

    .estate-content-right {
        position: relative;
        width: 40%;
        padding: 0 0 168px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.5rem;
        border-radius: 16px;
        background-color: var(--fourth-color-brighter);
    }

    .estate-content-right-text {
        padding: 0 24px;
        margin: 0;
    }

    .estate-content-right-text h3 {
        font-size: 3rem;
        margin: 24px 0 0 0;
    }

    .estate-content-right-text p {
        margin: 8px 0 16px;
    }

    .property-features {
        padding: 0 16px;
        border-radius: 16px;
        border: 3px solid var(--primary-color);
        width: fit-content;
        line-height: 1.4;
        margin-bottom: 16px;
        font-size: 1.5rem;
    }

    .property-features ul {
        margin-top: -8px;
        margin-bottom: 8px;
        list-style: outside url("../../../../static/svg/check.svg");
    }

    .button-container {
        position: absolute;
        bottom: 24px;
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    /*
    @media (width < 1568px) {
        .property-features {
            font-size: 1.25rem;
        }
    }
    */

    @media (width > 768px) {
        .property-price {
            margin-bottom: 32px !important;
        }
    }

    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin: 18px 24px;
    }

    img {
        object-fit: cover;
        margin: 0 auto;
        border-radius: 16px;
    }

    .full-media-container {
        width: 100%;
        height: 100%;
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
    }

    .full-media {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    .small-media-container {
        width: 100%;
        max-width: 100%;
        height: 30%;
        position: relative;
        display: block;
        margin-top: 16px;
        padding-bottom: 18%; /* Creates space for the thumbnails */
    }

    .small-media {
        position: absolute;
        width: 32%;
        height: 100%;
        border-radius: 16px;
        cursor: pointer;
        transition: transform 300ms ease;
        bottom: 0;
    }

    .small-media-1 {
        left: 0;
    }

    .small-media-2 {
        left: 34%;
    }

    .small-media-3 {
        right: 0;
    }

    /*
    .small-media:hover {
        transform: scale(1.05);
    }
    */

    .estate-content-information {
        width: calc(80% - 4px);
        margin: 42px auto;
        padding: 0;
        font-size: 1.5rem;
        border-radius: 16px;
        background-color: var(--fourth-color-brighter);
    }

    .estate-content-information-header {
        font-size: 3rem !important;
        margin: 24px 0 0;
    }

    .estate-content-information-header,
    .estate-content-information p {
        padding: 0 24px;
    }

    .mamm-stuff-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 2dvw;
        margin: 32px auto;
        width: 80%;
    }

    @media (width < 1528px) {
        .mamm-stuff-grid {
            flex-direction: column;
            align-items: stretch;
        }
    }

    @media (width < 1392px) {
        .estate-content {
            flex-direction: column-reverse;
            width: 85%;
            min-height: none;
            gap: 32px;
        }

        .estate-content-right {
            width: 100%;
            height: fit-content;
            align-items: flex-start;
            justify-content: flex-start;
            box-sizing: border-box;
        }

        .estate-content-right-text {
            width: 85%;
            padding: 0 24px;
        }

        .property-features {
            width: calc(82dvw - 84px);
        }

        .property-features ul {
            display: inline-block;
            margin-right: 24px;
            vertical-align: top;
        }

        .property-features ul:last-child {
            margin-right: 0;
        }

        .button-container {
            position: absolute;
            width: calc(82dvw - 64px);
            padding: 0 0;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }

        .estate-content-left {
            width: 100%;
            box-sizing: border-box;
        }

        .estate-content-information {
            width: 85%;
            box-sizing: border-box;
        }

        .mamm-stuff-grid {
            width: 85%;
        }
    }

    @media (width < 768px) {
        .mamm-stuff-grid {
            width: 100%;
        }

        .estate-content {
            width: 93.48%;
            padding: 0 16px;
        }

        .estate-content-information {
            width: 93.48%;
        }

        .estate-content-information-header,
        .estate-content-information p {
            padding: 0 24px;
        }

        .button-container {
            width: calc(82dvw - 16px);
        }

        #property-heading {
            padding: 0 0 32px;
        }
    }
</style>