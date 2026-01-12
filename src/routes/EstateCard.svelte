<script>
    import ViewButton from './ViewButton.svelte';
    import ViewButtonFull from './ViewButtonFull.svelte';
    import { onMount } from 'svelte';
    
	let { name, description, src, alt, price, href } = $props();
	
	let screenWidth = $state(0);
	
	onMount(() => {
		screenWidth = window.innerWidth;
		
		const handleResize = () => {
			screenWidth = window.innerWidth;
		};
		
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="ma-stuff-item neumorphism">
    <img loading="lazy" class="responsive-media" {src} {alt}>
    <div class="caption-inline">
        <h3 class="caption">{name}</h3>
        <p class="caption-price">{price}</p>
    </div>
	<p class="caption"><em>{description}</em></p>
    <div class="button-container">
        {#if screenWidth < 1216}
            <ViewButtonFull text="View Details" {href} />
            <ViewButtonFull text="Contact Sales" href="/vid/rr.mp4" />
        {:else}
            <ViewButton text="View Details" {href} />
            <ViewButton text="Contact Sales" href="/vid/rr.mp4" />
        {/if}
    </div>
</div>

<!-- in:fly={{ y: 35, duration: 1500, delay: 100 + index * 200 }} -->
