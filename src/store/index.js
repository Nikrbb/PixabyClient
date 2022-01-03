import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    catsJson: null,
  },

  getters: {
    getJson: state => {
      return state.catsJson;
    }
  },

  mutations: {
    SET_JSON(state, payload) {
      state.catsJson = payload;
    }

  },
  actions: {
    async loadJson({ commit }) {

      let json;
      let errors;

      await axios
      .get(`https://pixabay.com/api/?key=25040037-a12ad33d617bc126ab0283a57&q=cats&image_type=all&per_page=5`)
      .then(response => {
        json = response.data.hits;
        commit(`SET_JSON`, json)
      })
      .catch(e => {
        errors.push(e);
      })
      
    },
    
  },
  modules: {
  }
})
