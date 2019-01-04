<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "./sass/variables"

#app
  font-family: $ubuntu
  transition: all 0.2s ease-in

.heading
  font-family: $pacifico
  font-size: 38px

.fab
  border-radius: 50%
  background: #09BC8A
  height: 42px
  width: 42px
  box-shadow: 0 4px 4px rgba(0,0,0,.25)

.form-control, .form-control:focus
  background: transparent
  border: 0
  outline: 0
  box-shadow: 0 0 0

::-webkit-scrollbar
  display: none
</style>
