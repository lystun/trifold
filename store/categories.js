export const state = () => ({
    categories: {}
})

//getters
export const getters = {
    getCategories(state){
        return state.categories
    }
}

//mutations
export const mutations = {
    SET_CATEGORIES(state, categories){
        state.categories = categories
    }
}

//actions
export const actions = {
    setCategories({commit}, categories){
        commit("SET_CATEGORIES", categories)
    }
}