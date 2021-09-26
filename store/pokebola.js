export const state = () => ({
  pokemon: null,
  pokelist: [],
})

export const mutations = {
  addPokemonToList(state, pokemon) {
    state.pokelist = [...state.pokelist, pokemon]
  }
}

export const actions = {
  getPokemon({ commit }, name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        commit('addPokemonToList', res)
      })
      .catch((error) => console.error(error))
  }
}
