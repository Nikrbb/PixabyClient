<template>
    <Sort @inputEvent="handler" />
<div class="container">
    <Card :inputField="inputField" />
</div>
</template>


<script>
import {debounce} from 'lodash'
import Card from './Card/Card.vue'
import Sort from './Sort/Sort.vue'


export default {
    
    name: 'CatsList',
    components: {
        Card,
        Sort,
    },
    data() {
        return {
            inputField: '',
        }
    }, 
   
    methods: {

        handler (event) {
            let value = event.target.value;
            this.inputField = value;
        },
    }
}
</script>

<style lang="scss">

  .container {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

</style>


