<template>
<div @click="card.delete = null" class="card" :data-tags="card.id" ref="div" v-for="card in cards" :key="card.id">
        <a v-bind:href="card.pageURL" target="_blank" class="card__image">
            <img v-bind:src="card.largeImageURL" alt="random-picture">
        </a>
        <Social :card="card" />
        <Tags :card="card" />
  </div>

</template>

<script>
import Social from '../Card/Social/Social.vue'
import Tags from '../Card/Tags/Tags.vue'

export default {
    props: ['inputField'],

    components: {
        Social,
        Tags,
    },

    name: 'Card',
    computed: {
        cards() {
            let newCards = [];
            if (this.inputField === '') return this.$store.getters.getJson; 
            else {
                for (let i of this.$store.getters.getJson) {
                    if (i.tags.split(/,| /).find(word => word.trim() === this.inputField)) newCards.push(i) // fix it (2words)
                }
                return newCards
            }
        },
    },
}


</script>

<style lang='scss'>

.card {
    max-width: 400px;
    padding: 12px 12px 0;
    border: 1px solid #ccc;
    position: relative;
    background-color: #fefff8ec;
    border-radius: 5px;

        &__image {
            display: block;
            height: 200px;
            overflow: hidden;
            border-radius: 5px;

            & img {
                max-width: 100%;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
}

</style>

