<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="sass">
  *
    padding: 0
    margin: 0
    box-sizing: border-box
  a
    text-decoration: none
    color: #2a5f9c
    font-size: 1.25rem

  .container
    width: 922px
    margin: 20px auto
    padding: 20px
    font-family: 'Inter', sans-serif
    h1
      font-size: 1.5rem
      margin: 0 0 20px 0
    h2
      font-size: 1.2rem
</style>
