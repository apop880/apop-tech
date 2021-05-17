<script>
  import Comments from '../../components/Comments.svelte';
  import Hero from '../../components/Hero.svelte';

  export let data, helpers, request, settings; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js
  let { Title, Excerpt, PublishDate, featuredPhoto, hidePhotoOnPost, tags, Body } = data.posts.find(post => post.slug === request.slug);

  const MDImgRegex = /!\[([A-Za-z-_ \d]*)\]\(([^)]*)\)/gm;
  let match;
  while ((match = MDImgRegex.exec(Body)) !== null) {
    const [fullMatch, alt, src] = match;
    Body = Body.replace(
      fullMatch,
      `<div class="md-img">${settings.shortcodes.openPattern}picture alt="${alt}" src="${src}" /${settings.shortcodes.closePattern}</div>`,
    );
  }
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

  :global(h2) {
    margin-top: 2rem;
  }

  :global(pre) {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 1.5rem 3px 3rem;
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
  Posted {PublishDate} {#each tags as {Name, slug}}<a class="tag" href={"/posts/"+slug}>{Name}</a>{/each}
</div>
{#if featuredPhoto !== null && !hidePhotoOnPost}
{@html helpers.shortcode({name: 'picture', props: {src: featuredPhoto.url}})}
{/if}
{@html helpers.markdownParser.processSync(Body)}
<Comments  hydrate-client={{}} />
</div>
