 <template>
  <div class="small">
    <v-btn @click="fillData()">Get App Stats</v-btn>
    <bar
      :chart-data="dataCollection"
      :options="options"></bar>
  </div>
</template>

<script>
  import Bar from '../BarChart.js'

  export default {

    components: {
      Bar
    },
    data () {
      return {
        dataCollection: null,
        allUsers: null,
        allPets: null,
        feedTotal: null,
        options: {
          scales: {
            yAxes: [{
                ticks: {
                  min: 0,
                  suggestedMax: 5,
                  stepSize: 1,
                  beginAtZero:true
                }
            }]
          }
        }
      }
    },
    mounted () {
      this.getFedLog(),
      this.getUsers(),
      this.getPets()
    },
    methods: {
      fillData () {
        this.dataCollection = {
          datasets: [
            {
              label: '# of users',
              backgroundColor: '#002626',
              data: [this.allUsers[0].length]
            },
            {
              label: '# of pets',
              backgroundColor: '#0E4749',
              data: [this.allPets[0].length]
            },
            {
              label: '# of feedings tracked',
              backgroundColor: '#E55812',
              data: [this.feedTotal.length]
            }
          ],
        }
      },
      getFedLog() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/feedsummary';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.feedTotal = Response.list
          // this.toPage.push(Response.list)
        });
      },
      getUsers() {
      const apiUrl = `http://localhost:8080/api/v1/routes/users`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.allUsers = [];
          this.allUsers.push(Response.users);
        })
      },
      getPets() {
      const apiUrl = 'http://localhost:8080/api/v1/routes/pets';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.allPets = [];
          this.allPets.push(Response.pets);
        })
      },
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>