<template>

  <section class="">
    <b-container>
      <h1 class="text-center">Become a sponsor</h1>

      <p class="fs-5 text-muted text-center mb-5">Start helping Montpellier Tech Hub Association to help ours meetups florish, keep on and be recognized.</p>

      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Base</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">800€<small class="text-muted fw-light">/year</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Logo on the website</li>
                  <li>Logo before every events</li>
                  <li>Keep events alive</li>
                </ul>
                <a role="button" class="w-100 btn btn-lg btn-outline-primary" href="mailto:contact@montpellier-techhub.org">Contact us</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-white bg-primary border-primary">
                <h4 class="my-0 fw-normal">Captation</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">1200€<small class="text-muted fw-light">/year</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li><b>✨Logo on the replay</b> (<a href="https://www.youtube.com/channel/UC1ZadBAsgOgD0eo2R3JTgNA" target="_blank">YouTube</a>)*</li>
                  <li>Logo on the website</li>
                  <li>Logo before every events</li>
                </ul>
                <a role="button" class="w-100 btn btn-lg btn-primary" href="mailto:contact@montpellier-techhub.org">Contact us</a>
              </div>
            </div>
          </div>
        </div>

        <p class="text-secondary">* Most meetups are recorded live, some meetups due to the formats (workshop) or missing man power cannot be recorded. </p>
      </main>

    </b-container>
  </section>

</template>

<script>
export default {
  name: 'SponsorsPricing',
}
</script>

<style scoped>
h1 {
  margin: 2rem;
  margin-top: 4rem;
}

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}


</style>

