<template>
  <div class="main_backgound">
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

  </div>


</template>


<script setup>
import ChatComponent from '@/components/main/ChatComponent.vue';
import SecondChatComponent from '@/components/main/SecondChatComponent.vue';

</script>



<style scoped>


/* фон общий */
.main_backgound {
  background-color: #1A1A1D;
  color: white;
}

.main_container {
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
}

.chats_container {
  background-color: #2E2E2E;
  width: 310px;
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
}
    
</style>