<script>
    import IconifyIcon from '@iconify/svelte';
    import chevronUp from '@iconify-icons/akar-icons/chevron-up';
    import { fade } from 'svelte/transition';

    let y;
</script>

<svelte:window bind:scrollY={y} />

{#if y > 200}
    <div transition:fade on:click="{() => {
        window.scroll({
            top: 0
          });    
    }}"><IconifyIcon icon={chevronUp} inline={true} height={25} class="iconify" /></div>
{/if}

<style>
    div {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(34, 34, 34);
        border-radius: 50%;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        color: rgb(34, 34, 34);
        z-index: 100;
    }
</style>