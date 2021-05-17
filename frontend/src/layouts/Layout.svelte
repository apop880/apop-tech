<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import ScrollToTop from '../components/ScrollToTop.svelte';

  export let templateHtml, request, data;
</script>

<style>
  :global(.container) {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
    padding-bottom: 10px;
    flex: 1;
  }

  @media (min-width: 1000px) {
    :global(.shifted) {
      position: relative;
      margin-top: -52px;
      background-color: #f9f5ef;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  :global(.content) {
    background: #f9f5ef;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" type="image/png" href="/favicon-32x32.png">
</svelte:head>
<div class="wrapper">
  <div class="main">
    <Header {request} nav={data.nav} />
    {@html templateHtml}
  </div>
  <Footer />
</div>
<ScrollToTop hydrate-client={{}} hydrate-options={{ loading: 'eager' }} />