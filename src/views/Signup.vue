<template>
    <transition name="slide">
        <div id="signup">
            <header class="heading">Ledger</header>
            <div class="container">
                <div class="login-form">
                    <b-form-input type="email" v-model="user.email" placeholder="Email"></b-form-input>
                    <b-form-input type="email" v-model="user.username" placeholder="Name"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Password"></b-form-input>
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
                    username: null,
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            register() {
                this.$router.push('dashboard')
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