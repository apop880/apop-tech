<script>
  import HomeContent from '../../components/HomeContent.svelte';
  import Hero from '../../components/Hero.svelte';
  import About from '../../components/About.svelte';
  export let data, helpers;
</script>

<style>
  .container {
    padding-bottom: 0;
  }

  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem 0;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 2rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  .button {
    background-color: rgb(34, 34, 34);
    color: white;
    padding: 8px;
    border-radius: 5px;
    margin-left: 20px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }

  .button:hover {
      background-color: rgba(0,157,199,1);
    }
</style>

<svelte:head>
  <title>Alex Popoutsis: Web Dev | IT | Smart Home</title>

  <meta property="og:url" content="https://www.apop.tech" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Alex Popoutsis" />
  <meta name="Description" content="Web Dev | IT | Smart Home" />
  <meta property="og:description" content="Web Dev | IT | Smart Home" />
  <meta property="og:image" content="https://www.apop.tech/img/logo_opengraph.png" />
  <meta
    name="twitter:card"
    content="summary_large_image"
  />
  <meta name="twitter:domain" content="apop.tech" />
  <meta name="twitter:creator" content="@apopoutsis" />
  <meta name="twitter:title" content="Alex Popoutsis" />
  <meta name="twitter:description" content="Web Dev | IT | Smart Home" />
  <meta
    name="twitter:image"
    content="https://www.apop.tech/img/logo_opengraph.png"
  />
</svelte:head>

<Hero
  title="Hello! I'm Alex,"
  subtitle="a healthcare IT professional, web developer, smart home aficionado, and maker of dad jokes." />

<div class="container">
<div class="blog">
<h2>Latest Posts <a class="button" style="font-size: 70%;" href={helpers.permalinks.archive({ slug: "posts" })}>View More</a></h2>
  <div class="entries">
    {#each data.posts.slice(0, 3) as blog}
      <HomeContent title={blog.Title} description={blog.Excerpt} date={blog.PublishDate} {helpers} blogPhoto={blog.featuredPhoto} permalink={helpers.permalinks.blog({ slug: blog.slug })} />
    {/each}
  </div>
</div>
<div class="features">
  <h2>Featured Content</h2>
    <div class="entries">
      <HomeContent title="My Smart Home" photo="/uploads/smartbulb_4b397c1e46.jpg" {helpers} permalink="/smart-home" description="Explore the current state of my Smart Home." />
      <HomeContent title="Smart Home 101" photo="/uploads/puzzle_ea9a056dc0.jpg" {helpers} permalink="/posts/smart-home-101" description="Interested in Home Automation? Start Here." />
      <HomeContent title="Freelance Services" photo="/uploads/services_2a319b3b13.jpg" {helpers} permalink="/services" description="I'm currently accepting clients for freelance website, Smart Home, or other tech services. Find out more and get in touch here." />
    </div>
  </div>


<About {helpers} />



</div>