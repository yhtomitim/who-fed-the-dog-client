<template>
  <ul>
    <li
      v-for="(value, index) in data[0]"
      :key="index">
      <p>{{value.id}}</p>
      <p>{{value.username}}</p>
      <p>{{value.petName}}</p>
      <p>Pet ID: {{value.pet_id}}</p>
      <p>User ID: {{value.user_id}}</p>
      <p>{{value.fedOn}}</p>
      </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>