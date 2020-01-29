<template>
  <section class="SlideLinks" data-background-color="#333" data-background-image="/static/images/background-slideshow.jpg">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="5">
          <img class="Header__logo" :src="logo" alt="Montpellier Tech Hub"/>
        </b-col>
        <b-col cols="12" md="7" class="subtitle">
          Association qui accompagne les meetups tech de Montpellier
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="12">
          <ul class="social">
            <li>
              <a href="https://twitter.com/MtpTechHub" target="_blank">
                <i class="fa fa-twitter fa-3x"></i>
                @MtpTechHub
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC1ZadBAsgOgD0eo2R3JTgNA" target="_blank">
                <i class="fa fa-globe fa-3x"></i>
                montpellier-techhub.org
              </a>
            </li>
            <li>
              <a href="https://bit.ly/comm-mtp" target="_blank">
                <i class="fa fa-slack fa-3x"></i>
                https://bit.ly/comm-mtp
              </a>
            </li>
            <li>
              <a href="https://github.com/MontpellierTechHub" target="_blank">
                <i class="fa fa-envelope-open fa-3x"></i>
                contact@montpellier-techhub.org
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import logoDark from '../../assets/logo-light.svg'

export default {
  name: 'SlideLinks',
  data () {
    return {
      logo: logoDark
    }
  }
}
</script>

<style scoped>
  .SlideLinks {
    height: 80vh;
  }

  .subtitle {
    font-size: 2rem;
    text-align: left;
    margin-top: 65px;
  }

  .social {
    margin-top: 4rem;
    margin-left: -20px;
    list-style: none;
    text-align: left;
  }
  .social li {
    margin: 1rem 1rem;
  }
  .social a {
    color: white;
    font-size: 1.75rem;
    line-height: 50px;
  }
  .social i {
    top: 5px;
    position: relative;
    background: #eee;
    color: black;
    border-radius: 100px;
    padding: 15px;
    font-size: 40px;
    line-height: 37px;
    text-align: center;
    height: 65px;
    width: 65px;
    display: inline-block;
    margin-right: 10px;
  }
  .social .fa-envelope-open {
    font-size: 35px;
  }
</style>
