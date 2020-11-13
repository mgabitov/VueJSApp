<template>
    <div class="form-style-6">
        <h1>Чат</h1>
        <form @submit.prevent="submitHandler">
            <label for="usernickname">Никнейм</label>
            <input type="text"
                   v-model.trim="usernickname"
                   id="usernickname"
                   placeholder="Введите ваше имя"
                   :class="{invalid: ($v.usernickname.$dirty && !$v.usernickname.required) || ($v.usernickname.$dirty && !$v.usernickname.minLength)}"
            />
            <small class="helper-text invalid" v-if="$v.usernickname.$dirty && !$v.usernickname.required">Введите ваш никнейм</small>
            <small class="helper-text invalid" v-else-if="$v.usernickname.$dirty && !$v.usernickname.minLength">Минимальная длина: {{$v.usernickname.$params.minLength.min}} символа. Вы ввели
                {{usernickname.length}} </small>
            <label for="picurl">Ссылка на аватар</label>
            <input type="url"
                   v-model="picurl"
                   id="picurl"
                   placeholder="Ссылка на изображение"
                   :class="{invalid: ($v.picurl.$dirty && !$v.picurl.required) || ($v.picurl.$dirty && !$v.picurl.url)}"
            />
            <small class="helper-text invalid" v-if="$v.picurl.$dirty && !$v.picurl.required">Поле не может быть пустым</small>
            <small class="helper-text invalid" v-else-if="$v.picurl.$dirty && !$v.picurl.url">Введите корректный URL-путь</small>
            <input type="submit" value="Отправить" />
        </form>
    </div>
</template>

<script>
    import {url, required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        data: () => ({
            usernickname: '',
            picurl: ''
        }),
        validations:{
            usernickname: {minLength: minLength(2), required},
            picurl: {required, url}
        },
        components: {},
        methods: {
            submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const user = {
                    nickname: this.usernickname,
                    imageurl: this.picurl,
                }
                this.$store.dispatch('createUser', user)
                this.$router.push('/chat')
            }
        }
    };
</script>
<style scoped>

    .form-style-6 {
        font: 95% Arial, Helvetica, sans-serif;
        max-width: 400px;
        margin: 10px auto;
        padding: 16px;
        background: #F7F7F7;
    }

    .form-style-6 h1 {
        background: #2BBBAD;
        padding: 20px 0;
        font-size: 140%;
        font-weight: 300;
        text-align: center;
        color: #fff;
        margin: -16px -16px 16px -16px;
    }

    .form-style-6 input[type="text"],
    .form-style-6 input[type="file"],
    .form-style-6 select {
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        background: #fff;
        margin-bottom: 4%;
        border: 1px solid #ccc;
        padding: 3%;
        color: #555;
        font: 95% Arial, Helvetica, sans-serif;
    }

    .form-style-6 input[type="text"]:focus,
    .form-style-6 input[type="file"]:focus,
    .form-style-6 select:focus {
        box-shadow: 0 0 5px #2BBBAD;
        padding: 3%;
        border: 1px solid #2BBBAD;
    }

    .form-style-6 input[type="submit"],
    .form-style-6 input[type="button"] {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        padding: 3%;
        background: #2BBBAD;
        border-bottom: 2px solid #2BBBAD;
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;
        color: #fff;
    }

    .form-style-6 input[type="submit"]:hover,
    .form-style-6 input[type="button"]:hover {
        background: #2BBBAD;
    }
</style>
