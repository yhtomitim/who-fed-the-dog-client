<template>
  <v-app>
    <p>this is the index.vue file in the router-view tag in app.vue I need to destructure this after I get elements wired up correctly.</p>
    <v-btn @click="getUsers">List all {{ labels[0] }}</v-btn>
    <v-btn @click="getPets">List all {{ labels[1] }}</v-btn>
    <v-btn @click="getFedLog">List {{ labels[2] }} Log </v-btn>
    <v-btn @click="postFed">Mark Pet As Fed</v-btn>
    <form action="">
      <label for="newUser">Username: </label>
      <v-text-field
        type="text"
        v-model="user"></v-text-field>
      <v-select :labels="labels">Users</v-select>
      <v-btn
        @click.prevent="postNewUser"
        type="submit">Add User</v-btn>
      <v-btn
        @click.prevent="deleteUser"
        type="submit">Remove User</v-btn>
      <v-btn
        @click.prevent="findUser"
        type="submit">Find User</v-btn>
      <v-btn>Edit {{ user }}</v-btn>
    </form>
     <form action="">
      <label for="newPet">Pet Name: </label>
      <v-text-field
        type="text"
        v-model="pet"></v-text-field>
      <v-btn
        @click.prevent="postNewPet"
        type="submit">Add Pet</v-btn>
      <v-btn
        @click.prevent="deletePet"
        type="submit">Remove Pet</v-btn>
      <v-btn
        @click.prevent="findPet"
        type="submit">Find Pet</v-btn>
      <v-btn>Edit {{ pet }}</v-btn>
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
      user: '',
      pet: ''
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
    findUser() {
      const apiUrl = `http://localhost:8080/api/v1/routes/${this.labels[0]}/${this.user}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response);
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
    findPet() {
      const apiUrl = `http://localhost:8080/api/v1/routes/pets/${this.pet}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response);
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
    //this will need to get the name typed in and the pet name to post to the db table fed
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
        username: this.user
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
        petName: this.pet
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
    deletePet() {
      const apiUrl = `http://localhost:8080/api/v1/routes/removepet/${this.pet}`;
      const data = {
        petName: this.pet
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'DELETE',
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response)
          });
    },
    deleteUser() {
      const apiUrl = `http://localhost:8080/api/v1/routes/removeuser/${this.user}`;
      const data = {
        username: this.user
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'DELETE',
      })
        .then(Response => Response.json())
        .then(Response => {
          console.log(Response)
          });
    },

  },
  components: {
    ListData
  }
}
</script>

<style>

</style>
