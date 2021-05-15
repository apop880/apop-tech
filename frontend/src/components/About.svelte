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
  <p>My name is Alex Popoutsis, and I've been enthusiastic about technology for about as long as I've been alive, starting with mastering DOS on my family's computer before I was in first grade. Over the years, I've worked on a variety of projects, from building my own DVR using open source software to designing a number of websites.</p>
  <p>These days, my day job is with Cerner Corporation in Kansas City, where I get to play a role in helping to improve individuals' health and the health of communities by applying technology in meaningful ways. I also continue to pursue other projects in my spare time, especially home automation and full-stack web development, and am available for freelance work.</p>
  <p>Over the past couple years, I've also become especially passionate about the smart home, and the open source Home Assistant software. I intend to use this site and blog to help provide education, tips, and tricks about the smart home, and to help make its power accessible to more and more people.</p>
  <div class="social"><p>Follow Me On:</p>
  <p>
    <a class="button" href="https://twitter.com/apopoutsis" target="_blank"><IconifyIcon icon={twitterLogoDuotone} height={20} />Twitter</a>
    <a class="button" href="https://linkedin.com/in/apopoutsis" target="_blank"><IconifyIcon icon={linkedinLogoDuotone} height={20} />LinkedIn</a>
    <a class="button" href="https://github.com/apopoutsis" target="_blank"><IconifyIcon icon={githubLogoDuotone} height={20} />GitHub</a>
  </p>
  <p>Finding this site useful?</p>
  <p>
    <a class="button" href="https://buymeacoffee.com/uMhxJCzPS" target="_blank"><IconifyIcon icon={coffeeDuotone} height={20} />Buy Me a Coffee</a>
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