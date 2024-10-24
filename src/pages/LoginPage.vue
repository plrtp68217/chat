<template>
    
    <div class="form_container">

        <div class="message">
            <h4>WELCOME</h4>
        </div>
        
        <FormComponent/>
        
    </div>
    

</template>


<script setup>
import FormComponent from '@/components/FormComponent.vue';

</script>


<style scoped>

.form_container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>