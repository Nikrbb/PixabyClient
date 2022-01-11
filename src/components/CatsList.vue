<template>
<label class="sort-label" for="sort">sort</label>
<select v-model="selected" @change="sortJson" name="option" class="sort" id="sort">
    <option class="sort__item" value="">-</option>
    <option class="sort__item"  value="Likes">Likes</option>
    <option class="sort__item" value="Comments">Comments</option>
</select>
<div class="filter">
    <input @keyup="debouncedHandler"  type="text" placeholder="filter" class="filter__tags">
</div>

<div class="container">
    <div @click="card.delete = null" class="card" :data-tags="card.id" ref="div" v-for="card in cards" :key="card.id">
        <a v-bind:href="card.pageURL" target="_blank" class="card__image">
            <img v-bind:src="card.largeImageURL" alt="random-picture">
        </a>
        <div class="card__social">
            <div class="card__social_likes"><i class="likes fas fa-thumbs-up"></i> {{ card.likes}}</div>
            <div class="card__social_comments">{{ card.comments}}<i class="comments fas fa-comments"></i></div>
        </div>
        <div  class="card__tags">
            <div class="card__tags-item"  @dblclick="dbleclickEditor(card)" v-for="tag of this.tagsList(card)" :key="tag" >
                <span class="card__tags_text noselect">{{ tag }}</span>
                <span v-if="card.delete"  @click="deleteTag(card)" @blur="card.delete"  class="card__tags-item_delete"></span>
            </div>
    
            <label class="card__tags_button" for="input" v-show="card.delete" @click="addTag(card)">+</label>
            <input v-if="card.input" @blur="card.input = null"  id="input" v-on:keyup.enter="send(card)" type="text" class="card__tags_add">
            
        </div>
  </div>
</div>
</template>


<script>
import {debounce} from 'lodash'


export default {
    
    name: 'CatsList',

    data() {
        return {
            selected: '',
            inputField: '',
        }
    }, 
    computed: {
        cards() {

            let newCards = [];
            if (this.inputField === '') return this.$store.getters.getJson; 
            else {
                for (let i of this.$store.getters.getJson) {
                    if (i.tags.split(/,| /).find(word => word.trim() === this.inputField)) newCards.push(i) // fix it (2words)
                };
                console.log(newCards);
                return newCards
            }
        },

       
        tags() {
            return this.$store.getters.getTags;
        },
        debouncedHandler() {
            return debounce(this.handler, 300)
        }
    },
    methods: {

        handler (event) {
            let value = event.target.value;
            this.inputField = value;
        },

        dbleclickEditor(value) {
            value.delete = true;
            
        },

        deleteTag(value) {
            
            let tags = this.tagsList(value);
            let tagText = event.target.closest('.card__tags-item');
            tagText = tagText.querySelector(`.card__tags_text`).innerText
            tags = tags.filter(e => e !== tagText)
            tags = tags.join(', ');
            value.tags = tags
            value.delete = false
        },

        addTag(value) {
            value.input = true;
            value.delete = false;
        },

        send(value) {
 
            const parents = event.target.closest('.card__tags');
            const inputValue = parents.querySelector('input').value;
            if (inputValue.trim() !== ``) {
                value.tags += `, ${parents.querySelector('input').value}`;
            }

            value.input = false

        },

        tagsList(arg) {
            let cardTags = [];
            for (let i of arg.tags.split(',')) {
                cardTags.push(i.trim());
            };
            return cardTags
        },

        sortJson() {
            this.$store.dispatch(`loadJson`, this.selected)
        }

     
    },
}
</script>


