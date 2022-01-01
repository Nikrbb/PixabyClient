<template>
<div class="container">
  <div class="card" href="https://www.youtube.com/" v-for="card in cards" :key="card.id">
    <a v-bind:href="card.pageURL" target="_blank" class="card__image">
      <img v-bind:src="card.previewURL" alt="random-picture">
    </a>
    <div class="card__tags">{{ card.tags }}</div>
    <div class="card__likes">{{ card.likes }}</div>
    <div class="card__comments">{{ card.comments }}</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      cards: [], 
      errors: [],
    }
  },

  async mounted () {

   await axios
    .get(`https://pixabay.com/api/?key=25040037-a12ad33d617bc126ab0283a57&q=cats&image_type=all&per_page=10`)
    .then(response => {
      this.cards = response.data.hits;
    })
    .catch(e => {
      this.errors.push(e);
    })
    console.log(this.cards[0]);
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  .container {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .card {
      max-width: 400px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 10px;

      &__image {
        max-height: 300px;
        
        & img {
          max-width: 100%;
          height: 50%;
          object-fit: contain;
        }
      }

      &__tags {
      }
      
      &__likes {
      }

      &__comments {
      }

  }
  }

}
</style>
