<template>
  <div id="app">

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

    <navigation/>
    <home/>
    <about/>
    <work/>
    <services/>
    <contact/>
    <foot/>
  </div>
</template>

<script>
import navigation from '~/components/navigation.vue'
import home from '~/components/home.vue'
import about from '~/components/about.vue'
import work from '~/components/work.vue'
import services from '~/components/services.vue'
import contact from '~/components/contact.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    navigation,
    home,
    about,
    work,
    services,
    contact,
    foot
  }
}
</script>


<style  lang="scss">
  @import "assets/scss/style.scss";
</style>
