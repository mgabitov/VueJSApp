<template>
    <nav class="navbar">
        <ul>
            <router-link tag="li" to="/"><a href="#" @click.prevent="logout">Выход</a></router-link>
            <router-link tag="li" to="/chat"><a href="#">Chat</a></router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            logout() {
                this.$store.dispatch('logout')
                this.$router.push('/')
            }
        }
    };
</script>
