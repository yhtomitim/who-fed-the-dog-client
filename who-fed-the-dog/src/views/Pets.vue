<template>
  <section>
    <h3>Pets</h3>
    <v-btn @click="getPets">List all Pets</v-btn>
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
    <p v-if="true">{{ message }}</p>
    <details>
      <list-data :data="toPage"></list-data>
    </details>
  </section>
</template>

<script>
import ListData from '@/components/ListData'

export default {
  data () {
    return {
      toPage: [],
      pet: '',
      message: ''
    }
  },
  components: {
    ListData
  },
  methods: {
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
        Response.message
            ? this.message = Response.message
            : (this.toPage = [],
               this.toPage.push(Response))
        })
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
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
          this.message = Response.message;
          setTimeout(() => {
            this.message = '';
            }, 4000);
        });
    }
  }
}
</script>

