<template>
    <div class="message_container">
        <div class="message" :class="{'owner_message': props.owner,
                                      'foreign_message': !props.owner,
                                      'light_theme': $store.state.theme,
                                      'dark_theme': !$store.state.theme}">
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
    border-radius: 10px;
    transition: all 200ms;
}

.dark_theme {
    background-color: #4E4E50;
    color: white;
}

.light_theme {
    background-color: rgb(219, 218, 218);
    color: #2E2E2E;
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