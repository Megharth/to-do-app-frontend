<template>
    <transition name="slide">
        <div id="signup">
            <header class="heading">Ledger</header>
            <div class="container">
                <div class="login-form">
                    <b-form-input type="email" v-model="user.email" placeholder="Email" :class="{error: emailError}"></b-form-input>
                    <b-form-input type="email" v-model="user.name" placeholder="Name" :class="{error: nameError}"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Password" :class="{error: passError}"></b-form-input>
                    <button class="btn signup d-block mx-auto" @click="register">Sign up</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                user: {
                    name: null,
                    email: null,
                    password: null
                },
                emailError: false,
                passError: false,
                nameError: false,
                errors: []
            }
        },
        methods: {
            register() {
                this.emailError = false
                this.passError = false
                this.nameError = false
                this.errors = []
                this.$http.post('http://todo.test/user/register', this.user).then(function (response) {
                    if(response.body.token){
                        this.$store.commit('login', response.body.token)
                        this.$router.push('dashboard')
                    }
                }).catch(function(error) {
                    if(error.body.email){
                        this.emailError = true
                        this.errors.push(error.body.email[0])
                    }
                    if(error.body.name){
                        this.emailError = true
                        this.errors.push(error.body.name[0])
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

<style lang="sass" scoped>
@import '../sass/variables'
@import '../sass/login'

.login-form
    margin-top: 10%

.signup
    background: #09BC8A !important

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

@media (min-width: 320px) and (max-width: 640px)
    .login-form
        margin-top: 35%

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