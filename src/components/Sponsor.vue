<template>
  <li class="sponsor">{{ sponsor.name }}</li>
</template>

<script>
export default {
  name: 'Sponsor',
  props: { sponsor: [Object] }
}
</script>

<style scoped>

</style>
