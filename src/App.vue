<!--HTML that will be presented to the user once they visit the homepage.-->
<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Find that Superhero</span>
      </md-app-toolbar>
      <md-app-content>
        <Search />
      </md-app-content>
    </md-app>
  </div>
</template>

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

<style>
 body {
   margin: 0px;
 }
</style>
