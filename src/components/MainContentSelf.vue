<template>
    <div class="main-content">
        <h3>Отправить себе</h3>
        <div class="message-row you-message" v-for="mes in messages">
            <div class="message-text">
                {{mes.author}}: {{mes.text}}
            </div>
            <div class="message-time">
                {{mes.time.toLocaleTimeString('ru-RU')}}
            </div>
        </div>
        <form @submit.prevent="submitHandler">
            <div class="input-field">
                <textarea maxlength="4000" v-model="message" id="message" @keyup.enter="submitHandler"></textarea>
                <label for="message"></label>
                <br>
                <button class="btn" style="float: right;" type="submit">Отправить<i class="material-icons right">send</i></button>
            </div>
        </form>
    </div>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: 'MainContentSelf',
        data: () => ({
            message: ''
        }),
        computed: {
            messages() {
                return this.$store.getters.messageById(2)
            },
            ...mapState({
                nickname: 'nickname'
            })
        },
        methods: {
            submitHandler() {
                const textMessage = {
                    author: this.nickname,
                    chatId: 2,
                    text: this.message,
                    time: new Date()
                }
                this.$store.dispatch('createMessage', textMessage)
                this.message = ''
            }
        }
    };
</script>

<style scoped>
</style>