
<template>
  <div>
    <md-field md-layout="box">
    <md-input  @input="searchInput" v-model="withLabel" placeholder="Search..." ></md-input>
    </md-field>
    <div>{{hero}}</div>
  </div>
</template>

<style scoped>
 .md-drawer {
	width: 230px;
	max-width: calc(100vw - 125px);
}
 
</style>

<script>
// Axios is a wrapper around the Fetch API.
import axios from "axios";
import {debounce} from 'lodash'
export default {
    name: 'Search',
    data(){
        // Hero is the state of this current component ie. the result from the API request.
        return{
            hero: {}
        }
    },
    methods: {
    // Makes a fetch request based on user input with a debounce to prevent mutiple fires of the fetch request.
    searchInput: debounce(function(e) {
         try {
            axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3565074916915943/search/${e}`).then(response => {this.hero = response.data.results[0]})
           }
        catch {
            console.error(e)
        }
    }, 1000)
    }
}
</script>