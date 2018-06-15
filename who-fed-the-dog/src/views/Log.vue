<template>
  <section>
    <h3>Feeding Log</h3>
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
      const apiUrl = 'https://who-fed-the-dog.herokuapp.com/api/v1/routes/feedsummary';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = [];
          this.toPage.push(Response.list);
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

