<template>
    <div class="chat">
        <div class="chat_avatar">

        </div>
        <div class="chat_message">

        </div>
        <div class="chat_date">

        </div>
    </div>

</template>
<script setup>

</script>

<style scoped>
.chat {
  margin: 5px;
  width: 300px;
  display: flex;
  border: 1px solid #148FC4;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 5px;
  padding: 5px;
}

.chat_avatar {
  width: 40px;
  height: 40px;
  border: 1px solid #148FC4;
  border-radius: 50%;
  
}

.chat_message {
  width: 200px;
  border: 1px solid #148FC4;
}

.chat_date {
  width: 55px;
  border: 1px solid #148FC4;
}
</style>