<template>
  <div class="github_container">

    <div class="github_reference">
      <a class="reference" href="https://github.com/plrtp68217/chat">
        <img class="logo" src="@/images/github_white.svg">
        <h4>Github</h4>
      </a>
    </div>

  </div>

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

.github_container {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.github_reference {
  width: 100px;
  height: 100px;
  align-self: flex-end;
  color: white;
}

.reference {
  color: white;
  text-decoration: none;
}

.reference:hover {
  color: #4d4b4b;
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
