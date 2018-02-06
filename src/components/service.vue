<template>
    <div class="service">
        <div class="service-data">
            <h2>{{ service.name }}</h2>
            <p>{{ service.subtitle }}</p>
            <p>Booking Count: {{ service.booking_count }}</p>
        </div>
        <div class="service-images">
            <img v-bind:src="'../assets/img/' + service.blueIconUrl" />
            <img v-bind:src="'../assets/img/' + service.imageUrl" />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Service',
  props: ['service'],
  data () {
    return {
      msg: 'Test Vue APP'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.service {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 5px 10px #cddbf4;
    width: 500px;
    height: 200px;
    margin-bottom: 20px;
    text-align: left;
}
</style>
