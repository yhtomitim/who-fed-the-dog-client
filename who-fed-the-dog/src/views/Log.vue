<template>
  <section>
    <h3>Feeding Log</h3>
    <!-- <v-btn @click="getFedLog">List Feeding Log </v-btn> -->
    <list-data :data="toPage"></list-data>
  </section>
</template>

<script>
import ListData from '@/components/ListData'
export default {
  data () {
    return {
      toPage: []
    }
  },
  methods: {
    getFedLog() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/fedon';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.fed);
        })
    }
  },
  mounted: function() {
    this.getFedLog();
  },
  components: {
    ListData
  }
}
</script>

