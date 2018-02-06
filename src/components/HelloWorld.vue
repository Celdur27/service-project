<template>
  <div class="hello">
    <ul>
      <li v-for="service in services">
        <service :service="service"></service>
      </li>
    </ul>
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
      msg: 'Test Vue APP'
    }
  },
  components: {
    service
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
.hello {
  border: 1px solid grey;
  border-radius: 10px;
  width: 70%;
  margin: auto;
  display: flex;
}
</style>
