<template>
  <div class="main_background" :class="{'light_theme_main': $store.state.theme, 'dark_theme_main': !$store.state.theme}">
    <div class="main_container">

      <div>

        <div class="search_person">
          <input class="search_input" :class="{'light_theme_search': $store.state.theme, 'dark_theme_search': !$store.state.theme}" type="text" placeholder="Поиск собеседника">
        </div>

        <div class="swap_theme_container">
          <button
            class="swap_theme"
            @click="$store.commit('changeTheme')" :class="{'light_theme': $store.state.theme, 'dark_theme': !$store.state.theme}">
            <div div v-if="$store.state.theme">Светлая тема</div>
            <div v-else>Темная тема</div>
          </button>
        </div>

        <div class="chats_container" :class="{'chats_container_light': $store.state.theme, 'chats_container_dark': !$store.state.theme}">
          <div v-for="i in 100">
            <ChatComponent/>
          </div>
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

.search_person {
  width: 310px;
  height: 3%;
}

.search_input {
  width: 310px;
  outline: none;
  padding: 3px 6px;
}

.dark_theme_search {
  border: 3px solid #2E2E2E;
  background-color: #1A1A1D;
  color: white;
  
}

.light_theme_search {
  border: 3px solid rgb(219, 218, 218);
  background-color: white;
  color: #1A1A1D;
}

.chats_container {
  width: 310px;
  height: 95%;
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

.swap_theme_container {
  height: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swap_theme {
  width: 310px;
  border: none;
  background: none;
  transition: all 200ms;
}

.swap_theme:hover {
  transform: scale(1.1);
}

    
</style>