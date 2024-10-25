<template>
    <div class="second_chat">
        
        <div class="second_companion">

          <div class="second_companion_avatar">

          </div>

          <div class="second_companion_name">
            Username
          </div>

        </div>

        <div class="second_messages">
            <MessageComponent
                :text="'норм'"
                :owner="false"
            />
            <MessageComponent
                :text="'как дела'"
                :owner="true"
            />
            <MessageComponent
                :text="'привет'"
                :owner="false"
            />
            <MessageComponent
                :text="'мосец привет'"
                :owner="true"
            />
        </div>

        <div class="second_input">
            <textarea class="input_area"></textarea>
            <button class="send_button">send</button>

        </div>
        
      </div>
</template>


<script setup>
import MessageComponent from './MessageComponent.vue';

</script>

<style scoped>

.second_chat {
    width: 590px;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr 50px;
}

.second_companion {
    border: 1px solid #19B4F7;
    padding: 5px;
    display: flex;
    align-items: center;
}

.second_companion_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #19B4F7;;
    margin-right: 5px;
}

.second_messages {
    border: 1px solid #19B4F7;
    display: flex;
    flex-direction: column-reverse;
    padding: 5px;
}

.second_input {
    border: 1px solid #19B4F7;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.input_area {
    width:550px;
    max-width:550px;
    min-width: 550px;
    height: 45px;
    max-height: 45px;
    min-height: 45px;
    resize: none;
    outline: none;
    border: none;
    padding: 5px;
}



    
</style>