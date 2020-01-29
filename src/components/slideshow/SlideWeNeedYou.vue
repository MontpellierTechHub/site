<template>
  <section class="section" data-background-image="/static/images/background-slideshow-header.jpg">
    <h3 class="title">ON A BESOIN DE VOUS !</h3>

    <b-row>
      <b-col  md="8">
        <ul class="list">
          <li>
            <p>
              <i class="fa fa-user fa-3x"></i>
              Soumettez un talk <img width="40" src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763" alt=""/><br/>
              <span>(on peut vous coacher si besoin)</span>
            </p>
          </li>
          <li>
            <p>
              <i class="fa fa-hand-paper fa-3x"></i>
              Aidez les organisateurs des meetups
            </p>
          </li>
        </ul>
      </b-col>
      <b-col>
        <img :src="cfp" alt="QRCODE CFP Montpellier Tech Hub"/>
        <a href="http://bit.ly/cfp-mth">bit.ly/cfp-mth</a>
      </b-col>
    </b-row>
  </section>
</template>

<script>
  import cfp from '../../assets/cfp.png'

  export default {
    name: 'SlideWeNeedYou',
    data () {
      return {
        cfp
      }
    }
  }
</script>

<style scoped>
  .section {
    padding: 0 !important;
    height: 90vh;
  }

  .title {
    color: white;
    margin-top: 2rem;
    margin-bottom: 7rem;
  }

  .section a {
    color: black;
    font-weight: 200;
    font-size: 2rem;
    position: relative;
    top: -40px;
  }

  .list {
    list-style: none;
  }

  .list span{
    font-size: 2rem;
    font-weight: 200;
  }

  .list li {
    margin-bottom: 60px;
  }

  .list li i {
    background: #111;
    border-radius: 40px;
    color: white;
    margin-right: 20px;
    width: 70px;
    height: 70px;
    font-size: 3rem;
    position: relative;
    top: 5px;
    line-height: 50px;
    padding: 10px;
  }

  .list .fa-user {
    padding-left: 18px;
  }

  .list img{
    margin: 0;
    position: relative;
    top: 5px;
  }
</style>
