<script>
  import IconifyIcon from '@iconify/svelte';
  import twitterLogoDuotone from '@iconify-icons/ph/twitter-logo-duotone';
  import linkedinLogoDuotone from '@iconify-icons/ph/linkedin-logo-duotone';
  import githubLogoDuotone from '@iconify-icons/ph/github-logo-duotone';
  import coffeeDuotone from '@iconify-icons/ph/coffee-duotone';

  export let helpers;
</script>

<div class="about">
  <div class="clearfix">
    <div class="picture">
      {@html helpers.shortcode({name: 'picture', props: {src: '/images/alex2.jpg', alt:'Alex Popoutsis'}})}
    </div>
  <h1>About Me</h1>
  <p>My name is Alex Popoutsis, and I've been enthusiastic about technology for about as long as I've been alive, starting with mastering DOS on my family's computer before I was in first grade. Over the years, I've worked on a variety of projects, everything from building my own DVR using open source software, to developing websites, to helping maintain large-scale production systems.</p>
  <p>These days, my day job is with Trinity Life Sciences, where I develop data-driven solutions to help companies bring medical treatments to market more efficiently. In addition, I also regularly work on other projects in web development and home automation, and I am currently available for additional freelance work.</p>
  <p>Over the past couple years, I've become especially passionate about the smart home, and the open source Home Assistant software. I intend to use a portion of this site and blog to help provide education, tips, and tricks about the smart home, and to help make its power accessible to more and more people. You'll also find content here about other technical topics across the spectrum of things I regularly work on.</p>
  <div class="social"><p>Follow Me On:</p>
  <p class="multiple">
    <a class="button" href="https://twitter.com/apopoutsis" target="_blank" rel="noopener"><IconifyIcon icon={twitterLogoDuotone} height={20} class="iconify" />Twitter</a>
    <a class="button" href="https://linkedin.com/in/apopoutsis" target="_blank" rel="noopener"><IconifyIcon icon={linkedinLogoDuotone} height={20} class="iconify" />LinkedIn</a>
    <a class="button" href="https://github.com/apop880" target="_blank" rel="noopener"><IconifyIcon icon={githubLogoDuotone} height={20} class="iconify" />GitHub</a>
  </p>
  <p>Finding this site useful?</p>
  <p>
    <a class="button" href="https://buymeacoffee.com/uMhxJCzPS" target="_blank" rel="noopener"><IconifyIcon icon={coffeeDuotone} height={20} class="iconify" />Buy Me a Coffee</a>
  </div>
</div>
</div>

<style>
  h1 {
    margin: 0px;
  }

  .about {
    margin: 0 -100%;
    margin: 0 calc(50% - 50vw);
    margin-top: 50px;
    background-color: rgb(34, 34, 34);
    color: #fff;
  }

  .picture {
    text-align: center;
    width: 180px;
    margin: 10px auto;
  }

  .social {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .social p {
    margin-bottom: 0;
  }

  .multiple {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    margin: 4px;
    font-size: 1rem;
    color: #000000;
    background-color: rgb(199, 199, 199);
    padding: 8px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  .button:hover {
    background: rgba(0,157,199,1);
  }

  .clearfix {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }


  @media(min-width: 768px) {
    .picture {
    display: block;
    float: right;
    width: 250px;
    margin: 10px 0 10px 10px;
  }
  }
</style>