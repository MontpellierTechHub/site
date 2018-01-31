<template>
  <section class="HomeYoutube">
    <b-container>
      <h2 class="mb-5 text-center">
        <i class="fa fa-youtube" aria-hidden="true"></i>
        Nos dernières vidéos
      </h2>
      <div class="HomeYoutube__player">
        <iframe src="https://www.youtube.com/embed/+lastest?list=PLmPKd8IshlDRcbve6iLkxeYAlDJ2xIDC1" frameborder="0" allowfullscreen></iframe>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HomeYoutube'
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .HomeYoutube {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
  }
  .HomeYoutube__player {
    position: relative;
    width: 600px;
    height: 339px;
  }
  .HomeYoutube__player > iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
</style>
