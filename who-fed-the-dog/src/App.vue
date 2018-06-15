<template>
  <v-app>
    <v-content>
      <Header/>
      <v-container
        fluid
        fill-height>
        <v-layout
          align-center
          justify-center>
          <router-view/>
        </v-layout>
      </v-container>
      <Footer/>
    </v-content>
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

