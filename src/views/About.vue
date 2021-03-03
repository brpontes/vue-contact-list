<template>
  <div class="container">
    <h1>Contatos Salvos</h1>
    <h2 v-if="contatos.length === 0">
      Nenhum contato encontrado, <router-link to="/">clique aqui</router-link> para adicionar algum!
    </h2>
    <template v-else>
      <div class="card-contato" v-for="contato in contatos" :key="contato.id">
        <div class="card-number">#{{ contato.id }}</div>
        <div class="card-title">{{ contato.name }}</div>
        <div class="card-number">
          <eva-icon name="phone"></eva-icon>
          <span>{{ contato.number }}</span>
        </div>
        <div class="card-email">
          <eva-icon name="at"></eva-icon>
          <span>{{ contato.email }}</span>
        </div>
        <div class="remove" @click="removeContact(contato.id)">
          <eva-icon name="trash-2-outline"></eva-icon>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState('contatos', ['contatos'])
  },
  methods: {
    ...mapActions('contatos', ['remove']),
    async removeContact(id) {
      await this.remove(id)
    }
  }
}
</script>

<style lang="sass">
  .card-contato
    display: flex
    flex-direction: column
    border: 1px solid lighten(#2a5f9c, 50%)
    border-radius: 5px
    padding: 20px
    margin: 10px 0
    font-size: 1.2em
    position: relative

    & > div
      margin: 5px 0
      display: flex
      span
        margin: 0 10px
    
    .remove
      position: absolute
      right: 20px
      cursor: pointer
</style>
