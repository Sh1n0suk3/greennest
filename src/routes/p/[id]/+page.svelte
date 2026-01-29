<script>
    import { fly } from 'svelte/transition';
    import { fade, slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { AOS } from 'svelte-animate-on-scroll';

    // import EstateCard from '../../EstateCardSmall.svelte';
    import ViewButtonFull from '../../ViewButtonFull.svelte';
    import ViewButton from '../../ViewButton.svelte';

    import * as consts from '$lib/constants';

    import { screenWidth } from '$lib/screenWidth.js';

    let { data } = $props(); 

    let borderDebug = $state(true);

    let currentImage = $state(data.property.src);
    let previousImage = $state("");
    let intervalId = 0;

    // Totally Gay Ma Image Gallery Navigation System
    let currentIndex = $state(0);
    let touchStartX = $state(0);
    let touchEndX = $state(0);
    let isSwiping = $state(false);
    let swipeOffset = $state(0);
    let galleryContainer = $state(null);

    $effect(() => { 
        currentImage = data.property.src;

        if ($screenWidth > 768) {
            intervalId = setInterval(() => {
                const availableImage = imageList.filter((img) => img !== previousImage);
                const randomImage = availableImage[Math.floor(Math.random() * availableImage.length)];
                selectImage(randomImage, false);
            }, 2500);
        }

        return () => {
			clearInterval(intervalId);
		};
    });

    $effect(() => {
        const index = imageList.indexOf(currentImage);
        if (index !== -1) {
            currentIndex = index;
        }
    });

    function selectImage(img, clearTimer = true) {
        if (intervalId && clearTimer) {
            clearInterval(intervalId);
        }
        previousImage = currentImage;
        currentImage = img;
    }

    function goToSlide(index) {
        let newIndex;
        if (index < 0) {
            newIndex = imageList.length - 1;
        } else if (index >= imageList.length) {
            newIndex = 0;
        } else {
            newIndex = index;
        }
        currentIndex = newIndex;
        currentImage = imageList[newIndex];
        clearInterval(intervalId);
    }

    function goToPrevious() {
        goToSlide(currentIndex - 1);
    }

    function goToNext() {
        goToSlide(currentIndex + 1);
    }

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchEndX = e.touches[0].clientX;
        isSwiping = true;
        swipeOffset = 0;
    }

    function handleTouchMove(e) {
        if (!isSwiping) return;
        touchEndX = e.touches[0].clientX;
        // swipeOffset = touchEndX - touchStartX;
    }

    function handleTouchEnd() {
        if (!isSwiping) return;
        isSwiping = false;
        
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToPrevious();
            } else {
                goToNext();
            }
        }
        
        swipeOffset = 0;
        touchStartX = 0;
        touchEndX = 0;
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
    // let otherImage = $derived(imageList.filter(img => img !== currentImage)); 

    let properties = $state([ 
        { ...consts.ec1, visible: false, id: consts.ec1.property }
    ]);
    /*
    let otherProperties = $derived.by(() => {
        if (!data?.property) return []; 
        return properties.filter(prop => prop.property !== data.property.property); 
    });
    */
    // let propertiesVisible = $state(false); 

    let isLoaded = $state(false); 
    onMount(() => {
        isLoaded = true;
    });

    // let floatingPurchaseButtonVisible = false;
</script>

{#if isLoaded}
<section class="estate-page" aria-labelledby="property-heading">
    {#if $screenWidth <= 1312}
        <div 
            class="mobile-gallery-container"
            bind:this={galleryContainer}
            ontouchstart={handleTouchStart}
            ontouchmove={handleTouchMove}
            ontouchend={handleTouchEnd}
            role="region"
            aria-label="Property image gallery">
            <button class="gallery-nav gallery-nav-left" onclick={goToPrevious} aria-label="Previous image">
                <img src="/svg/arrow-left.svg" alt="View Previous">
            </button>

            <div 
                class="mobile-gallery-track"
                style="transform: translateX({swipeOffset}px)">
                {#key currentImage}
                    <img class="mobile-gallery-image" src={currentImage} alt={data.property.alt} transition:fade={{ duration: 250 }}/>
                {/key}
            </div>

            <button class="gallery-nav gallery-nav-right" onclick={goToNext} aria-label="Next image">
                <img src="/svg/arrow-right.svg" alt="View Next">
            </button>

            <div class="gallery-bullets" role="tablist" aria-label="Image navigation">
                {#each imageList as img, i (img)}
                    <button 
                        class="gallery-bullet" 
                        class:active={currentIndex === i}
                        onclick={() => goToSlide(i)}
                        role="tab"
                        aria-selected={currentIndex === i}
                        aria-label="Go to image {i + 1}">
                    </button>
                {/each}
            </div>
        </div>
    {:else}
    <h2 id="property-heading" in:fly={{ y: 35, duration: 1250, delay: 100 }}>Property Details</h2>
    <article class="estate-content">
        <div class="estate-content-left neumorphism" in:fly={{ y: 35, duration: 1250, delay: 200}} role="region" aria-label="Property image gallery">
            <div class="image-container">
                <div class="full-media-container">
                    {#key currentImage}
                        <img class="full-media" id="fullImage" src={currentImage} alt={data.property.alt} transition:fade={{ duration: 250 }}/>
                    {/key}
                </div>
                <div class="small-media-container">
                    {#each imageList as img, i (img)}
                        <button 
                            class="small-media-button"
                            onclick={() => selectImage(img)}
                            aria-label="View image {i + 1}">
                            <img class="small-media small-media-{i + 1}" src={img} alt="Thumbnail view {i + 1}" class:selected-media={currentImage === img}/>
                        </button>
                    {/each}
                </div>
            </div>
        </div>
        <div class="estate-content-right neumorphism" in:fly={{ y: 35, duration: 1250, delay: 400}}>
            <div class="estate-content-right-text">
                <h3 style="line-height: 1.2">{data.property.name}</h3>
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
                
                <p class="property-price">{data.property.fullPrice || data.property.price}</p>
            </div>
            <div class="button-container">
                <ViewButtonFull text="Purchase" href="/vid/rr.mp4"/>
                <ViewButtonFull text="Contact Sales" href="/vid/rr.mp4" />
            </div>
        </div>
    </article>
    {/if}
    <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1250} distance="35px">
    <article class="estate-content-information neumorphism">
        <h2 class="estate-content-information-header">Description</h2>
        {#if $screenWidth <= 1232}
            <div class="property-features">
                <p>Includes</p>
                <ul>
                    <li>{data.property.features1}</li>
                    <li>{data.property.features2}</li>
                </ul>                    <ul>
                    <li>{data.property.features3}</li>
                    <li>{data.property.features4}</li>
                </ul>
         </div>
        {/if}
        <p>{@html data.property.information}</p>
    </article>
    </AOS>
    <!--
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
    -->
</section>
{/if}
{#if $screenWidth <= 1312}
        <footer class="estate-content-mobile">
            <header class="caption-inline">
                <h3 class="caption">{data.property.name}</h3>
                <p class="caption-price">{data.property.price}</p>
            </header>
            <nav class="button-container-mobile">
                <ViewButton text="Purchase" href="https://notma.org/vid/rr.mp4"/>
                <ViewButton text="Contact Sales" href="https://notma.org/vid/rr.mp4" />
            </nav>
        </footer>
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
        width: 85%;
        font-size: 4rem;
        padding: 0 24px;
        margin: 64px auto 0;
    }

    .estate-content {
        padding-top: 24px;
        width: 85%;
        display: flex;
        flex-direction: row;
        height: fit-content;
        margin: 0 auto;
        gap: 32px;
    }

    .estate-content-left {
        width: 70%;
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
        width: 30%;
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
        padding: 14px 16px 8px;
        border-radius: 16px;
        border: 3px solid var(--primary-color);
        width: fit-content;
        line-height: 1.4;
        margin-bottom: 16px;
        font-size: 1.25rem;
    }

    .property-features p {
        margin-top: 0;
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

    @media (width > 1312px) {
        .property-price {
            margin-bottom: 16px !important;
        }
    }

    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin: 18px 0;
        padding: 0;
        box-sizing: border-box;
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
        display: flex;
        gap: 8px;
        margin-top: 16px;
        box-sizing: border-box;
    }

    .small-media-button {
        flex: 1;
        height: 100%;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
    }

    .small-media {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        cursor: pointer;
    }

    .selected-media {
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        border: 4px solid var(--primary-color);
    }

    /*
    .small-media:hover {
        transform: scale(1.05);
    }
    */

    .estate-content-information {
        width: calc(85% - 4px);
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

    @media (width < 1576px) {
        .mamm-stuff-grid {
            flex-direction: column;
            align-items: stretch;
        }

        .property-features {
            font-size: 1rem;
            line-height: 1;
        }
    }

    /*
    @media (width < 1232px) {
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
            font-size: 1.25rem;
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
    */

    @media (width < 1312px) {
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

        .property-features {
            font-size: 1.5rem;
        }
    }

    .estate-content-mobile {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
		background-color: var(--fourth-color-brighter);
        color: var(--primary-color) !important;
        font-size: 24px;
		padding: 12px 0 16px;
		color: white;
		z-index: 9998;
		width: 100%;
		height: auto;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        border-top: 2px solid var(--primary-color-transparent-light);
    }

    .button-container-mobile {
        margin: 0 auto 4px;
        display: flex;
        width: 96%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .caption-inline {
        padding: 0 0 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 92%;
        margin: 0 auto;
    }

    h3.caption {
        padding: 0 !important;
        margin: 0 auto;
        margin: 0;
    }

    .caption-price {
        padding: 0 !important;
        margin: 0 auto;
        margin: 0;
    }

    @media (width < 1312px) {
        .full-media {
            display: block;
            position: absolute;
            margin-top: 64px;
		    width: 100%;
    	    height: 60vh;
		    object-fit: cover;
		    background-size: cover;
		    background-repeat: no-repeat;
		    animation: revealImage 1500ms ease-in;
            border-radius: 0;
        }

        .estate-content-information {
            margin-top: 0;
        }

        .property-features {
            margin: 24px 24px 0;
        }
    }

    .mobile-gallery-container {
        position: relative;
        width: 100%;
        height: 60vh;
        margin-top: 32px;
        overflow: hidden;
        touch-action: pan-y pinch-zoom;
    }

    .mobile-gallery-track {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.15s ease-out;
    }

    .mobile-gallery-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0;
    }

    .gallery-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(4px);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        transition: background-color 0.2s ease, transform 0.2s ease;
        color: var(--primary-color, #333);
    }

    .gallery-nav:hover {
        background-color: rgba(255, 255, 255, 1);
        transform: translateY(-50%) scale(1.05);
    }

    .gallery-nav:active {
        transform: translateY(-50%) scale(0.95);
    }

    .gallery-nav-left {
        left: 24px;
    }

    .gallery-nav-right {
        right: 24px;
    }

    .gallery-nav img {
        width: 20px;
        height: 20px;
    }

    .gallery-bullets {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;
        padding: 8px 12px;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        border-radius: 16px;
    }

    .gallery-bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
        padding: 0;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .gallery-bullet:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .gallery-bullet.active {
        background-color: rgba(255, 255, 255, 1);
        transform: scale(1.2);
    }

    @media (width < 1312px) {
        .estate-content-information {
            margin-top: 32px;
        }
    }

    @media (width < 768px) {
        .mobile-gallery-container {
            margin-top: 40px;
        }
    }
</style>