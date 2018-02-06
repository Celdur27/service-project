<template>
    <div class="service">
        <div class="service--data">
            <h2>{{ service.name }}</h2>
            <span class="service--data__description">{{ service.subtitle }}</span>
            <span class="service--data__booking">Booking Count: {{ service.booking_count }}</span>
        </div>
        <div class="service--images">
            <!--<img class="service--images__icon" v-bind:src="'../assets/img/' + service.blueIconUrl" />-->
            <img class="service--images__img" :src="imageUrl" />
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
  },
  computed: {
      imageUrl() {
          if(this.service.imageUrl) {
              return '../assets/img/'+this.service.imageUrl
          }
          else {
              return '../assets/img/24service.png'
          }
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
    padding: 0 10px;
    box-shadow: 5px 10px #cddbf4;
    width: 700px;
    margin-bottom: 20px;
    text-align: left;
    display: flex;
}
.service .service--data {
    width: 70%;
}
.service .service--data h2 {
    color: #588fef;
    font-weight: normal;
    margin-bottom: 10px;
}
.service .service--data span {
    display: block;
    margin-bottom: 10px;
}
.service .service--data__description {
    font-weight: 600;
}
.service .service--data__booking {
    font-size: 14px;
    color: grey;
}
.service--images__img {
    width: 100%;
}
.service--images__img img {
    width: 100%;
}
.service--images__icon {
    z-index: 1;
    position: relative;
}
</style>
