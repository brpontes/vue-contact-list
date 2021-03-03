import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contatos = {
  namespaced: true,
  state: () => ({
    contatos: [
      { id: 0, name: 'Bruno Pontes', number: '85988269979', email: 'brunodeveloper18@gmail.com' }
    ]
  }),
  mutations: {
    ADD_CONTACT(state, data) {
      state.contatos = [...state.contatos, Object.assign({}, { id: state.contatos.length }, data)]
    },
    REMOVE_CONTACT(state, id) {
      state.contatos = state.contatos
        .filter(contato => contato.id !== id)
        .map((contato, index) => {
          contato.id = index
          return contato
        })
    }
  },
  actions: {
    add ({ commit }, data) {
      commit('ADD_CONTACT', data)
    },
    remove ({ commit }, id) {
      commit('REMOVE_CONTACT', id)
    }
  },
  getters: {}
}

export default new Vuex.Store({
  modules: {
    contatos
  }
})
