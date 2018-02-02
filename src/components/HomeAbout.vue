<template>
  <section class="HomeAbout">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="8">
          <h1 class="mb-4 text-center">Montpellier Tech Hub</h1>
          <p>
            Association loi 1901 qui <strong>accompagne les meetups tech de Montpellier</strong>.
            Une gouvernance <strong>collégiale et transparente</strong> assure la gestion des
            fonds constitués d’une part des cotisations des membres et d’autre part des sponsors.
          </p>
          <p>
            Montpellier Tech Hub anime au final <strong>une communauté de 500 personnes</strong>.
          </p>
          <ul class="HomeAbout_social">
            <li>
              <a href="https://twitter.com/MtpTechHub" target="_blank">
                <i class="fa fa-twitter fa-3x"></i>
              </a>
            </li>
            <li>
              <a href="https://bit.ly/comm-mtp" target="_blank">
                <i class="fa fa-slack fa-3x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC1ZadBAsgOgD0eo2R3JTgNA" target="_blank">
                <i class="fa fa-youtube fa-3x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/MontpellierTechHub" target="_blank">
                <i class="fa fa-github fa-3x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/11447137/" target="_blank">
                <i class="fa fa-linkedin fa-3x"></i>
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HomeAbout'
}
</script>

<style scoped>
  .HomeAbout {
    font-family: 'Roboto', sans-serif;
    padding: 80px 0;
  }
  .HomeAbout_social {
    margin-top: 2.5rem;
    list-style: none;
    text-align: center;
  }
  .HomeAbout_social li {
    display: inline-block;
    margin: 0 1rem;
  }
  .HomeAbout_social a {
    color: #212529;
  }
</style>
