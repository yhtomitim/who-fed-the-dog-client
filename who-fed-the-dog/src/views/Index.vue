<template>
  <v-app>
    <p>This app is designed to help you keep track of when the dog was fed. It will also help you keep track of the number of times someone has fed the dog cummulatively.</p>
    <p>If you don't have a username, click the Users page, and create a user. Come back to the home page, and then select your name!</p>
    <p>If you haven't entered your pet yet, click the Pets page, and create a pet. Come back to the home page, and select your pet!</p>
    <form action="">
      <label for="user">Username: </label>
      <v-select
        :items="username"
        label="Select"
        v-model="selectedUser"
        single-line></v-select>
    </form>
    <form action="">
       <label for="pet">Pet Name: </label>
      <v-select
        :items="petName"
        label="Select"
        v-model="selectedPet"
        single-line></v-select>
    </form>
    <v-btn @click="postFed">Mark {{selectedPet || 'Pet'}} As Fed</v-btn>
    <!-- <list-data :data="toPage"/> -->
  </v-app>
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
      selectedUser: null
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
      const filteredUsers = this.users.filter(user => user.username === this.selectedUser);
      const filteredPets = this.pets.filter(pet => pet.petName === this.selectedPet);
      const userId = filteredUsers[0].id;
      const petId = filteredPets[0].id;
      const data = {
        user_id: userId,
        pet_id: petId,
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