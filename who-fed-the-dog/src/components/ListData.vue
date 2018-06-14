<template>
  <ul>
    <v-card
      v-for="(value, index) in data[0]"
      :key="index"
      width="20em"
      dark>
      <p>{{value.id}}</p>
      <p>{{value.username}}</p>
      <p>{{value.petName}}</p>
      <p>Pet ID: {{value.pet_id}}</p>
      <p>User ID: {{value.user_id}}</p>
      <p>Date and time Fed: {{value.fedOn}}</p>
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