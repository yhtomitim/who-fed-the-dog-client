 <template>
  <div class="small">
    <bar :chart-data="dataCollection"></bar>
    <v-btn @click="fillData()">Randomize</v-btn>
  </div>
</template>

<script>
  import Bar from '../LineChart.js'

  export default {
    components: {
      Bar
    },
    data () {
      return {
        dataCollection: null,
        toPage: null,
        // data: [
        //     {
        //       label: 'Data One',
        //       backgroundColor: '#4277f4',
        //       data: [this.getRandomInt()]
        //     },
        //     {
        //       label: 'Data Two',
        //       backgroundColor: '#f87979',
        //       data: [this.getRandomInt()]
        //     }
        //   ],
        usernames: []
      }
    },
    mounted () {
      this.getFedLog(),
      this.fillData()
    },
    methods: {
      fillData () {
        this.dataCollection = {
          // labels: this.getUsernames,
          // datasets: this.data
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#4277f4',
              data: [this.getRandomInt()]
            },
            {
              label: 'Data Two',
              backgroundColor: '#f87979',
              data: [this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      getFedLog() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/feedsummary';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.toPage = Response.list
          // this.toPage.push(Response.list)
        });
      }
    },
    computed: {
      getUsernames() {
        this.toPage.forEach(record => this.usernames.push(record.username)
        );
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>