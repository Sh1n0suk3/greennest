<script>
    import { fly } from 'svelte/transition';
    import ViewButton from './ViewButton.svelte';
    // import ViewButtonBorder from './ViewButtonBorder.svelte';

	let { name, description, src, alt, price, visible, index, href } = $props();
</script>

{#if visible}
<a {href}>
<div class="ma-stuff-item-small neumorphism">
        <img loading="lazy" class="responsive-media-small" {src} {alt}>
    <div>
        <h3 class="caption-small">{name}</h3>
        <p class="caption-price-small">{price}</p>
        <p class="caption-small"><em>{description}</em></p>
        <!-- <div class="button-container-small">
            <ViewButton text="View Details" {href} />
        </div> -->
    </div>
</div>
</a>
{/if}

<style>
    a {
        text-decoration: none !important;
        color: var(--primary-color);
    }
</style>