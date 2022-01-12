<template>
        <div  class="card__tags">
            <div class="card__tags-item"  @dblclick="dbleclickEditor(card)" v-for="tag of this.tagsList(card)" :key="tag" >
                <span class="card__tags_text noselect">{{ tag }}</span>
                <span v-if="card.delete"  @click="deleteTag(card)" @blur="card.delete"  class="card__tags-item_delete"></span>
            </div>
    
            <label class="card__tags_button" for="input" v-show="card.delete" @click="newTag(card)">+</label>
            <input v-if="card.input" @blur="card.input = null"  id="input" v-on:keyup.enter="addTag(card)" type="text" class="card__tags_add">
            
        </div>
</template>

<script>
export default {
    name: 'Tags',
    props: ['card'],

    methods: {

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

        newTag(value) {
            value.input = true;
            value.delete = false;
        },

        addTag(value) {
 
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
    }
    
}
</script>

<style lang="scss">

    .card__tags {
            border-top: 1px solid #ccc;
            text-align: left;
            padding: 5px 12px 0;
            margin: 10px -12px;

            &_add {
                border: cornsilk;
                background: #fefff8ec;
                color: #595b5c;
                width: 100px;
            }

            &-item {
                position: relative;
                display: inline-block;
                padding: 3px 5px;
                border-radius: 7px;
                background: #8df7ff;
                border: 1px solid #579ba0;
                width: fit-content;
                margin-right: 5px;
                margin-bottom: 5px;

                &_delete {
                    position: absolute;
                    bottom: 65%;
                    width: 10px;
                    height: 10px;
                    right: 0;
                    z-index: 2;
                    padding: 2px;
                    border-radius: 100%;
                    background-color: red;
                    cursor: pointer;

                    &::after {
                        content: "x";
                        bottom: 0px;
                        position: absolute;
                        font-size: 12px;
                        right: 4px;
                        color: azure;
                    }
                }
            }

            &_button {
                // background: #53db53;
                border-radius: 10px;
                // opacity: 0.7;
                border: 1px solid #46959bb2;
                cursor: pointer;
                padding: 0px 2px;
                transition: 0.5s;

                &:hover {
                    background: #8df7ff;
                    border: 1px solid #579ba0;
                } 
            }
        
        }

</style>