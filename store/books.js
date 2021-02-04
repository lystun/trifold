export const state = () => ({
    books: {}
})

//getters
export const getters = {
    getBooks(state){
        return state.books
    }
}

//mutations
export const mutations = {
    SET_BOOKS(state, books){
        state.books = books
    }
}

//actions
export const actions = {
    setBooks({commit}, books){
        commit("SET_BOOKS", books)
    }
}