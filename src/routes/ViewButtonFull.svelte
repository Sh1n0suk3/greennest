<script>
	let { text, href } = $props();
</script>

<a class="view-button neumorphism" {href}>{text}</a>

<style>
  .view-button {
      color: black;
      border: none;
      padding: clamp(0.5rem, 1rem, 1rem) clamp(0.75rem, 1.5dvw, 1rem);
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-wrap: nowrap;
      text-align: center;
      font-size: 1.5rem;
      text-decoration: none;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: var(--fourth-color-brighter);
      border: 2px solid var(--primary-color-transparent);
  }

  .view-button:hover {
      background-color: var(--primary-color);
      box-shadow: none;
      color: white;
  }
</style>
