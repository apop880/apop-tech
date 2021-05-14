<script>
    import Hero from '../../components/Hero.svelte';

    export let data, helpers;
</script>
  
  <svelte:head>
    <title>Contact | Alex Popoutsis</title>
  </svelte:head>
  
  <Hero title="Contact Me" />
  
  <div class="container shifted">
    <p>Get in touch below with any questions or comments you may have. You can also reach me via:<br />
    Email: <a href="mailto:contact@apop.tech">contact@apop.tech</a><br />
    Twitter: <a href="https://www.twitter.com/apopoutsis" target="_blank">@apopoutsis</a>
    </p>
    <form name="contact" method="POST" action="/success" data-netlify="true">
        <label for="name">Your Name:</label> <input type="text" name="name" />
        <label for="email">Your Email:</label> <input type="email" name="email" />
        <label for="message">Additional Comments:</label> <textarea name="message"></textarea>
        <p><button type="submit">Send</button></p>
    </form>
  </div>

  <style>
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
      background: rgb(13,22,84);
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