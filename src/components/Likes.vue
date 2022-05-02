<template>
    <div class="id section-likes">
        <div class="div1">{{ nbrLikes }}</div>
        <button class="div2" @click="addLikes()">J'aime</button>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: "Likes",

// setup function 
    setup() { 
        const nbrLikes = ref(7); // Reference reactive

        function addLikes() {
            nbrLikes.value++;
        }
        return { nbrLikes, addLikes };
    }
};
</script>

<style scoped>
    .div1{
        position: absolute;
        top: 20%;
        left: 10%;
        height: 20px;
        width: 20px;
        background-color: red;
        border-radius: 50% 50%;
        z-index: 2;
    }
</style>