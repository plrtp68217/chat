<template>

  <div>
    <img class="background" src="@/images/background.svg" alt="awdawd">
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

.background {
  position: fixed;
  z-index: -1;
}

</style>
