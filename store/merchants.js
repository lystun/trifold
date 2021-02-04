export const state = () => ({
    merchants: {}
})

//getters
export const getters = {
    getMerchants(state){
        return state.merchants
    }
}

//mutations
export const mutations = {
    SET_MERCHANTS(state, merchants){
        state.merchants = merchants
    }
}

//actions
export const actions = {
    setMerchants({commit}, merchants){
        commit("SET_MERCHANTS", merchants)
    }
}