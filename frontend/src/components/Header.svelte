<script>
    import MobileMenu from './MobileMenu.svelte';
    import AnimatedLogo from '../components/AnimatedLogo.svelte';
    import IconifyIcon from '@iconify/svelte';
    import chevronDown from '@iconify-icons/akar-icons/chevron-down';

    export let request;
    export let nav;
</script>

<header id="header" class:noHero={request.route !== "home" && request.hero !== true}>
<section>
        {#if request.route !== "home"}
        <a class="logo" href="/">
        <img src="/img/logo.svg" alt="logo" />
        </a>
        {:else}
        <AnimatedLogo hydrate-client={{}} hydrate-options={{ loading: 'eager' }} />
        {/if}
    <nav>
    <ul class="navList">
{#each nav as page}
    {#if "permalink" in page}
    <li><a href={page.permalink}>{page.name}</a></li>
    {:else}
    <li class="dropdown"><span>{page.name} <IconifyIcon icon={chevronDown} inline={true} height={15} class="iconify" /></span>
        <div class="dropdown-content">
            {#each page.children as child}
                <a href={child.permalink}>{child.name}</a>
            {/each}
        </div>
    </li>
    {/if}
{/each}
    </ul>
    <div class="mobileMenu"><MobileMenu hydrate-client={{nav}} hydrate-options={{ loading: 'eager' }} /></div>
    </nav>
</section>
</header>

<style>
    header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        padding: 10px 5px;
    }
    section {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 25% 1fr;
        max-width: 1200px;
        min-height: 43px;
    }
    .mobileMenu {
        display: none;
    }
    @media (max-width: 768px) {
        section {
            grid-template-columns: 50% 1fr;
        }
        .navList {
            display: none;
        }
        .mobileMenu {
            display: block;
        }
    }
    .noHero {
        background-color: rgb(34, 34, 34);
        position: relative;
    }
    a {
        color: white;
        text-decoration: underline;
    }
    section a {
        justify-self: left;
        align-self: center;
    }
    .logo {
        line-height: 0;
        margin-left: 8px;
    }
    img {
        width: 100%;
    }
    nav {
        justify-self: right;
        align-self: center;
        font-weight: 700;
        font-size: 1.3rem;
    }
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }
    nav li {
        padding: 10px 0;
    }
    nav li span, nav li a {
        color: white;
        text-align: center;
        padding: 10px;
        text-decoration: none;
    }

    nav li:hover {
        background: rgba(0,157,199,1);
    }

    nav li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 220px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        margin-top: 10px;
        font-size: 1.2rem;
    }

    .dropdown-content a {
        color: #06395a;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover {
        color: #ffffff;
        background: rgba(0,157,199,1);
    }

    .dropdown:hover .dropdown-content {
        display: block;
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>