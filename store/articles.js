export const state = () => ({
    articles: {}
})

//getters
export const getters = {
    getArticles(state){
        return state.articles
    }
}

//mutations
export const mutations = {
    SET_ARTICLES(state, articles){
        state.articles = articles
    }
}

//actions
export const actions = {
    setArticles({commit}, articles){
        commit("SET_ARTICLES", articles)
    }
}