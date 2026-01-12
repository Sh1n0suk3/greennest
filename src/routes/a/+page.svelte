<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  import { AOS } from 'svelte-animate-on-scroll';

  let isLoaded = $state(false); 
    onMount(() => {
        isLoaded = true;
    });
</script>

{#if isLoaded}
<section class="ma" aria-labelledby="about-heading">
  <h2 class="heading" id="about-heading" in:fly={{ y: 35, duration: 1500, delay: 100 }}>About</h2>
  <article class="gay-ma neumorphism" in:fly={{ y: 35, duration: 1500, delay: 300 }}>
    <p style="text-align: justify;">
        At <a href="/">GreenNest</a>, we aren't just developers. We bridge the gap between urban necessity and environmental responsibility. We believe a home is more than a building; it is a sanctuary that respects both your modern lifestyle and the natural world around us, built with a commitment to <strong>pragmatic sustainability</strong>.
    </p>

    <p style="text-align: justify;">
        Our approach is rooted in science: we don't just follow the laws; we design around the elements.
    </p>

    <h2 style="margin-top: 20px; font-weight: normal;">
        Our Core Commitments
    </h2>

    <ol style="list-style: none; padding-left: 0;">
        <li style="margin-bottom: 25px;">
            <h3 style="margin: 0 0 5px 0; color: #222;">
                1. Evidence-Based Design
            </h3>
            <p style="margin: 0; text-align: justify;">
                We orient our homes to maximize the cool North breeze while shielding living areas from the harsh afternoon West sun. This ensures every GreenNest home is energy-efficient by design, reducing your reliance on artificial cooling and lowering long-term costs.
            </p>
        </li>
        
        <li style="margin-bottom: 25px;">
            <h3 style="margin: 0 0 5px 0; color: #222;">
                2. Uncompromising Safety & Privacy
            </h3>
            <p style="margin: 0; text-align: justify;">
                Your peace of mind is our priority. By strictly adhering to Ministerial Regulation No. 55, we ensure 30% of your land remains as open green space. Our precise setbacks provide fire safety and physical privacy, ensuring a secure, family-friendly environment.
            </p>
        </li>

        <li style="margin-bottom: 25px;">
            <h3 style="margin: 0 0 5px 0; color: #222;">
                3. Sustainable Skill Development
            </h3>
            <p style="margin: 0; text-align: justify;">
                Choosing GreenNest means investing in a team dedicated to growth. We continue to develop our expertise in sustainable construction management to ensure we don't just meet industry standards, but exceed them—transforming blueprints into breathable living spaces.
            </p>
        </li>
    </ol>
    <p style="font-size: 0.9em; text-align: center; color: #555;">
        Inquiries regarding our upcoming projects should be directed to <strong><a href="mailto:sales@notma.org">sales@notma.org</a></strong>.
    </p>
  </article>
 <AOS animate="fade-up" ease="ease-out-cubic" delay={100} duration={1250} distance="35px">
  <figure class="gay-ma-stuff-item-small neumorphism">
    <img loading="lazy" class="gay-responsive-media-small" alt="Ma, the developer" src="/img/ma.webp">
    <figcaption>
        <h3 class="caption-small">Ma, the developer</h3>
        <p class="caption-small"><em>Ma will be Ma. And always be Ma.</em></p>
        <p class="caption-small">This website was a Certified Ma Moment™ to create (I mean it took forever to build this very Ma site). Learn Svelte, design layout, write code, see elements look disproportionate, enter the <strong>CSS nightmare</strong>, refine, write some Ma stuff, and finally... publish. Awwww! If it looks broken, it's not. It's just very <em>Ma</em> (but might be fixed.)</p>
        <p class="caption-small">Built with <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>.</p>
    </figcaption>
  </figure>
  <figure class="gay-ma-stuff-item-small super-gay-ma-stuff-item-small neumorphism">
    <img loading="lazy" class="gay-responsive-media" alt="Best CSS developer award" src="/img/bestcssdev.webp">
    <figcaption>
        <h3 class="caption-small">As always, the <s>worst</s> best CSS developer award goes to Ma</h3>
        <p class="caption-small"><em>It's a Certified Ma CSS™. Please don't look at it, I swear.</em></p>
    </figcaption>
  </figure>
  </AOS>


</section>
{/if}

<style>
    .ma {
        background-color: var(--fourth-color);
        height: fit-content;
        padding-top: 24px;
        padding-bottom: 32px;
    }

    .heading {
        font-size: 4rem;
        padding: 0 24px;
        margin: 64px auto 32px;
        width: 80%;
    }

    .gay-ma {
        width: 80%;
        padding: 12px 24px;
        margin: 24px auto;
        border-radius: 16px;
        background: var(--fourth-color-brighter);
        font-size: 1.25rem;
        line-height: 1.6;
    }

    .gay-ma-stuff-item-small {
        position: relative;
        width: 80%;
        height: fit-content; /* 589px */
        break-inside: avoid;
        padding: 24px;
        margin: 24px auto;
        background: var(--fourth-color-brighter);
        border-radius: 16px;
        transition: all 300ms ease;
        display: flex;
        gap: 8px;
        line-height: 1.6;
    }

    .super-gay-ma-stuff-item-small {
        flex-direction: column;
    }

    .gay-ma-stuff-item-small figcaption {
        display: block;
    }

    .super-gay-ma-stuff-item-small figcaption h3 {
        margin-top: 16px;
    }

    .gay-responsive-media-small {
        width: 30%;
        height: auto;
        object-fit: cover;
        display: inline-block;
        border-radius: 16px;
        animation: revealImage 2000ms ease-in 0s;
    }

    .gay-responsive-media {
        width: 100%;
        height: 100%;
        border-radius: 16px;
    }

    @media (width < 768px) {
        .gay-ma {
            padding: 0 16px;
            width: 84dvw;
        }

        .gay-ma-stuff-item-small {
            padding: 16px;
            width: 84dvw;
        }
    }
</style>