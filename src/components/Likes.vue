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

