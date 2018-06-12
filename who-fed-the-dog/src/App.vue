<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* {
  primary: "#33691E",
  secondary: "#DCEDC8",
  accent: "#FFB74D",
  error: "#E64A19",
  warning: "#FFD600",
  info: "#9CCC65",
  success: "#4caf50"
} */
</style>

