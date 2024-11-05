<template>
    <div class="second_chat">
        
        <div class="second_companion" :class="{'background_light': $store.state.theme, 'background_dark': !$store.state.theme}">

          <AvatarComponent/>

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

        <div class="second_input" :class="{'background_light': $store.state.theme, 'background_dark': !$store.state.theme}">
            <textarea class="input_area" :class="{'background_light': $store.state.theme, 'background_dark': !$store.state.theme}"></textarea>
            <button class="send_button">send</button>

        </div>
        
      </div>
</template>


<script setup>
import AvatarComponent from './AvatarComponent.vue';
import MessageComponent from './MessageComponent.vue';

</script>

<style scoped>

.second_chat {
    width: 590px;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    margin-left: 2px;
}

.second_companion {
    padding: 5px;
    display: flex;
    align-items: center;
}

.background_light {
    background-color: rgb(219, 218, 218);
    color: #2E2E2E;
}

.background_dark {
    background-color: #2E2E2E;
    color: white;
}

.second_companion_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #1A1A1D;
    margin-right: 5px;
}

.second_messages {
    display: flex;
    flex-direction: column-reverse;
    padding: 5px;
}

.second_input {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 5px;
}

.input_area {
    width:550px;
    max-width:540px;
    min-width: 540px;
    height: 45px;
    max-height: 45px;
    min-height: 45px;
    resize: none;
    outline: none;
    border: none;
    font-size: 15px;
}

.send_button {
    background-color: #4E4E50;
    border: none;
    border-radius: 20%;
    color: white;
    padding: 2px 5px;
    margin-left: 2px;
}



    
</style>