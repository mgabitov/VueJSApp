<template>
    <aside class="sidebar-guest">
        <ul class="collection">
            <li class="collection-item avatar"><img :src=imgurl alt="" class="circle">
                {{nickname}}
                <br>
                <span class="title"><i>Online</i></span>
            </li>
        </ul>
    </aside>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: 'SidebarGuest',
        props: {
            msg: String,
        },
        computed: mapState({
            nickname: 'nickname',
            imgurl: 'imageurl',
        })
    };
</script>

<style scoped>

</style>