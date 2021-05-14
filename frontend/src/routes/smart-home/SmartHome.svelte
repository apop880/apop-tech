<script>
    import Hero from '../../components/Hero.svelte';

    export let data, helpers;
</script>
  
  <svelte:head>
    <title>My Smart Home | Alex Popoutsis</title>
  </svelte:head>
  
  <Hero title="My Smart Home" subtitle="Here are the products and software I use in my own house." />
  
  <div class="container">
    <p><strong>Last Updated:</strong> {data.updated}</p>
    <p>To view my configuration files and other details, check out my GitHub repository <a href="https://github.com/apop880/home-assistant-config">here.</a></p>
    <br />
    <p><strong>Jump to Section:</strong>
      {#each data.devices as category, i}
        <span>{#if i > 0} | {/if}<a href={'#'+category.id}>{category.Category}</a></span>
      {/each}
    </p>

    <div class="grid">
      {#each data.devices as category}
        <div class="header">
          <h2><a name={category.id}>{category.Category}</a></h2>
        </div>
        {#each category.Device as {Name, Quantity, device_protocols, Comments}}
          <div class="device">
            <h3>{Name} {#if Quantity !== null && Quantity > 0}({Quantity}){/if}</h3>
            {#if device_protocols.length > 0}
              <p><strong>Protocol: </strong> 
                {#each device_protocols as {Name}, i}
                  {#if i > 0}
                  , {/if}
                  {Name}
                {/each}
              </p>
            {/if}
            {#if Comments !== null && Comments.length > 0}
              <p><strong>Comments: </strong> {Comments}</p>
            {/if}
          </div>
        {/each}
      {/each}
    </div>
  
  </div>

  <style>
    .grid {
      display: grid;
      gap: 1rem;
      font-size: 1.1rem;
      grid-template-columns: minmax(0, 1fr);
      margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .header  {
        grid-column: 1 / span 2;
      }
    }

    .device {
      background: rgb(34, 34, 34);
      border-radius: 16px;
      padding: 1rem;
      color: white;
    }

    h2 {
      margin-bottom: 0;
    }

    h2 a {
      text-decoration: none;
    }

    h3 {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    p {
      margin: 0;
    }
  </style>