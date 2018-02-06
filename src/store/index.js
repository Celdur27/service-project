import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    services: [
        {
          "id": 1,
          "name": "Cleaning", 
          "subtitle": "We'll your home or office sparkle.", 
          "whiteIconUrl": "", 
          "blueIconUrl": "", 
          "imageUrl": "",
          "minHours": 2, 
          "maxHours": 10, 
          "salary": 35.0,
          "active": false,
          "booking_count": 30
        },
        {
          "id": 2,
          "name": "Handyman", 
          "subtitle": "General help around your home or office.", 
          "whiteIconUrl": "", 
          "blueIconUrl": "", 
          "imageUrl": "Handyman.png",
          "minHours": 2, 
          "maxHours": 10, 
          "salary": 35.0,
          "active": true,
          "booking_count": 256
        },
        {
          "id": 3,
          "name": "Hairdresser", 
          "subtitle": "Let your hair shine with a fresh new look.", 
          "whiteIconUrl": "", 
          "blueIconUrl": "", 
          "imageUrl": "Hairdresser.png",
          "minHours": 2, 
          "maxHours": 10, 
          "salary": 35.0,
          "active": true,
          "booking_count": 2
        },
        {
          "id": 4,
          "name": "Cooking", 
          "subtitle": "Let your chefs make you delicious meals.", 
          "whiteIconUrl": "", 
          "blueIconUrl": "", 
          "imageUrl": "Cooking.png",
          "minHours": 2, 
          "maxHours": 10, 
          "salary": 35.0,
          "active": true,
          "booking_count": 85
        },
        {
          "id": 5,
          "name": "Electrician", 
          "subtitle": "Fix electrical issues and be connected.", 
          "whiteIconUrl": "", 
          "blueIconUrl": "",
          "imageUrl": "Electrician.png",
          "minHours": 2,
          "maxHours": 10,
          "salary": 35.0,
          "active": true,
          "booking_count": 42
        }
      ]
  },
  actions: {
    
  },
  mutations: {

  },
  getters: {
    services: state => state.services
  },  
  modules: {
    
  }
})

export default store