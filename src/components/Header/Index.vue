<template>
  <header>
    <div class="nav-header">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Contatos</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="sass">
  header
    height: 80px
    background: #f4f4f4
    width: 100
    display: flex
    align-items: center
    font-family: 'Inter', sans-serif;
    
  .nav-header
    margin: 0 auto
    width: 922px
    position: relative
    display: flex
    justify-content: center

    nav
      ul
        display: flex
        justify-content: space-between
        align-items: flex-end
        list-style-type: none
        li
          margin: 20px
</style>