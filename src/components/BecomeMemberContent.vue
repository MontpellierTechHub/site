<template>
  <section class="HomeAbout">
    <b-container>
      <h1 class="text-center">Devenir membre</h1>

      <article>
        <h4>Tu organises régulièrement des meetups sur Montpellier ? Rejoins-nous !</h4>
        <p>
          Inscrire ton meetup à Montpellier Tech Hub c'est faire partie d'une communauté bienveillante qui pourra t'apporter un soutien dans tes projets. Plus en détails ce que Montpellier Tech Hub peut apporter:
        </p>

        <b-row>
          <b-col :sm="sm" :md="md" :lg="lg">
            <b-media tag="li" class="my-4 media">
              <b-img slot="aside" :src="speaker" width="64" alt="placeholder" />
              <h5 class="mt-0 mb-1">Réseau de salles et de speaker</h5>
              Un répertoire de salle et éventuellement de speaker/talks seront à ta disposition pour t'aider à organiser tes évènements.
            </b-media>
          </b-col>
          <b-col :sm="sm" :md="md" :lg="lg">
            <b-media tag="li" class="my-4 media">
              <b-img slot="aside" :src="bank" width="64" alt="placeholder" />
              <h5 class="mt-0 mb-1">Compte bancaire virtuel</h5>
              Grâce à la comptabilité analytique, tu auras un espace dans notre compte bancaire pour permettre à des sponsors et à des personnes assistants à tes meetups de te soutenir financièrement.
            </b-media>
          </b-col>
          <b-col :sm="sm" :md="md" :lg="lg">
            <b-media tag="li" class="my-4 media">
              <b-img slot="aside" :src="assurance" width="64" alt="placeholder" />
              <h5 class="mt-0 mb-1">Assurance pour les évènements</h5>
              L'assurance de Montpellier Tech Hub couvrira tes évènements si au moins un membre de Montpellier Tech Hub y participe.
            </b-media>
          </b-col>
          <b-col :sm="sm" :md="md" :lg="lg">
            <b-media tag="li" class="my-4 media">
              <b-img slot="aside" :src="money" width="64" alt="placeholder" />
              <h5 class="mt-0 mb-1">Soutien financier</h5>
              En fonction des besoins, Montpellier Tech Hub peut t'accorder une subvention exeptionnelle chaque année afin de financer les projets de ton meetup.
            </b-media>
          </b-col>
          <b-col :sm="sm" :md="md" :lg="lg">
            <b-media tag="li" class="my-4 media">
              <b-img slot="aside" width="64" alt="placeholder" :src="help" />
              <h5 class="mt-0 mb-1">Aide dans l'organisation</h5>
              Des questions sur comment organiser mes meetups ? Nous sommes là pour t'aider dans ces démarches ! :)
            </b-media>
          </b-col>
        </b-row>

        <b-button size="lg" variant="outline-secondary" target="_blank" href="https://goo.gl/forms/aueKB8rJxu4kO1Qp2">Remplis ce formulaire pour inscrire ton meetup à Montpellier Tech Hub</b-button>
      </article>

      <article>
        <h4>Ton meetup ou le meetup auquel tu assistes fait déjà parti de Montpellier Tech Hub ?</h4>
        <p>Tu peux également devenir membre et donner ta cotisation à ce meetup. Tu contribueras ainsi directement à ses dépenses et son évolution.</p>

        <b-button variant="outline-secondary" target="_blank" href="https://goo.gl/forms/U5rWGSGWJOpumrGr1">Deviens membre</b-button>
      </article>
    </b-container>
  </section>
</template>

<script>
import assurance from '../assets/assurance.svg'
import bank from '../assets/bank.svg'
import money from '../assets/money.svg'
import speaker from '../assets/speaker.svg'
import help from '../assets/help.svg'

export default {
  name: 'BecomMemberContent',
  data () {
    return {
      assurance: assurance,
      bank: bank,
      money: money,
      speaker: speaker,
      help: help,
      sm: 6,
      md: 4,
      lg: 4
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 2rem;
    margin-top: 4rem;
  }
  article {
    margin-top: 5rem;
    margin-bottom: 6rem;
  }
  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  article {
    text-align: center;
  }
  .btn {
    margin: 4rem;
    white-space: normal;
  }
</style>
