<template>
  <div class="hello">
    <div class="header"></div>
    <div class="content">
      <div class="content--navbar">
        <ul>
          <li>Booking</li>
          <li>Specialists</li>
          <li>Users</li>
          <li>Locations</li>
          <li class="active">Services</li>
        </ul>
      </div>
      <div class="content--services">
        <div class="content--services__filter">
          <ul>
            <li v-on:click="changeState(1)">Active</li>
            <li v-on:click="changeState(2)">Inactive</li>
            <li v-on:click="changeState(0)">All</li>
          </ul>
          <button>ADD NEW SERVICE</button>
        </div>
        <div class="content--services__list">
          <ul>
            <li v-for="service in serviceList">
              <service :service="service"></service>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from './service.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'services'
  ]),
  data () {
    return {
      currentState: 0, 
      serviceList: []
    }
  },
  components: {
    service
  },
  mounted() {
    this.serviceList = this.services
  },
  methods: {
    changeState(state) {
      switch(state) {
        case 0:
          this.serviceList = this.services;
          break;
        case 1:
          this.serviceList = this.services.filter(({active}) => {
            return active;
          });
          break;
        case 2:
        this.serviceList = this.services.filter(({active}) => {
            return !active;
          });
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  background-color: #0b2d68;
  height: 50px;
  width: 100%;
}
.content {
  display: flex;
  flex: 1;
}
.content--navbar {
  text-align: center;
  background-color: #166bff;
  color: #a8adb5;
  width: 15%;
}
.content--navbar .active {
  color: white;
}
.content--navbar li {
  display: block;
}
.content--services__filter {
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.content--services__filter li {
  cursor: pointer;
  color: #166bff;
}
.content--services__filter button {
  background-color: white;
  border: none;
  cursor: pointer;
  color: #166bff;
}
.content--services__filter button:hover {
  background-color: white;
  border: none;
  cursor: pointer;
  color: black;
}
.content--services__list {
  display: flex;
}
.hello {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
