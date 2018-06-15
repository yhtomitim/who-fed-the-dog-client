<template>
  <section>
    <h3>Users</h3>
    <v-btn @click="getUsers">List all Users</v-btn>
    <form action="">
      <label for="newUser">Enter Username Below: </label>
      <v-text-field
        type="text"
        v-model="user"></v-text-field>
      <v-btn
        @click.prevent="postNewUser"
        type="submit">Add User</v-btn>
      <v-btn
        @click.prevent="deleteUser"
        type="submit">Remove User</v-btn>
      <v-btn
        @click.prevent="findUser"
        type="submit">Find User</v-btn>
    </form>
    <p v-if="true">{{ message }}</p>
    <details>
      <summary>Expand for requested info...</summary>
      <list-data :data="toPage"/>
      <label for="editUser">Change Username: </label>
      <v-text-field
        type="text"
        v-model="changedUsername"></v-text-field>
      <v-btn @click.prevent="updateUser">Edit {{ user }}</v-btn>
    </details>
  </section>
</template>

// <script>
import ListData from '@/components/ListData'

export default {
  data () {
    return {
      toPage: [],
      user: '',
      message: '',
      changedUsername: ''
    }
  },
  methods: {
    getUsers() {
      const apiUrl = `https://who-fed-the-dog.herokuapp.com/api/v1/routes/users`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.users);
        })
    },
    findUser() {
      const apiUrl = `https://who-fed-the-dog.herokuapp.com/api/v1/routes/users/${this.user}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          Response.message
            ? this.message = Response.message
            : (this.toPage = [],
               this.toPage.push(Response))
        })
    },
    updateUser() {
      const apiUrl = `https://who-fed-the-dog.herokuapp.com/api/v1/routes/users/${this.user}`;
      const data = {
        username: this.changedUsername
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: new Headers ({
          'Content-Type': 'application/json',
          mode: 'no-cors'}),
        method: 'PUT',
      })
        .then(Response => Response.json())
        .then(Response => {
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
        });
    },
    postNewUser() {
    const apiUrl = 'https://who-fed-the-dog.herokuapp.com/api/v1/routes/newuser';
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
        });
    },
    deleteUser() {
      const apiUrl = `https://who-fed-the-dog.herokuapp.com/api/v1/routes/removeuser/${this.user}`;
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
        });
    }
  },
  components:  {
    ListData
  }
}
</script>

