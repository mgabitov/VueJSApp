<template>
    <div class="main-content-guest">
        <h3>Чат с {{nickname}}</h3>
        <div v-for="mes in messages">
            <div :class="mes.author !== 'Иван Иванов' ? 'message-row other-message' : 'message-row you-message'">
                <div class="message-text">{{mes.author}}: {{mes.text}}</div>
                <div class="message-time">
                    {{mes.time.toLocaleTimeString('ru-RU')}}
                </div>
            </div>
        </div>
        <form @submit.prevent="submitHandler">
            <div class="input-field">
                <textarea maxlength="4000" v-model="message" id="message"
                          @keyup.enter="submitHandler"></textarea>
                <label for="message"></label>
                <br>
                <button class="btn" style="float: right;" type="submit">Отправить<i
                        class="material-icons right">send</i></button>
            </div>
        </form>
    </div>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: 'MainContentGuest',
        data: () => ({
            message: ''
        }),
        computed: {
            messages() {
                return this.$store.getters.messageById(1)
            },
            ...mapState({
                nickname: 'nickname'
            })
        },
        methods: {
            submitHandler() {
                const textMessage = {
                    author: 'Иван Иванов',
                    chatId: 1,
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