<script>
    import Hero from '../../components/Hero.svelte';

    export let data, helpers;
</script>
  
  <svelte:head>
    <title>Services | Alex Popoutsis</title>
  </svelte:head>
  
  <Hero title="Services" />
  
  <div class="container shifted">
    {@html helpers.markdownParser.processSync(data.services.Intro)}

    {#each data.services.Service as {Name, Description}}
      <h2>{Name}</h2>
      {@html helpers.markdownParser.processSync(Description)}
    {/each}

    <h2><a name="contact">Contact Me</a></h2>
    <p>Get in touch below about any of the services I offer, and I'll get back to you within 2-3 business days.</p>
    <form name="services" method="POST" action="/success" data-netlify="true">
        <label for="name">Your Name:</label> <input type="text" name="name" />
        <label for="email">Your Email:</label> <input type="email" name="email" />
        <label for="service">I'm Interested In:</label> <select name="service">
          <option value="smarthome">Home/Business Automation</option>
          <option value="web">Web Design and Development</option>
          <option value="it">Other Computer Services</option>
        </select>
        <label for="message">Additional Comments:</label> <textarea name="message"></textarea>
        <p><button type="submit">Send</button></p>
    </form>
  </div>

  <style>
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

    form {
      display: grid;
      gap: 10px;
      font-size: 18px;
      margin: 30px;
    }

    @media (min-width: 768px) {
      form {
        grid-template-columns: 30% 1fr;
      }
    }

    textarea {
      height: 50px;
    }

    button {
      background: rgb(34,34,34);
      border-radius: 10px;
      border: none;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-size:17px;
      padding:16px 31px;
      text-decoration:none;
      text-shadow:0px 1px 0px #2f6627;
    }
    button:hover {
      background: rgba(0,157,199,1);
    }
    button:active {
      position:relative;
      top:1px;
    }
  </style>