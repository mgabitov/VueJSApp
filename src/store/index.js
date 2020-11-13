import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: [],
        nickname: 'John Doe',
        imageurl: 'http://static.kremlin.ru/media/events/photos/big/lA4LJveLUAY8fkKX77pF8jMfSXfyYS6Y.jpg'
    },
    mutations: {
        createMessage(state, message) {
            state.messages.push(message)
        },
        createUser(state, user) {
            state.nickname = user.nickname
            state.imageurl = user.imageurl
        },
        clearState(state){
            state.messages = []
        }
    },
    actions: {
        createMessage({commit}, message) {
            commit('createMessage', message)
        },
        createUser({commit}, user) {
            commit('createUser', user)
        },
        logout({commit}) {
            commit('clearState')
        }
    },
    modules: {},
    getters: {
        messages: s => s.messages,
        messageById: s => id => s.messages.filter(t => t.chatId === id)
    }
})
