<template>
    <div id="login">
        <header class="heading">Ledger</header>
        <div class="container">
            <div class="login-form">
                <b-form-input type="email" v-model="user.email" placeholder="Email"></b-form-input>
                <b-form-input type="password" v-model="user.password" placeholder="Password"></b-form-input>
                <button class="btn d-block mx-auto">Login</button>
                <button class="btn signup d-block mx-auto">Sign up</button>
            </div>
        </div>
    </div>
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
        }
    }
</script>

<style scoped lang="sass">
@import ../sass/variables
@import '../sass/login'
</style>