<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { clickOutside } from './clickOutside';

    export let nav;
    let open = false;
    let height;
    let mobileNav = [];

    nav.forEach(element => {
      if ("permalink" in element) {
        mobileNav = [...mobileNav, element]
      }
      else {
        element.children.forEach(child => {
          mobileNav = [...mobileNav, child]
        })
      }
    });

    onMount(() => {
        const element = document.getElementById("header");
        height = element.offsetHeight;
    })

    function handleClickOutside() {
        if (open) {
            open = false;
        }
    }
</script>

<style>
  .hamburger {
    position: fixed;
    display: flex;
    align-content: center;
    right: 15px;
    border: 1px solid rgb(34, 34, 34);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.91);
  padding: 8px;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 0.7; }
  .hamburger.open:hover {
    opacity: 0.7; }
  .hamburger.open .hamburger-inner,
  .hamburger.open .hamburger-inner::before,
  .hamburger.open .hamburger-inner::after {
    background-color: #000; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }
  .hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--collapse.open .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--collapse.open .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }
  .hamburger--collapse.open .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }

    .menu {
        position: fixed;
        left: 2.5vw;
        background: rgb(34, 34, 34);
        width: 95vw;
        color: white;
        border-radius: 16px;
    }

    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 10px;
        padding: 0;
        margin: 10px;
    }

    a {
        color: white;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        text-decoration: none;
    }
</style>

{#if height !== undefined}
<div class="hamburger hamburger--collapse" style="top: {(height-42)/2}px;" on:click={() => (open = !open)} class:open transition:fade>
    <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
</div>
{/if}

{#if open}
<div class="menu" style="top: {height-((height-42)/2)}px;" transition:fade use:clickOutside={"hamburger"} on:click_outside={handleClickOutside}>
    <ul>
      <a href="/"><li in:fly="{{x: -200, duration: 700 }}">Home</li></a>
        {#each mobileNav as page, i}
          <a href={page.permalink}><li in:fly="{{x: -200, duration: 700, delay:(i+1)*50 }}">{page.name}</li></a>
        {/each}
    </ul>
</div>
{/if}