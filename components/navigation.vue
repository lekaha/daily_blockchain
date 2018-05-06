<template>
  <nav role="navigation" class="top-nav">
    <ul class="menu">
      <li v-if="!/\/.*?\/.*/.test(route.path) && route.name !== 'index'" v-for="route in this.$router.options.routes">
        <!-- route.name.charAt(0).toUpperCase() + route.name.slice(1) -->
        <nuxt-link :to="$i18n.path(route.name)">{{ $t('links.' + route.name) }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    // console.log(this.$router.options.routes[0].name)
    // console.log(this.$i18n.path(this.$router.options.routes[0].name))
    return {
      // name: this.$router.options.routes[0].name
    }
  }
}
</script>

<style>

  .person-name:link,
  .person-name:visited {
    width: 50%;
    display: inline-block;
    font-size: 2em;
    text-decoration: none;
    color: #373F49;
  }

  .top-nav {
    width: 50%;
    display: inline-block;
    text-align: right;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 1em;
  }

  .menu a:link,
  .menu a:visited {
    color: #373F49;
    text-decoration: none;
  }

</style>
