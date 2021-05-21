<script>
  import Comments from '../../components/Comments.svelte';
  import Hero from '../../components/Hero.svelte';

  export let data, helpers, request;
  let { Title, Excerpt, PublishDate, RevisionDate, featuredPhoto, hidePhotoOnPost, tags, Body } = data;
</script>

<style>
  h1 {
    margin-bottom: 10px;
  }

  .title {
    margin-top: none;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed rgb(34, 34, 34);
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

  .tag:hover {
    background: rgba(0,157,199,1);
  }

  .bmoc {
    font-style: italic;
    text-align: center;
  }

  :global(h2) {
    margin-top: 2rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 2rem;
    position: relative;
    border-left: 10px solid rgb(34, 34, 34);
  }

  :global(blockquote p) {
    padding: 0;
  }
</style>

<svelte:head>
  <title>{Title} | Alex Popoutsis</title>

  <meta property="og:url" content={"https://www.apop.tech/posts/" + request.slug} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={Title} />
  <meta name="Description" content={Excerpt} />
  <meta property="og:description" content={Excerpt} />
  {#if featuredPhoto !== null}
    <meta property="og:image" content={"https://apop.tech" + featuredPhoto.url} />
  {/if}
  <meta
    name="twitter:card"
    content={featuredPhoto ? 'summary_large_image' : 'summary'}
  />
  <meta name="twitter:domain" content="apop.tech" />
  <meta name="twitter:creator" content="@apopoutsis" />
  <meta name="twitter:title" content={Title} />
  <meta name="twitter:description" content={Excerpt} />
  <meta
    name="twitter:image"
    content={featuredPhoto
      ? 'https://apop.tech' + featuredPhoto.url
      : 'https://www.apop.tech/img/logo_opengraph.png'}
  />
</svelte:head>

<Hero title={Title} subtitle={Excerpt} small=true />

<div class="container shifted">
<div class="title">
  Posted {PublishDate} {#if RevisionDate !== null}(Revised {RevisionDate}){/if} {#each tags as {Name, slug}}<a class="tag" href={"/posts/"+slug}>{Name}</a>{/each}
</div>
{#if featuredPhoto !== null && !hidePhotoOnPost}
{@html helpers.shortcode({name: 'picture', props: {src: featuredPhoto.url}})}
{/if}
{@html Body}
<p class="bmoc">Enjoyed this post? Consider <a class="button" href="https://buymeacoffee.com/uMhxJCzPS" target="_blank" rel="noopener">buying me a coffee</a> to fuel the creation of more content.</p>
<Comments  hydrate-client={{}} />
</div>
