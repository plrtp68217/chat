<template>
  <div class="main_background" :class="{'light_theme_main': $store.state.theme, 'dark_theme_main': !$store.state.theme}">
    <div class="main_container">

      <div class="chats_container" :class="{'chats_container_light': $store.state.theme, 'chats_container_dark': !$store.state.theme}">
        <div v-for="i in 100">
          <ChatComponent/>
        </div>
      </div>

      <div class="second_chat_container">
        <SecondChatComponent/>
      </div>

    </div>

  </div>


</template>


<script setup>
import ChatComponent from '@/components/main/ChatComponent.vue';
import SecondChatComponent from '@/components/main/SecondChatComponent.vue';

</script>



<style scoped>


/* фон общий */
.main_background {
  transition: all 200ms;
}

.dark_theme_main {
  background-color: #1A1A1D;
  color: white;
}

.light_theme_main {
  background-color: white;
  color: #1A1A1D;
}

.main_container {
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
}

.chats_container {
  width: 310px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
}

.chats_container_light {
  background-color: rgb(219, 218, 218);
}

.chats_container_dark {
  background-color: #2E2E2E;
}

.chats_container:hover {
  overflow-y: auto;
}

.second_chat_container {
  width: 590px;
  height: 100vh;
}
    
</style>