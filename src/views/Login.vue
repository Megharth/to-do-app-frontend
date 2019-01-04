<template>
    <transition name="slide">
        <div id="login">
            <header class="heading">Ledger</header>
            <div class="container">
                <div class="login-form">
                    <b-form-input type="email" v-model="user.email" placeholder="Email"></b-form-input>
                    <b-form-input type="password" v-model="user.password" placeholder="Password"></b-form-input>
                    <button class="btn d-block mx-auto" @click="login">Login</button>
                    <button class="btn signup d-block mx-auto" @click="$router.push('register')">Sign up</button>
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
                }
            }
        },
        methods: {
            login() {
                this.$router.push('dashboard')
            }
        }
    }
</script>

<style scoped lang="sass">
@import ../sass/variables
@import '../sass/login'

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