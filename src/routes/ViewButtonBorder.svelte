<script>
	let { text, href } = $props();
</script>

<a class="view-button" {href}>{text}</a>

<style>
  .view-button {
      color: white;
      padding: clamp(0.5rem, 1rem, 1rem) clamp(0.75rem, 1.5dvw, 1rem);
      font-size: 1.25rem;
      width: clamp(9rem, 10dvw, 12rem);
      text-align: center;
      text-wrap: nowrap;
      font-size: 1.5rem;
      text-decoration: none;
      border-radius: 16px;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s, color 0.3s ease;
      border: 2px solid white;
  }

  .view-button:hover {
      background-color: white;
      border: 2px solid white;
      color: black;
  }
</style>
