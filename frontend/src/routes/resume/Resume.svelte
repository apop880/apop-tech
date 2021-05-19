<script>
    import Hero from '../../components/Hero.svelte';

    export let data, helpers;
</script>
  
  <svelte:head>
    <title>Resume | Alex Popoutsis</title>
  </svelte:head>
  
  <Hero title="My Resume" />
  
  <div class="container shifted">
    <h2>Work Experience</h2>
    {#each data.resume.Employer as {Name, Dates, Location, Roles}}
      <h3>{Name}, {Location}</h3>
      <p><strong>{Dates}</strong></p>
      <div class="indent">
        {#each Roles as {Name, Dates, Description}}
          <h3>{Name}</h3>
          <p><strong>{Dates}</strong></p>
          {@html Description}
        {/each}
      </div>
    {/each}
    <hr />
    <h2>Education</h2>
    {#each data.resume.Education as {Degree, School, Location, Year, Description}}
      <h3>{Degree}, {School}, {Location}</h3>
      <p><strong>{Year}</strong></p>
      {@html Description}
    {/each}
    <hr />
    <h2>Skills</h2>
    <ul>
      {#each data.resume.Skills as {Category, Skills}}
        <li><strong>{Category}:</strong> {Skills}</li>
      {/each}
    </ul>
    <hr />
    <h2>Recognition</h2>
    <ul>
      {#each data.resume.Recognition as {Award, Date}}
        <li><strong>{Award},</strong> {Date}</li>
      {/each}
    </ul>
  </div>

  <style>
    h2, h3 {
      margin-bottom: 0;
    }

    p {
      margin-top: 0;
    }

    hr {
      margin-top: 2rem;
      border: none;
      height: 1px;
      background-color: black;
    }

    .indent {
      padding-left: 20px;
      border-left: 1px dashed black;
    }
  </style>