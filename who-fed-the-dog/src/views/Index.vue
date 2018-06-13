<template>
  <v-app>
    <p>this is the index.vue file in the router-view tag in app.vue</p>
    <v-btn @click="getUsers">List {{ labels[0] }}</v-btn>
    <v-btn @click="getPets">List {{ labels[1] }}</v-btn>
    <v-btn @click="getFedLog">List {{ labels[2] }} Log </v-btn>
    <v-btn @click="postFed">Bailey</v-btn>
    <v-btn>Tim</v-btn>
    <form action="">
      <label for="newUser">Add new user: </label>
      <input
        type="text"
        v-model="userToAdd">
      <button
        @click.prevent="postNewUser"
        type="submit">Add User</button>
    </form>
     <form action="">
      <label for="newPet">Add new pet: </label>
      <input
        type="text"
        v-model="petToAdd">
      <button
        @click.prevent="postNewPet"
        type="submit">Add Pet</button>
    </form>
    <list-data :data="toPage"/>
  </v-app>
</template>

<script>
import ListData from '@/components/ListData'

export default {
  data() {
    return {
      toPage: [],
      labels: ['users', 'pets', 'fed'],
      userToAdd: '',
      petToAdd: ''
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
    },
    postFed() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/feed';
      const data = {
        user_id: 1,
        pet_id: 2,
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'POST',
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response)
          });
    },
    postNewUser() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/newuser';
      const data = {
        username: this.userToAdd
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'POST',
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response)
          });
    },
    postNewPet() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/newpet';
      const data = {
        petName: this.petToAdd
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'POST',
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response)
          });
    }
  },
  components: {
    ListData
  }
}
</script>

<style>

</style>
