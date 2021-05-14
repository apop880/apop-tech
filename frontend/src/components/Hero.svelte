<script>
  export let title;
  export let subtitle = "";
  export let small = false;
</script>


<div class="hero">
<div class="text" class:small>
<h1>{title}</h1><h2>{subtitle}</h2>
</div>
<div class="custom-shape-divider-bottom">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
  </svg>
</div>
</div>

<style>
  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
  }

  .small h1 {
    font-size: 2rem;
    margin-top: 45px;
  }

  .small h2 {
    font-size: 1.5rem;
  }

  .hero {
    overflow: hidden;
    background: rgb(13,22,84);
    background: -moz-linear-gradient(162deg, rgba(13,22,84,1) 0%, rgba(0,157,199,1) 79%);
    background: -webkit-linear-gradient(162deg, rgba(13,22,84,1) 0%, rgba(0,157,199,1) 79%);
    background: linear-gradient(162deg, rgba(13,22,84,1) 0%, rgba(0,157,199,1) 79%);
    color: white;
    max-width: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .text {
    display: grid;
    margin: 20px;
  }

  @media(min-width: 768px) {
    .text {
      margin: 50px auto;
      max-width: 1000px;
      padding: 0 10px;
    }
  }

  .custom-shape-divider-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 52px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom .shape-fill {
    fill: #e6ecf1;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom svg {
        width: calc(100% + 1.3px);
        height: 40px;
    }
}
</style>