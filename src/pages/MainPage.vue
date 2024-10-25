<template>
  <div class="main_container">

    <div class="chats_container">
      <div v-for="i in 100">
        <ChatComponent/>
      </div>
    </div>

    <div class="second_chat_container">
      <SecondChatComponent/>
    </div>

  </div>

</template>


<script setup>
import ChatComponent from '@/components/ChatComponent.vue';
import SecondChatComponent from '@/components/SecondChatComponent.vue'

</script>



<style scoped>

.main_container {
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  border: 1px solid #19B4F7;
}

.chats_container {
  width: 310px;
  border: 1px solid #19B4F7;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
}

.chats_container:hover {
  overflow-y: auto;
}

.second_chat_container {
  width: 590px;
  height: 100vh;
  border: 1px solid #19B4F7;
}

/* Chrome, Edge and Safari */

*::-webkit-scrollbar {
  height: 3px;
  width: 3px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: white;
}

*::-webkit-scrollbar-track:hover {
  background-color: white;
}

*::-webkit-scrollbar-track:active {
  background-color: white;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #19B4F7;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #148FC4;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #19B4F7;
}
    
</style>