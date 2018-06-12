<template>
  <v-app>
    <p>this is the index.vue file in the router-view tag in app.vue</p>
    <v-btn @click="getUsers">List {{ labels[0] }}</v-btn>
    <v-btn @click="getPets">List {{ labels[1] }}</v-btn>
    <v-btn @click="getFedLog">List {{ labels[2] }} Log </v-btn>
    <list-data :data="toPage"/>
  </v-app>
</template>

<script>
import ListData from '@/components/ListData'

export default {
  data() {
    return {
      toPage: [],
      labels: ['users', 'pets', 'fed']
    }
  },
  methods: {
    getUsers() {
      const apiUrl = `http://localhost:8080/api/v1/routes/${this.labels[0]}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.users);
        })
    },
    getPets() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/pets';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.pets);
        })
    },
    getFedLog() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/fedon';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.fed);
        })
    }
  },
  components: {
    ListData
  }
}
</script>

<style>

</style>
