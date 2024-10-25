<template>
    <div class="chat">
        <div class="chat_avatar">
            <img class="chat_avatar_image" src="@/images/avatar.png">
        </div>
        <div class="chat_username_last_message">
            <div class="username">
                <b>Username</b>
            </div>
            <div class="last_message">
                last message sended for user Username
            </div>
        </div>

        <div class="chat_date">
            25.10.2024
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
    border: 1px solid #1A1A1D;
    border-radius: 10px;
    border-bottom-left-radius: 0px;  
    height: 50px;
    margin-bottom: 5px;
    padding: 5px;
}

.chat:hover {
    background-color: #4E4E50;
    cursor: pointer;
}

.chat_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #1A1A1D;
  
}

.chat_avatar_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.chat_username_last_message {
    padding: 2px;
    font-size: 11px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.last_message {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 10px;
    
}

.chat_date {
    width: 55px;
    font-size: 10px;
}
</style>