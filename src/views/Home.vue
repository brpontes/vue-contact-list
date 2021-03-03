<template>
  <div class="container">
    <h1>Cadastrar Contato</h1>
    <form>
      <label for="name">
        Nome
        <input v-model="form.name" type="text" id="name" name="name" />
      </label>
      <label for="name">
        Número
        <input v-model="form.number" type="text" id="number" name="number" />
      </label>
      <label for="name">
        Email
        <input v-model="form.email" type="text" id="email" name="email" />
      </label>
      <button type="button" @click="addContact">
        Salvar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      form: {
        name: '',
        number: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions('contatos', ['add']),
    async addContact () {
      await this.add(this.form)
    }
  },
}
</script>

<style lang="sass">
  form
    display: flex
    flex-direction: column

    label
      padding: 20px 0
      display: block
      input
        display: block
        margin: 5px 0
        height: 60px
        width: 100%
        background: #fafafa
        outline: none
        border-radius: 5px
        padding: 5px 15px
        border: 1px solid darken(#fafafa, 10%)
        font-size: 1.2em
    
    button
      background: #2a5f9c
      color: #fafafa
      height: 60px
      border: none
      border-radius: 5px
      cursor: pointer
      margin: 20px 0
      font-size: 1.2em
</style>