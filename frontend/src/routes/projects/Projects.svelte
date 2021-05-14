<script>
    import Hero from '../../components/Hero.svelte';

    export let data, helpers;
</script>
  
  <svelte:head>
    <title>Services | Alex Popoutsis</title>
  </svelte:head>
  
  <Hero title="Projects" subtitle="Here is a selection of projects that are ongoing or recently completed." />
  
  <div class="container shifted">
    {#each data.projects.Project as {Name, Dates, Technologies, Description}}
      <h2>{Name}</h2>
      <p><strong>Dates:</strong> {Dates}<br />
        <strong>Technologies:</strong> {Technologies}
      {@html helpers.markdownParser.processSync(Description)}
    {/each}
  </div>

  <style>
    h2 {
      margin-bottom: 0;
    }
  </style>