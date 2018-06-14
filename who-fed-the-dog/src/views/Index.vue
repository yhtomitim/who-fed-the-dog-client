<template>
  <main>
    <p>This app is designed to help you keep track of when the dog was fed. It will also help you keep track of the number of times someone has fed the dog cummulatively.</p>
    <p>If you don't have a username, click the Users page, and create a user. Come back to the home page, and then select your name!</p>
    <p>If you haven't entered your pet yet, click the Pets page, and create a pet. Come back to the home page, and select your pet!</p>
    <form action="">
      <label for="user">Username: </label>
      <v-select
        :items="username"
        label="Select One..."
        v-model="selectedUser"
        single-line></v-select>
    </form>
    <form action="">
       <label for="pet">Pet Name: </label>
      <v-select
        :items="petName"
        label="Select One..."
        v-model="selectedPet"
        single-line></v-select>
    </form>
    <v-btn @click="postFed">Mark {{selectedPet || 'Pet'}} As Fed By {{selectedUser || `...`}}</v-btn>
    <p v-if="true">{{ message }}</p>
  </main>
</template>

<script>
import ListData from '@/components/ListData'

export default {
  data() {
    return {
      users: null,
      pets: null,
      username: [],
      petName: [],
      selectedPet: null,
      selectedUser: null,
      message: ''
    }
  },
  mounted: function() {
    this.getUsers();
    this.getPets();
  },
  methods: {
    getUsers() {
      const apiUrl = `http://localhost:8080/api/v1/routes/users`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.users = null;
          this.users = Response.users;
          this.users.forEach(user => this.username.push(user.username));
        })
    },
    getPets() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/pets';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.pets = null;
          this.pets = Response.pets;
          this.pets.forEach(pet => this.petName.push(pet.petName));
        })
    },
    //this will need to get the name typed in and the pet name to post to the db table fed
    postFed() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/feed';
      const data = {
        user_id: this.matchUserId,
        pet_id: this.matchPetId,
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
        });
    }
  },
  components: {
    ListData
  },
    computed: {
    matchUserId() {
      return this.users.filter(user => user.username === this.selectedUser)[0].id;
    },
    matchPetId() {
      return this.pets.filter(pet => pet.petName === this.selectedPet)[0].id
    }
  }
}
</script>

<style>

</style>