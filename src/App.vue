<template>
  <button @click="$store.commit('changeTheme')">сменить тему</button>
  <router-view></router-view>
  
</template>

<script setup>

</script>



<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  height: 3px;
  width: 3px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #2E2E2E;
}

*::-webkit-scrollbar-track:hover {
  background-color: #2E2E2E;
}

*::-webkit-scrollbar-track:active {
  background-color: #2E2E2E;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4E4E50;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #4E4E50;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #4E4E50;
}

</style>
