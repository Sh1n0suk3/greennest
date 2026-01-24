<script>
    import FeatureCardSmall from './FeatureCardSmall.svelte';

    // import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { AOS } from 'svelte-animate-on-scroll';

    import EstateCard from './EstateCard.svelte';
    // import ViewButton from './ViewButton.svelte';
    import ViewButtonBorder from './ViewButtonBorder.svelte';

    import * as consts from '$lib/constants';
    import * as feats from '$lib/features';

    let isLoaded = $state(false);

    onMount(() => {
        isLoaded = true;
    });

    let properties = $state([
		{ ...consts.ec1, visible: false },
	]);

    let features = $state([
		{ ...feats.ventilation, visible: false },
        { ...feats.solarProtection, visible: false },
        { ...feats.openSpace, visible: false },
        { ...feats.regulation, visible: false },
        { ...feats.location, visible: false },
        { ...feats.efficiency, visible: false },
	]);

    let features1Visible = $state(false);
    let features2Visible = $state(false);
</script>

<section class="first-section" aria-labelledby="hero-heading">
    <img src="img/ecosmarta_cinematic_composited.webp" alt="a house" class="bg-image"/>
    <div class="fs-content-right">
        <hgroup>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={50} duration={1000} distance="30px">
                <h1 id="hero-heading">Close to the City,</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={150} duration={1000} distance="30px">
                <h1>Closer to Nature</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={250} duration={1000} distance="30px">
                <div class="hero-buttons">
                    <ViewButtonBorder text="Properties" href="/#properties" />
                    <ViewButtonBorder text="Features" href="/#features" />
                </div>
            </AOS>   
        </hgroup>
    </div>
</section>
<section class="second-section" aria-labelledby="properties-heading">
    <div class="ss-content" id="properties">
        <header>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1000} distance="30px" onupdate={(visible) => { features1Visible = true }}>
                <h2 id="properties-heading">Find your home</h2>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={200} duration={1000} distance="30px">
                <p class="content-details">Join us in a place that is close to the city — but closer to nature. A home may be built with walls, but at GreenNest, it is built with care</p>
            </AOS>
        </header>
        <div class="ma-stuff-grid" role="list">
            {#each properties as property, i (property.name)}
    				<AOS animate="fade-up" ease="ease-out-cubic" delay={50 + i * 50} duration={1000} distance="30px"><EstateCard {...property} href={`/p/${property.property}`} /></AOS>
            {/each}
        </div>
    </div>
</section>
<section class="third-section" aria-labelledby="features-heading">
    <div class="ts-content" id="features">
        <header>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1000} distance="30px" onupdate={(visible) => { features2Visible = true }}>
                <h2 id="features-heading">Why GreenNest?</h2>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={200} duration={1000} distance="30px">
                <p class="content-details">We are committed to building pragmatic houses with sustainability and safety in mind, bridging the gap between urban necessity and environmental responsibility.</p>
            </AOS>
        </header>
        <div class="ts-content-grid" role="list">
            {#each features as feature, i (feature.name)}
    	    		<AOS animate="fade-up" ease="ease-out-cubic" delay={50 + i * 25} duration={1000} distance="30px"><FeatureCardSmall {...feature} /></AOS>
            {/each}
        </div>
    </div>
</section>
<!--
<footer>
    <div class="f-content">
		<div class="f-content-info">
            <div>
			    <h3>Properties</h3>
			    <ul>
			    	{#each properties as property, i (property.name)}
    		    		<li><a href={`/p/${property.property}`}>{property.name}</a></li>
                    {/each}
			    </ul>
            </div>
		</div>
	</div>
</footer>
-->