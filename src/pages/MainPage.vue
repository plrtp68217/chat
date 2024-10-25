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
import SecondChatComponent from '@/components/SecondChatComponent.vue';

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
    
</style>