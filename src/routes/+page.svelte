<script>
    import FeatureCardSmall from './FeatureCardSmall.svelte';
    import { AOS } from 'svelte-animate-on-scroll';
    import { screenWidth } from '$lib/screenWidth.js';
    import EstateCard from './EstateCard.svelte';
    import ViewButtonBorder from './ViewButtonBorder.svelte';
    import * as consts from '$lib/constants';
    import * as feats from '$lib/features';

    const properties = [
        { ...consts.ec1 },
    ];

    const features = [
        { ...feats.ventilation },
        { ...feats.solarProtection },
        { ...feats.openSpace },
        { ...feats.regulation },
        { ...feats.location },
        { ...feats.efficiency },
    ];
</script>

<section class="first-section" aria-labelledby="hero-heading">
    <img src="img/ecosmarta_cinematic_composited.webp" alt="Modern eco-friendly house surrounded by nature" class="bg-image"/>
    <div class="fs-content-right">
        <hgroup>
            {#if $screenWidth <= 832}
            <AOS animate="fade-up" ease="ease-out-cubic" delay={50} duration={1000} distance="30px">
                <h1 id="hero-heading">Close to</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={50} duration={1000} distance="30px">
                <h1>the City,</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={150} duration={1000} distance="30px">
                <h1>Closer to</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={150} duration={1000} distance="30px">
                <h1>Nature</h1>
            </AOS>
            {:else}
            <AOS animate="fade-up" ease="ease-out-cubic" delay={50} duration={1000} distance="30px">
                <h1 id="hero-heading">Close to the City,</h1>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={150} duration={1000} distance="30px">
                <h1>Closer to Nature</h1>
            </AOS>
            {/if}
            <AOS animate="fade-up" ease="ease-out-cubic" delay={250} duration={1000} distance="30px">
                <nav class="hero-buttons" aria-label="Page navigation">
                    <ViewButtonBorder text="Properties" href="/#properties" />
                    <ViewButtonBorder text="Features" href="/#features" />
                </nav>
            </AOS>   
        </hgroup>
    </div>
</section>
<section class="second-section" aria-labelledby="properties-heading">
    <div class="ss-content" id="properties">
        <header>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1000} distance="30px">
                <h2 id="properties-heading">Find your home</h2>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={200} duration={1000} distance="30px">
                <p class="content-details">Join us in a place that is close to the city — but closer to nature. A home may be built with walls, but at GreenNest, it is built with care</p>
            </AOS>
        </header>
        <ul class="ma-stuff-grid" aria-label="Available properties">
            {#each properties as property, i (property.name)}
                <li>
                    <AOS animate="fade-up" ease="ease-out-cubic" delay={50 + i * 50} duration={1000} distance="30px">
                        <EstateCard {...property} href={`/p/${property.property}`} />
                    </AOS>
                </li>
            {/each}
        </ul>
    </div>
</section>
<section class="third-section" aria-labelledby="features-heading">
    <div class="ts-content" id="features">
        <header>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1000} distance="30px">
                <h2 id="features-heading">Why GreenNest?</h2>
            </AOS>
            <AOS animate="fade-up" ease="ease-out-cubic" delay={200} duration={1000} distance="30px">
                <p class="content-details">We are committed to building pragmatic houses with sustainability and safety in mind, bridging the gap between urban necessity and environmental responsibility.</p>
            </AOS>
        </header>
        <ul class="ts-content-grid" aria-label="GreenNest features">
            {#each features as feature, i (feature.name)}
                <li>
                    <AOS animate="fade-up" ease="ease-out-cubic" delay={50 + i * 25} duration={1000} distance="30px">
                        <FeatureCardSmall {...feature} />
                    </AOS>
                </li>
            {/each}
        </ul>
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