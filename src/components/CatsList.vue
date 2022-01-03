<template>
<div class="container">
  <div class="card" v-for="card in cards" :key="card.id">
    <a v-bind:href="card.pageURL" target="_blank" class="card__image">
      <img v-bind:src="card.largeImageURL" alt="random-picture">
    </a>
    <div class="card__likes">{{ card.likes + ` likes`}}</div>
    <div class="card__comments">{{ card.comments + ` comments`}}</div>
    <div class="card__tags">
        <span class="card__tags-item">{{ card.tags }}</span>
        <span class="card__tags-item">{{ card.tags }}</span>
        <span class="card__tags-item">{{ card.tags }}</span>
        <span class="card__tags-item">{{ card.tags }}</span>
    </div>
  </div>
</div>
</template>


<script>

export default {
  name: 'CatsList',
  computed: {
    cards() {
      return this.$store.getters.getJson
    },
    tagsArray() {
        return this.cards
    }
  },
  mounted() {
      setTimeout(() => {
        console.log(this.cards[0]); 
        console.log(this.tagsArray); 
      },1000)
  }
}
</script>


