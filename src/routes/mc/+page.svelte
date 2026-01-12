<script>
  import { fly } from 'svelte/transition';
  import ViewButton from '../ViewButton.svelte';
  import { onMount } from 'svelte';
  let isLoaded = $state(false); 
    onMount(() => {
        isLoaded = true;
    });


      let principal = $state();
      let rate = $state();
      let time = $state();
      let type = $state("simple");
      let msg = $state("");
      let interest = $state();
      let total = $state();
      let result = $state("");
      let success = $state(false);
      const currency = "Baht";
    function calculateInterest() {

      if (isNaN(principal) || principal == 0 || isNaN(rate) || rate == 0 || isNaN(time) || time == 0) {
         msg = "Awww! Please fill in all fields with valid numbers.";
         success = false;
         return;
      }

      if (type === "simple") {
        interest = (principal * rate * time) / 100;
        total = principal + interest;
      } else {
        total = principal * Math.pow((1 + rate/100), time);
        interest = total - principal;
      }

       if (interest == 0) {
         msg = "Awww! Please fill in all fields with valid numbers.";
         success = false;
         return;
      }

      result = `
       ${interest.toFixed(2)} ${currency}
      `;
      success = true;
    }
</script>

{#if isLoaded}
<section class="ma" aria-labelledby="about-heading">
  <h2 class="heading" id="about-heading" in:fly={{ y: 35, duration: 1500, delay: 100 }}>About</h2>
  <article class="gay-ma neumorphism" in:fly={{ y: 35, duration: 1500, delay: 300 }}>
    <div class="calculator">
        <h2 class="title">Mortgage Calculator</h2>
    
        <div class="inline">
            <label>Start Money:</label>
            <input type="number" id="principal" placeholder="Amount" bind:value={principal}>

            <label class="margin-left">Interest Rate Per Year:</label>
            <input type="number" id="rate" placeholder="Rate" bind:value={rate}>
        </div>

    <div class="inline">
        <label>Time (year):</label>
        <input type="number" id="time" placeholder="Year" bind:value={time}>

        <label>Calculation Type:</label>
        <select id="type" bind:value={type}>
          <option value="simple">    Simple Interest</option>
          <option value="compound">    Compound Interest</option>
        </select>
    </div>

    <!-- <button onclick="calculateInterest()">Calculate!</button> -->
    <button class="view-button neumorphism" onclick={() => calculateInterest()}>Calculate</button>
    {#if success}
    <h2 class="result">Required Mortgage</h2>
    <button class="result" id="result" onclick={() => {navigator.clipboard.writeText(result)}}><strong>{result}</strong></button>
    {:else}
    <div class="message" id="message">{@html msg}</div>
    {/if}
  </div>
</article>
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

    .message {
      margin-top: 16px;
      color: red;
    }

    .title {
      margin: 0;
    }

    label {
      margin: 16px 8px;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 4px;
      display: inline-block;
    }

  select, ::picker(select) {
    appearance: base-select;
  }

  ::picker(select) {
    padding-right: 4px;
  }

    input, select, option, button {
      border-radius: 8px;
      padding: 10px 16px;
      font-size: 1rem;
      border: 2px solid var(--fourth-color-darker);
      background-color: var(--fourth-color);
      color: var(--primary-color);
      transition: all 200ms ease;
      font-family: inherit;
    }
      

    ::picker(select) {
  border: none;
}

    option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

::picker(select) {
  border-radius: 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}

    input:active, input:hover, input:focus, select:hover, select:focus, button:hover {
      outline: none;
      border-color: var(--third-color);
      box-shadow: 0 0 0 3px rgba(90, 150, 144, 0.1);
    }

    button:hover {
      cursor: pointer;
    }

    input::placeholder {
      color: var(--primary-color-transparent);
    }

    select {
      cursor: pointer;
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

     .view-button {
      font-family: inherit;
      color: var(--primary-color);
      border: none;
      margin-top: 16px;
      padding: clamp(0.5rem, 0.65rem, 1rem) clamp(1.5rem, 1.5dvw, 7rem);
      width: clamp(9rem, 14dvw, 12rem);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-wrap: nowrap;
      text-align: center;
      font-size: 1.25rem;
      text-decoration: none;
      box-sizing: border-box;
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