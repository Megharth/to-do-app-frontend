<template>
    <div id="signup">
        <header class="heading">Ledger</header>
        <div class="container">
            <div class="login-form">
                <b-form-input type="email" v-model="user.email" placeholder="Email"></b-form-input>
                <b-form-input type="email" v-model="user.username" placeholder="Name"></b-form-input>
                <b-form-input type="password" v-model="user.password" placeholder="Password"></b-form-input>
                <button class="btn signup d-block mx-auto">Sign up</button>
            </div>
        </div>
    </div>
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
</style>