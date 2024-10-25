<template>
    <div class="chat_avatar">
        <img class="chat_avatar_image" src="@/images/avatar.png">
    </div>
</template>


<script setup>

</script>


<style scoped>
.chat_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #1A1A1D;
    margin-right: 5px;
  
}

.chat_avatar_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>