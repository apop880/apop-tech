<script>
  export let title;
  export let permalink;
  export let photo = null;
  export let photoAlt = null;
  export let blogPhoto = null;
  export let helpers;
  export let description;
  export let date = null;

  let article;

  function handleClick() {
    const link = article.querySelector("a");
    link.click();
  }
</script>


  <!-- <a class="entry" href={helpers.permalinks.blog({ slug: blog.slug })}>
  <p class="title">{blog.frontmatter.title}</p>
  <p>{blog.frontmatter.excerpt}</p>
  <p class="info">Posted on {dateString}</p>
  </a> -->

  <article class="card" on:click="{handleClick}" bind:this={article}>
    <a href={permalink}>
    {#if photo !== null}
    {@html helpers.shortcode({name: 'picture', props: {src: photo, alt: photoAlt, maxWidth: 350, class: 'picture'}})}
    {/if}
    {#if blogPhoto !== null}
    {@html helpers.shortcode({name: 'picture', props: {src: blogPhoto.url, alt: blogPhoto.alternativeText, maxWidth: 350, class: 'picture'}})}
    {/if}
    <h3>{title}</h3>
    {#if date}
    <p class="info">Posted {date}</p>
    {/if}
    <p>{description}</p>
    </a>
  </article>

  <style>
    article {
      height: 100%;
      box-sizing: border-box;
    }
    a {
      color:white;
      text-decoration: none;
      display: block;
      height: 100%;
      padding: 0.5rem 1rem;
    }
    h3, p {
      margin: 7px;
    }
    .card {
      transition: 0.2s ease-in-out;
      background: rgb(34, 34, 34);
      border-radius: 16px;
      color: white;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.75);
      cursor: pointer;
    }
    .card:hover a h3 {
      color: rgba(0,157,199,1);
    }
    :global(.picture img), :global(.placeholder) {
      border-radius: 5px;
    }
  </style>