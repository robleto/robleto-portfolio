<template>
  <div id="app">

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
