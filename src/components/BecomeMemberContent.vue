<template>
  <section class="HomeAbout">
    <b-container>
      <h1 class="text-center">Devenir membre</h1>

      <article>
        <h4>Tu organises régulièrement des meetups sur Montpellier ? Rejoins-nous !</h4>
        <p>
          Inscrire ton meetup à Montpellier Tech Hub c'est faire partie d'une communauté bienveillante qui pourra t'apporter un soutien dans tes projets. Plus en détails ce que Montpellier Tech Hub peut apporter:
        </p>
        <ul class="list-unstyled">
          <b-media tag="li" class="my-4">
            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
            <h5 class="mt-0 mb-1">Réseau de salles et de speaker</h5>
            Un répertoire de salle et éventuellement de speaker/talks serons à ta disposition pour t'aider à organiser tes évènements.
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" />
            <h5 class="mt-0 mb-1">Compte bancaire virtuel</h5>
            Grâce à la comptabilité analytique, tu auras un espace dans notre compte bancaire pour permettre à des sponsors et à des personnes assistant à tes meetups de te soutenir financièrement. 
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder" />
            <h5 class="mt-0 mb-1">Assurance pour les évènements</h5>
            L'assurance de Montpellier Tech Hub couvrira tes évènements si au moins un membre de Montpellier Tech Hub y participe.
          </b-media>

          <b-media tag="li" class="my-4">
            <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" />
            <h5 class="mt-0 mb-1">Soutien financier</h5>
            En fonction des besoins, Montpellier Tech Hub peut t'accorder une subvention exeptionnelle chaque année afin de financer les projets de ton meetup.
          </b-media>
          <b-media tag="li" class="my-4">
            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
            <h5 class="mt-0 mb-1">Aide dans l'organisation</h5>
            Des questions sur comment organiser mes meetups ? Nous sommes là pour t'aider dans ces démarches ! :)
          </b-media>
        </ul>
      </article>

      <article>
        <h4>Ton meetup ou le meetup à laquel tu assistes fait déjà parti de Montpellier Tech Hub ?</h4>
        <p>Tu peux également devenir membre et donner ta cotisation à ce meetup. Tu contribueras ainsi directement à ses dépenses et son évolution :)</p>
      </article>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HomeAbout'
}
</script>

<style scoped>
  h1 {
    margin: 2rem;
  }
  article {
    margin-top: 5rem;
    margin-bottom: 6rem;
  }
</style>
