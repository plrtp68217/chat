<template>

    <input class="input" :type="props.input_type">

</template>
 
 
<script setup>

const props = defineProps([
    'input_type',
])
 
</script>
 
 
<style scoped>

.input {
    margin: 5px;
    background-color: #fff;
    border: none;
    border-bottom: 2px solid rgb(58, 54, 54);
    outline: none;
}

.input:focus {
    border-bottom: 2px solid blue;
}

</style>
       