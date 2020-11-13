<template>
    <div class="wrapper">
        <Navbar/>
        <router-view name="sidebar-layout"/>
        <div>
            <router-view/>
        </div>
        <div>
            <router-view name="guest" />
        </div>
            <router-view name="sidebar-guest" />
        <Footer/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Navbar from "../components/Navbar";
    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";


    export default Vue.extend({
        name: "main-layout",
        components: {
            Navbar, Sidebar, Footer
        }
    })
</script>