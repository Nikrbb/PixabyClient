<template>
     <select v-model="selected" @change="filterJson" name="option" class="sort" >
        <option class="sort__item" value="">None</option>
        <option class="sort__item"  value="Likes">Likes</option>
        <option class="sort__item" value="Comments">Comments</option>
    </select>
    <span>Выбрано {{ selected }}</span>
<div class="filter">
    <input type="text" placeholder="tags filter" class="filter__tags">
</div>

<div  class="container">
  <div  class="card" v-for="card in cards" :key="card.id">
        <a v-bind:href="card.pageURL" target="_blank" class="card__image">
        <img v-bind:src="card.largeImageURL" alt="random-picture">
        </a>
        <div class="card__likes">{{ card.likes + ` likes`}}</div>
        <div class="card__comments">{{ card.comments + ` comments`}}</div>
        <div class="card__tags">
            <span @click="this.try" class="card__tags-item">{{ card.tags }}</span>
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
        data() {
            return {
                selected: '',
            }
        },
    computed: {
        cards() {
            return this.$store.getters.getJson;
        },
        tags() {
            return this.$store.getters.getTags;
        }
        
    },
    methods: {

        try() {
            console.log(this.tags);
        },

        filterJson() {
            this.$store.dispatch(`loadJson`, this.selected)
        }
    },
    async mounted() {
 
    }
}
</script>


