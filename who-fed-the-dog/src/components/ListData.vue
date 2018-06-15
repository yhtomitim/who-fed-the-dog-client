<template>
  <ul>
    <v-card
      v-for="(value, index) in data[0]"
      :key="index"
      width="20em"
      dark>
      <p>ID: {{value.id}}</p>
      <p v-if="value.username">{{value.username}}</p>
      <p v-if="value.petName">{{value.petName}}</p>
      <p v-if="value.pet_id">Pet ID: {{value.pet_id}}</p>
      <p v-if="value.user_id">User ID: {{value.user_id}}</p>
      <p v-if="$route.path === '/log'">{{value.username}} fed {{value.petName}} at {{value.fedOn}}</p>
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