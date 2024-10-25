<template>
    <div class="message_container">
        <div :class="{'owner_message': props.owner, 'foreign_message': !props.owner, 'message': true}">
            {{ text }}
        </div>
    </div>
</template>


<script setup>

const props = defineProps([
    'owner',
    'text',
    'date',
]);



</script>

<style scoped>
.message_container {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.message {
    padding: 2px 5px;
    background-color: #2E2E2E;
    color: white;
    border-radius: 10px;
}

.owner_message {
    align-self: flex-end;
    border-bottom-right-radius: 0px;
}

.foreign_message {
    align-self:flex-start;
    border-bottom-left-radius: 0px;
    
}


    
</style>