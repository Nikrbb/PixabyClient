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


</template>

<script>
import {debounce} from 'lodash'
export default {
    data() {
        return {
            selected: '',
        }
    },
    computed: {
    
        debouncedHandler() {
            return debounce(this.initDebounce, 300)
        }
    },

    methods: {
        initDebounce (event) {
            this.$emit('inputEvent', event)
        },
         sortJson() {
            this.$store.dispatch(`loadJson`, this.selected)
        }
    },
}
</script>

<style lang="scss">

.sort-label {
    position: relative;
    font-size: 20px;
    color: rgb(255, 250, 250);
    padding: 0 10px;
    border-radius: 2px;

    &::after {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.377);
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
  }
  .sort {
    font-size: 18px;
    background: rgba(0, 0, 0, 0.377);
    color: white;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding: 2px 0 1px;

    &__item {
      text-align: center;
    }
  }

  .filter {
    margin-left: 30px;
    display: inline-block;
    margin-bottom: 20px;

    &__tags {
      font-size: 18px;
      background-color: rgba(255, 255, 255, 0.675);
      border: 1px solid rgba(255, 255, 255, 0.432);
      color: #414141;
    }
  }
</style>