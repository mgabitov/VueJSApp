<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>
<script>
    import EmptyLayout from "./layouts/EmptyLayout.vue";
    import MainLayout from "./layouts/MainLayout.vue";


    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || 'empty') + '-layout'
            }
        },
        components: {
            EmptyLayout, MainLayout
        }
    }
</script>
<style>
    .navbar {
        grid-area: nav;
        background-color: #2BBBAD;
    }

    .sidebar {
        grid-area: sidebar;

    }

    .sidebar-guest {
        grid-area: sidebar-guest;
        float: right;

    }

    .main-content {
        grid-area: main-content;
    }

    .main-content-guest {
        grid-area: main-content-guest;
    }

    .footer {
        grid-area: footer;
        background-color: #2BBBAD;
        height: 70px;
    }

    .wrapper {
        display: grid;
        grid-gap: 20px;
        grid-template-areas: "nav" "sidebar" "main-content" "sidebar-guest" "main-content-guest" "footer";
        min-height: 100%;
        margin-bottom: -50px;
    }
    .message-row {
        display: grid;
        grid-template-columns: 70%;
        margin-bottom: 20px;
    }
    .you-message {
        justify-content: end;
        justify-items: end;
    }
    .other-message {
        justify-content: start;
        justify-items: start;
    }
    .message-text {
        padding: 9px 14px;
        font-size: 0.9rem;
        margin-bottom: 5px;
    }
    .you-message .message-text {
        background: mediumslateblue;
        color: white;
        border: 1px solid mediumslateblue;
        border-radius: 14px 14px 0 14px;
    }
    .other-message .message-text {
        background: #9d9ab0;
        color: white;
        border: 1px solid #9d9ab0;
        border-radius: 14px 14px 0 14px;
    }
    .message-time {
        font-size: 0.8rem;
        color:#777;
    }
    textarea {
        width: 100%;
        height: 5rem;
    }

    @media (min-width: 700px) {
        .wrapper {
            grid-template-columns: 1fr 3fr 3fr 1fr;
            grid-template-areas: "nav nav nav nav" "sidebar main-content main-content-guest sidebar-guest" "footer footer footer footer";
            border: crimson;
        }

        nav ul {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
