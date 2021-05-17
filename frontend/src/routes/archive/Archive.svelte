<script>
  import Hero from '../../components/Hero.svelte';
  import IconifyIcon from '@iconify/svelte';
  import coffeeDuotone from '@iconify-icons/ph/coffee-duotone';

  export let data, helpers, request;

  let basePath = "/posts/";
  if("tag" in request) {
    basePath += request.tag + "/";
  }
  else if("path" in request) {
    basePath += request.path + "/";
  }
</script>

<style>
  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .entry:not(:first-child) {
    margin-top: 2rem;
    border-top: 1px dashed rgb(34, 34, 34);
  }

  .entry:first-child h2 {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
  }

  a:not(.tag):hover {
    color: rgba(0,157,199,1);
  }

  .container {
    display: grid;
    gap: 10px;
    grid-template-areas: 
      'posts'
      'pages'
      'nav';
  }

  .blog {
    grid-area: posts;
  }

  .archiveNav {
    grid-area: nav;
  }

  .pages {
    grid-area: pages;
    justify-self: center;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 18px;
  }

  .pages a {
    border-radius: 10px;
    padding: 8px;
    color: #FFFFFF;
    background-color: rgb(34, 34, 34);
    transition: 0.2s ease-in-out;
  }

  .pages a:hover {
    background: rgba(0,157,199,1);
    color: #FFFFFF;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 3fr 1fr;
      gap: 20px;
      grid-template-areas: 
        'posts nav'
        'pages .';
    }
  }

  .tag {
    margin: 4px;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: rgb(34, 34, 34);
    padding: 4px;
    border-radius: 4px;
    display: inline-flex;
    transition: 0.2s ease-in-out;
  }

  .button {
    padding: 8px;
    gap: 10px;
    text-decoration: none;
  }

  .tag:hover {
    background: rgba(0,157,199,1);
  }
</style>

<svelte:head>
  <title>{data.title} | Alex Popoutsis</title>
</svelte:head>

<Hero title={data.title} />

<div class="container shifted">
  <div class="blog">
      {#each data.archive as blog}
      <div class="entry">
        <h2><a href="{helpers.permalinks.blog({ slug: blog.slug }) }">{blog.Title}</a></h2>
        Posted {blog.PublishDate} {#each blog.tags as {Name, slug}}<a class="tag" href={"/posts/"+slug}>{Name}</a>{/each}
        <p>{blog.Excerpt}</p>
      </div>
      {/each}
  </div>
  <div class="pages">
    {#if "page" in request}
      {#if request.page > 1}
      <a href={basePath + (request.page - 1)}>Previous Page</a>
      {:else}
      <a href={basePath}>Previous Page</a>
      {/if}
      {#if request.last === undefined}       
      <a href={basePath + (request.page + 1)}>Next Page</a>
      {/if}
    {:else if request.last === undefined}
    <a href={basePath + "1/"}>Next Page</a>
    {/if}
  </div>
  <div class="archiveNav">
    <h3>Posts by Month</h3>
    <ul>
    {#each data.monthPages as { path, name }}
      <li><a href={"/posts/" + path}>{name}</a></li>
    {/each}
    </ul>
    <h3>Posts by Tag</h3>
    <ul>
    {#each data.tagPages as { slug, name }}
      <li><a href={"/posts/" + slug}>{name}</a></li>
    {/each}
    </ul>
    <a class="tag button" href="https://buymeacoffee.com/uMhxJCzPS" target="_blank" rel="noopener"><IconifyIcon icon={coffeeDuotone} height={20} />Buy Me a Coffee</a>
  </div>
</div>