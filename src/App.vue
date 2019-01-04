<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "./sass/variables"

#app
  font-family: $ubuntu
.heading
  font-family: $pacifico
  font-size: 38px

.fab
  border-radius: 50%
  background: #09BC8A
  height: 42px
  width: 42px
  box-shadow: 0 4px 4px rgba(0,0,0,.25)

</style>
