// Get Vue library.
import Vue from 'vue'
// Get our App. Contains everything inside our app.
import App from './App.vue'

Vue.config.productionTip = false

// Get vue-material framework and CSS files.
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

// Renders application and puts it in the div with id "app".
new Vue({
  render: h => h(App),
}).$mount('#app')
