<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img
          @click="clickThis"
          src="@/assets/logo.png"
          alt="Vuetify.js"
          class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
              <em>{{ user }}</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  methods: {
    clickThis() {
      const apiUrl = 'http://localhost:8080/api/v1/routes'
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => this.user = Response);
      
    }
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
