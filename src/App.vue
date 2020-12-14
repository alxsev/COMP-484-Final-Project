<!--HTML that will be presented to the user once they visit the homepage.-->
<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Superhero Search</span>
      </md-app-toolbar>
      <md-app-content>
        <Search />
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
 body{
   margin: 0px;
 }
</style>

<!--Javascript that imports needed components and exports this component-->
<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search,
  }
}
</script>
