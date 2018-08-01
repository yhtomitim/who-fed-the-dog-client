<template>
  <ul>
    <v-card
      v-for="(value) in data[0]"
      :key="value.id"
      width="20em">
      <!-- <p>ID: {{value.id}}</p> -->
      <p v-if="$route.path !=='/log' && value.username">Username: {{value.username}}</p>
      <p v-if="$route.path !=='/log' && value.petName">Name: {{value.petName}}</p>
      <!-- <p v-if="value.pet_id">Pet ID: {{value.pet_id}}</p>
      <p v-if="value.user_id">User ID: {{value.user_id}}</p> -->
      <p v-if="$route.path === '/log'">{{value.username}} fed {{value.petName}} on {{value.fedOn | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
      </v-card>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>