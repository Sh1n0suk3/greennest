<script>
	import { name } from '$lib/constants';
	// import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { screenWidth } from '$lib/screenWidth.js';
	let { children } = $props();
	/*
	let screenWidth = $state(0);
	$effect(() => {
    	screenWidth = window.innerWidth;
    
    	const handleResize = () => {
    	    screenWidth = window.innerWidth;
    	};
    
    	window.addEventListener('resize', handleResize);
    
    	return () => {
    	    window.removeEventListener('resize', handleResize);
    	};
});
*/

	let mobileNavVisible = $state(false);

	function handleNavClick() {
		mobileNavVisible = false;
	}
</script>

<svelte:head>
	<title>GreenNest</title>
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
</svelte:head>

<header class:screen-navbar-visible={mobileNavVisible}>
	<nav class="navbar" aria-label="Main navigation">
		<a href="/" class="logo">{name}</a>
		<div class="navbar-menu-container">
			{#if $screenWidth <= 768}
				<button onclick={() => mobileNavVisible = !mobileNavVisible} class="navbar-menu" aria-label="Toggle navigation menu"><img src="/svg/menu.svg" alt="Menu icon"></button>
			{/if}
			{#if mobileNavVisible || $screenWidth > 768}
				<ul class="navbar-links" transition:slide={{ duration: 200, axis: 'y' }}>
					<li><a class="navbar-right" href="/#properties" onclick={handleNavClick}>Properties</a></li>
					<li><a class="navbar-right" href="/#features" onclick={handleNavClick}>Features</a></li>
					<li><a class="navbar-right" href="/a/" onclick={handleNavClick}>About</a></li>
				</ul>
			{/if}
		</div>
	</nav>
</header>

<main>
	{@render children()}
</main>


<footer>
	<p contenteditable="true">&copy; 2026 {name}. Copying Ma homework will result in sussy Ma activities.</p>
</footer>

<style>
	@font-face {
		font-display: swap;
		font-family: 'Yeseva One';
		src: url('/fonts/Yeseva_One/yeseva-one-v24-latin-regular.woff2') format('woff2'),
       		 url('/fonts/Yeseva_One/yeseva-one-v24-latin-regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
	  font-display: swap; 
	  font-family: 'Poppins';
	  font-style: normal;
	  font-weight: 100;
	  src: url('/fonts/Poppins/poppins-v24-latin-100.woff2') format('woff2'), 
    url('/fonts/Poppins/poppins-v24-latin-100.ttf') format('truetype'); 
	}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  src: url('/fonts/Poppins/poppins-v24-latin-100italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-100italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: url('/fonts/Poppins/poppins-v24-latin-200.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-200.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 200;
  src: url('/fonts/Poppins/poppins-v24-latin-200italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-200italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/Poppins/poppins-v24-latin-300.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-300.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: url('/fonts/Poppins/poppins-v24-latin-300italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-300italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/Poppins/poppins-v24-latin-regular.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-regular.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: url('/fonts/Poppins/poppins-v24-latin-italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/Poppins/poppins-v24-latin-500.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-500.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: url('/fonts/Poppins/poppins-v24-latin-500italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-500italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/Poppins/poppins-v24-latin-600.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-600.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  src: url('/fonts/Poppins/poppins-v24-latin-600italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-600italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/Poppins/poppins-v24-latin-700.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-700.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: url('/fonts/Poppins/poppins-v24-latin-700italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-700italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/Poppins/poppins-v24-latin-800.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-800.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: url('/fonts/Poppins/poppins-v24-latin-800italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-800italic.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/Poppins/poppins-v24-latin-900.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-900.ttf') format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 900;
  src: url('/fonts/Poppins/poppins-v24-latin-900italic.woff2') format('woff2'), 
       url('/fonts/Poppins/poppins-v24-latin-900italic.ttf') format('truetype'); 
}

	:root {

		--primary-color: rgb(67, 35, 35);
		--primary-color-transparent: rgba(67, 35, 35, 0.4);
		--primary-color-transparent-light: rgba(67, 35, 35, 0.05);


		--secondary-color: rgb(47, 87, 85);
		--secondary-color-transparent: rgba(47, 87, 85, 0.8);

		--third-color: rgb(90, 150, 144);

		--fourth-color: rgb(224, 217, 217);
		--fourth-color-transparent: rgba(224, 217, 217, 0.6);
		--fourth-color-darker: rgb(219, 212, 212);
		--fourth-color-brighter: rgb(234, 227, 227);

		--fifth-color: rgb(35, 76, 106);

		font-size: 16px;

		margin: 0;
		padding: 0;

		overflow-x: hidden;

		scroll-behavior: smooth;

		scrollbar-color: var(--third-color) var(--fourth-color);
  		scrollbar-width: thin;
	}

	

	:global(body) {
		margin: 0;
		font-family: 'Poppins', sans-serif;
		background-color: black;
		color: var(--primary-color);
	}

	:global(h1, h2) {
		font-family: 'Yeseva One';
		letter-spacing: -1px;
	}

	/*
	@media (width < 768px) {
			:root {
				font-size: 12px;
		}
	}
		*/

	header {
		position: fixed;
		background-color: var(--secondary-color-transparent);
		backdrop-filter: blur(16px);
		padding: 1rem 0;
		color: white;
		z-index: 9999;
		width: 100%;
		height: 24px;
	}

	/*
	@supports (-webkit-touch-callout: none) {
		header {
			background-color: var(--secondary-color);
		}
	}
		*/

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4rem;
		margin: 0 4dvw;
	}

	.navbar-links {
		display: flex;
		align-items: center;
		gap: 4rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.navbar-links li {
		display: inline;
	}

	@media (width <= 768px) {

		header {
			height: fit-content;
			transition: border-radius 200ms ease-in-out;
		}

		header.screen-navbar-visible {
			border-bottom-left-radius: 14px;
			border-bottom-right-radius: 14px;
		}

		.navbar {
			transition: all 300ms ease;
		}
		

		.navbar-menu-container {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.navbar-links {
			position: static;
			top: 100%;
			right: 0;
			margin-top: 1rem;
			padding: 1.5rem 0;
			gap: 1.75rem 0;
			flex-direction: column;
			align-items: flex-end;
			justify-content: flex-start;
		}

		.navbar-menu {
			background: none;
			border: none;
			cursor: pointer;
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.navbar-menu img {
			width: 32px;
			height: 32px;
			filter: invert(100%);
			display: block;
		}
	}

	.navbar a {
		text-decoration: none;
		color: inherit;
		font-size: 1.25rem;
		text-wrap: nowrap;
	}
	
	.logo {
		color: var(--primary-color);
		margin-right: auto;
		font-weight: 600;
	}

	main {
		padding: 0;
		margin: 0 auto;
	}

	:global(footer) {
		text-align: center;
		padding: 2rem;
		background-color: var(--secondary-color);
		color: white;
		font-size: 1.25rem;
	}

	/* First Section Styling */

	:global(.first-section) {
		display: flex;
		/* height: 864px; */
		height: 100vh;
		min-height: 512px;
		max-height: 1080px;
		width: 100%;
		margin: 0;
	}

	:global(.first-section::before) {
		content: "";
    	position: absolute;
		inset: 0;
    	background: linear-gradient(90deg, 
     		rgba(0, 0, 0, 0) 0%, 
			rgba(67, 35, 35, 0) 28%, 
    		rgba(67, 35, 35, 0.6) 60%, 
    	    rgba(67, 35, 35, 0.8) 100%
    	);
		height: 1296px;
    	z-index: -1;
	}

	:global(.fs-content-right) {
		position: absolute;
		color: white;
		top: 20%;
		right: 7.5%;
		text-align: right;
		font-size: 3rem;
		line-height: 0.75;
		width: 800px;
		/* border: 10px solid black; */
	}

	:global(.fs-content-right h1) {
		text-shadow: 1px 2px 6px var(--primary-color-transparent);
	}

	@media (width < 1112px) {
		:global(.fs-content-right) {
			font-size: 2.5rem;
		}
	}

	@media (width < 768px) {
		:global(.fs-content-right) {
			font-size: 2rem;
		}

		:global(.fs-content-right .hero-buttons) {
			margin-top: 64px;
		}
	}

	@media (width < 576px) {
		:global(.fs-content-right) {
			font-size: 1.75rem;
		}

		:global(.fs-content-right .hero-buttons) {
			margin-top: 84px;
		}

		:global(.first-section::before) {
		background: linear-gradient(0deg, 
     		rgba(0, 0, 0, 0) 0%, 
			rgba(67, 35, 35, 0) 42%, 
    		rgba(67, 35, 35, 0.6) 65%, 
    	    rgba(67, 35, 35, 0.8) 100%
    	);
		}
	}

	@media (width < 480px) {
		:global(.fs-content-right) {
			font-size: 1.45rem;
		}

		:global(.fs-content-right .hero-buttons) {
			margin-top: 84px;
		}
	}

	:global(.fs-content-right p) {
		opacity: 0.8;
		font-size: 1rem;
		text-align: center;
	}

	/* Looked worse than expected...
	@keyframes clipReveal {
		from {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		}
		to {
			clip-path: polygon(0 0, 95% 0, 70% 100%, 0% 100%);
		}
	}
	*/

	@keyframes revealImage {
		0% {
			filter: saturate(0%);
			opacity: 0;
		}
		50% {
			filter: saturate(100%);
		}
		100% {
			opacity: 1;
		}
	}

	:global(.first-section .bg-image) {
		position: absolute;
		width: 100%;
    	height: 100vh;
		min-height: 512px;
		max-height: 1080px;
		object-fit: cover;
		background-size: cover;
		background-repeat: no-repeat;
		/* clip-path: polygon(0 0, 95% 0, 70% 100%, 0% 100%); */
		/* animation: clipReveal 2s ease-in-out 0s forwards; */
		animation: revealImage 1500ms ease-in;
		/* transition: all 2500ms ease-in; */
		z-index: -2;
	}

	/* Second Section Styling */

	:global(.second-section) {
		background-color: var(--fourth-color);
		color: var(--primary-color);
		display: flex;
		justify-content: center;
		transition: all 1s ease;
	}

	:global(.second-section-blank) {
		color: var(--primary-color);
	}

	:global(.ss-content) {
		color: inherit;
		margin: 0 auto;
		width: 95%;
	}

	:global(.ss-content h2) {
		font-size: 4rem;
		margin-top: 64px;
	}

	:global(.ss-content p) {
		font-size: 1.25rem;
	}

	@media (width > 768px) {
		:global(.ss-content h2, .ss-content p) {
			padding: 0 5%;
		}
	}

	:global(.ma-stuff-grid) { 
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 1.75dvw;
		margin: 0 auto;
    }

    :global(.ma-stuff-item) {
		position: relative;
        display: inline-block;
		width: 36dvw;
		/* height: calc(389px + 12dvw); */
		height: fit-content;
		min-height: 32dvw;
        break-inside: avoid;
        /* padding: 24px; */
		padding: 20px;
		background: var(--fourth-color-brighter);
        border-radius: 16px;
    }

	/* :global(.neumorphism) {
		box-shadow: 18px 18px 48px #c5c5c5,
        			-18px -18px 48px #fbfbfb;
	} */
	
	:global(.neumorphism) {
		box-shadow: -8px -8px 16px 0px rgba(255, 255, 255, 0.45), 8px 8px 16px 0px rgba(0, 0, 0, 0.075);
		border: 2px solid var(--primary-color-transparent-light);
	}

	:global(.ma-stuff-item .button-container) {
    	position: absolute;
    	bottom: 24px;
    	display: flex;
    	gap: 16px;
	}

		:global(.caption-inline) { 
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 12px;
			text-wrap: nowrap;
		}

        :global(.caption) { 
			font-size: 1.5rem !important;
			line-height: 1.5;
			margin: auto 0;
			padding: 4px 8px;
			opacity: 0.9;
		}

		:global(.caption-price) {
			font-size: 2.25rem !important;
			margin: 0;
			padding: 4px 8px !important;
			opacity: 0.9;
		}

		:global(h3.caption) { 
			font-size: 2.25rem !important;
			text-wrap: wrap !important;
			text-align: start;
			line-height: 1;
			padding: 0 8px 8px;
		}

		:global(p.caption) {
			/* clamp(128px, calc(192px - 6dvw), 168px) */
			margin-bottom: 96px;
			padding: 0 8px !important;
		}

		:global(.responsive-media) { 
			width: 100%; 
			height: auto;
			object-fit: cover;
			display: block;
			margin: 0 auto;
			border-radius: 14px;
			animation: revealImage 2000ms ease-in 0s;
		}

		@media (width < 1216px) {

			:global(.ma-stuff-grid) {
				justify-content: center;
				gap: 32px;
			}

			:global(.ma-stuff-item) {
				width: 77dvw;
				height: fit-content;
				display: block;
			}

			:global(p.caption) {
				margin-bottom: 144px;
			}

			:global(.responsive-media) {
				width: 100%;
				height: auto;
				max-height: 704px;
			}

			:global(.ma-stuff-item .button-container) {
    			position: absolute;
    			bottom: 24px;
				left: 50%;
				transform: translateX(-50%);
    			display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: calc(77dvw - 36px);
    			gap: clamp(8px, 12px, 24px);
			}
		}
		

		@media (width > 768px) and (width < 1216px) {
			:global(p.caption) {
				margin-bottom: 168px;
			}
		}

		@media (width < 768px) {
			:global(.ma-stuff-item) {
				padding: 16px 16px 48px;
				width: 84dvw;

			}

			:global(.ma-stuff-item .button-container) {
				width: calc(84dvw - 28px);
			}
		}

		:global(.ma-stuff-item-small) {
			position: relative;
			width: 664px;
			height: fit-content;
        	break-inside: avoid;
			margin: auto;
			background: var(--fourth-color-brighter);
        	border-radius: 16px;
			transition: all 300ms ease;
			display: flex;
    		gap: 8px;
        }

		:global(.ma-stuff-item-small:hover) {
			background: var(--primary-color);
			color: white;
			box-shadow: none;
		}

		:global(.responsive-media-small) { 
			width: 336px;
			height: 232px;
			object-fit: cover;
			display: inline-block;
			margin: 0;
			border-radius: 16px;
			animation: revealImage 2000ms ease-in 0s;
		}

		:global(.caption-small) { 
			font-size: 1.5rem;
			margin: 0 0 0px 16px;
			opacity: 0.9;
		}

		:global(.caption-price-small) {
			font-size: 1.5rem;
			margin: 0 0 6px 16px;
			opacity: 0.9;
		}

		:global(h3.caption-small) { 
			font-size: 2.25rem;
			line-height: 1;
			margin: 0 16px 8px !important;
		}

		:global(.button-container-small) {
    	position: absolute;
    	bottom: 24px;
		margin: 0 12px;
    	display: flex;
    	gap: clamp(12px, 24px, 42px);
	}

	@media (width < 1528px) {
		:global(.ma-stuff-item-small) {
			width: 100%;
			box-sizing: border-box;
		}

		:global(.responsive-media-small) {
			width: clamp(216px, 36dvw, 624px);
			height: auto;
		}

		:global(h3.caption-small) {
			margin: 8px 0 0 16px;
		}

		:global(.caption-small) {
			word-wrap: break-word;
			overflow-wrap: break-word;
		}
	}

	@media (width < 768px) {
		:global(.ma-stuff-item-small) {
			width: 93.48% !important;
			padding: 16px;
			gap: 0;
			width: 84dvw;
		}

		:global(.responsive-media-small) {
			width: clamp(16px, 26dvw, 624px);
			height: auto;
		}
	}

        /* :global(.responsive-media:hover) {
            transform: scale(1.1);
            top: 50%;
            left: 50%;
        } */

	:global(.third-section) {
		background-color: var(--fourth-color);
		/* background: linear-gradient(0deg,rgba(0, 0, 0, 1) 25%, rgba(224, 217, 217, 1) 100%); */
		color: var(--primary-color);
		display: flex;
		justify-content: center;
		transition: all 1s ease;
	}

	:global(.third-section-blank) {
		color: var(--fifth-color);
		display: flex;
		justify-content: center;
	}

	:global(.ts-content) {
		height: fit-content;
		color: inherit;
		margin: 0 auto;
		width: 95%;
	}

	

	:global(.ts-content h2) {
		font-size: 4rem;
		margin-top: 64px;
	}

	@media (width > 768px) {
		:global(.ts-content h2, .ts-content p) {
			padding: 0 5%;
		}

		:global(.caption-small) {
			padding: 0 !important;
		}
	}

	:global(.content-details) {
		margin-top: -32px;
		margin-bottom: 48px;
		font-size: 1.5rem !important;
	}

	:global(.ts-content-grid) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 24px;
		margin: 0 auto 64px;
	}

	:global(.ma-stuff-item-small-feature) {
		position: relative;
		width: clamp(406px, 39dvw, 39dvw);
		height: calc(512px - 16dvw); /* 589px 289px */
        break-inside: avoid;
        padding: 20px;
		margin: auto;
		background: var(--fourth-color-brighter);
        display: flex;
        border-radius: 16px;
    }

	:global(.responsive-media-small-feature) {
		width: clamp(128px, 14dvw, 256px);
		border-radius: 14px;
		height: 100%;
		object-fit: cover;
	}

	@media (width < 1200px) {
		:global(.ma-stuff-item-small-feature) {
			width: 77dvw;
			height: calc(480px - 24dvw); /* 320px */
		}

		:global(.responsive-media-small-feature) {
			width: clamp(128px, 28dvw, 256px);
			height: 100%;
		}
	}

	@media (width < 768px) {
		:global(.ma-stuff-item-small-feature) {
			width: 84dvw;
			height: calc(464px - 24dvw);
			padding: 16px;
		}
	}

	:global(.ts-content p) {
		line-height: 1.5;
	}

	/*
	:global(.f-content) {
		margin-top: 32px;
	}

	:global(.f-content-info) {
		display: flex;
		justify-content: center;
	}

	:global(.f-content-info ul) {
		text-align: center;
		list-style: none;

	}

	:global(.f-content-info h3) {
		font-size: 2.25rem;
		margin: 0;
	}

	:global(.f-content-info a) {
		color: white;
		text-decoration: none;
	}
		*/
</style>
