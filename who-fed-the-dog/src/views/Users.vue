<template>
  <section>
    <h3>Users</h3>
    <v-btn @click="getUsers">List all Users</v-btn>
    <form action="">
      <label for="newUser">Username: </label>
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
      <v-btn>Edit {{ user }}</v-btn>
    </form>
    <p v-if="true">{{ message }}</p>
    <details>
      <list-data :data="toPage"/>
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
      message: ''
    }
  },
  methods: {
    getUsers() {
      const apiUrl = `http://localhost:8080/api/v1/routes/users`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          console.log(Response.users);
          this.toPage.push(Response.users);
        })
    },
    findUser() {
      const apiUrl = `http://localhost:8080/api/v1/routes/users/${this.user}`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response);
        })
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
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

