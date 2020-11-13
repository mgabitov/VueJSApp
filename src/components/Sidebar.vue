<template>
    <aside class="sidebar">
        <ul class="collection">
            <router-link class="collection-item avatar" tag="li" to="/next"><img :src=imgurl alt="" class="circle">
                <a href="#">{{nickname}}</a><br>
                <span class="title"><i>Online</i></span>
                </router-link>
            <router-link class="collection-item avatar" tag="li" to="/chat"><img src="../assets/avatar.jpg" alt="" class="circle">
                <a href="#">Иван Иванов</a><br>
                <span class="title"><i>Online</i></span>
            </router-link>
        </ul>
    </aside>
</template>

<script>


    import {mapState} from "vuex";

    export default {
        name: 'Sidebar',
        computed: mapState({
            imgurl: 'imageurl',
            nickname: 'nickname'
        })
    };

</script>

<style scoped>

</style>