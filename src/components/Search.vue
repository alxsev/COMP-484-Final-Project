
<template>
  <div>
    <md-field md-layout="box">
    <md-input  @input="searchInput" v-model="withLabel" placeholder="Enter in a Superhero name..." ></md-input>
    </md-field>
    <div>
        <div v-if="hero">
            <Hero v-for="one in hero" :key="one.name" :image="one.image.url" :name="one.name" :realname="one.biography['full-name']" :gender="one.appearance.gender" :firstappear="one.biography['first-appearance']" :publisher="one.biography.publisher"/>
        </div>
    </div>
  </div>
</template>

<style scoped>
 .md-drawer {
	width: 230px;
	max-width: calc(100vw - 125px);
} 
</style>

<script>
// Axios is a wrapper around the Fetch API. Fetch returns a string, string needs to be JSON. Axios does that for you.
import axios from "axios";
import {debounce} from 'lodash';
import Hero from "./Hero.vue";
export default {
    name: 'Search',
    components: {Hero},
    data(){
        // Hero is the state of this current component ie. the result from the API request.
        return{
            hero: null
        }
    },
    methods: {
    // Makes a fetch request based on user input with a debounce to prevent mutiple fires of the fetch request.
    searchInput: debounce(function(e) {
         try {
            axios.get(`https://superheroapi.com/api/10214011362517965/search/${e}`).then(response => {this.hero = response.data.results})
           }
        catch {
            console.error(e)
        }
    }, 1000)
    }
}
</script>