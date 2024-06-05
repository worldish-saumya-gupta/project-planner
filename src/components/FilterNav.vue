<template>
  <nav class="filter-nav">
    <button 
        @click="updateFilter('all')"
        :class="{active: current==='all' }"
    >View All</button> 
    <button 
        @click="updateFilter('completed')"
        :class="{active: current==='completed' }"

    >Completed</button>
    <button 
        @click="updateFilter('ongoing')"
        :class="{active: current==='ongoing' }"

    >On Going</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods:{
        updateFilter(by){
            this.$emit('filterChange', by)
        }
    }
}
</script>

<style>
.filter-nav button{
    padding: 10px;
    margin: 20px;
}

.filter-nav button.active{
    color: white;
    background: green;
    border: none;
}
</style>