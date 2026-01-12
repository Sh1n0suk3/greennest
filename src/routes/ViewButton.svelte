<script>
	let { text, href } = $props();
</script>

<a class="view-button neumorphism" {href}>{text}</a>

<style>
  .view-button {
      color: var(--primary-color);
      border: none;
      padding: clamp(0.5rem, 1rem, 1rem) clamp(5.5rem, 6dvw, 7rem);
      width: clamp(9rem, 14dvw, 12rem);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-wrap: nowrap;
      text-align: center;
      font-size: 1.5rem;
      text-decoration: none;
      box-sizing: border-box;
      border-radius: 16px;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s, color 0.3s ease;
      background-color: var(--fourth-color-brighter);
      border: 2px solid var(--primary-color-transparent);
  }

  .view-button:hover {
      background-color: var(--primary-color);
      box-shadow: none;
      color: white;
  }
</style>
