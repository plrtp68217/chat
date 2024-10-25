<template>
 <div class="form">
    <InputComponent
        :input_type="'text'"
        :holder="'username'"
    />
    <InputComponent
        :input_type="'password'"
        :holder="'password'"
    />
    <ButtonComponent/>
</div>
</template>


<script setup>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


</script>


<style scoped>

.form {
    width: 300px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #ffffffaf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
    
</style>