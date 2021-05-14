<script>
  let year = new Date().getFullYear();
</script>
<style>
  .footer {
    overflow: hidden;
    background: rgb(13, 22, 84);
    background: -moz-linear-gradient(162deg, rgba(13, 22, 84, 1) 0%, rgba(0, 157, 199, 1) 79%);
    background: -webkit-linear-gradient(162deg, rgba(13, 22, 84, 1) 0%, rgba(0, 157, 199, 1) 79%);
    background: linear-gradient(162deg, rgba(13, 22, 84, 1) 0%, rgba(0, 157, 199, 1) 79%);
    color: white;
  }

  .footer div {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 15px 0;
  }
</style>

<div class="footer">
  <div>&copy; 2008-{year} Alex Popoutsis</div>
</div>
