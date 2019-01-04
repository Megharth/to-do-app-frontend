<template>
    <transition name="slide">
        <div id="login">
            <header class="heading">Ledger</header>
            <div class="container">
                <div class="login-form">
                    <b-form-input type="email" v-model="user.email" placeholder="Email" :class="{error: emailError}"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Password" :class="{error: passError}"></b-form-input>
                    <button class="btn d-block mx-auto" @click="login">Login</button>
                    <button class="btn signup d-block mx-auto" @click="$router.push('register')">Sign up</button>
                    <div class="errors" v-if="emailError || passError">
                        <ul>
                            <li v-for="error in errors">{{error}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: null,
                    password: null
                },
                emailError: false,
                passError: false,
                errors: []
            }
        },
        methods: {
            login() {
                this.emailError = false
                this.passError = false
                this.errors = []
                this.$http.post('http://todo.test/user/login', this.user).then(function (response) {
                    if(response.body.token){
                        this.$store.commit('login', response.body.token)
                        this.$router.push('dashboard')
                    }
                }).catch(function (error) {
                    if(error.body.email){
                        this.emailError = true
                        this.errors.push(error.body.email[0])
                    }
                    if(error.body.password){
                        this.passError = true
                        this.errors.push(error.body.password[0])
                    }
                })
            }
        }
    }
</script>

<style scoped lang="sass">
@import ../sass/variables
@import '../sass/login'

.error
    border: 1px solid red
    animation: snooze 0.5s ease-out both

.errors
    margin-top: 20px
    li
        list-style-type: none

@keyframes snooze
    0%
        transform: translateX(-2px)
    20%
        transform: translateX(2px)
    40%
        transform: translateX(-2px)
    60%
        transform: translateX(2px)
    80%
        transform: translateX(-2px)
    100%
        transform: translateX(0)
.slide-leave-active
    animation: slide-off 0.5s ease-out forwards

@keyframes slide-off
    0%
        transform: translateX(0)
        opacity: 1
    100%
        transform: translateX(-1000px)
        opacity: 0
</style>