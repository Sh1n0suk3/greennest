<script>
	let { name, description, src, alt } = $props();
</script>

<div class="ma-stuff-item-small-feature neumorphism">
    <div>
        <img loading="lazy" class="responsive-media-small-feature" {src} {alt}>
    </div>
    <div>
        <h3 class="caption-small">{name}</h3>
        <p class="caption-small"><em>{@html description}</em></p>
    </div>
</div>

<!-- in:fly={{ y: 35, duration: 1500, delay: 100 + index * 200 }} -->
