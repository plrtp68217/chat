<template>
    <div class="message_container">
        <div class="message" :class="{'owner_message': props.owner, 'foreign_message': !props.owner}">
            <div class="message_text">{{ props.text }}</div>
            <div class="message_time">16:50</div>
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
    display: flex;
    padding: 2px 5px;
    background-color: #4E4E50;
    color: white;
    border-radius: 10px;
}

.message_time {
    margin-left: 5px;
    margin-top: 8px;
    font-size: 12px;
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