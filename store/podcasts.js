export const state = () => ({
    podcasts: {}
})

//getters
export const getters = {
    getPodcasts(state){
        return state.podcasts
    }
}

//mutations
export const mutations = {
    SET_PODCASTS(state, podcasts){
        state.podcasts = podcasts
    }
}

//actions
export const actions = {
    setPodcasts({commit}, podcasts){
        commit("SET_PODCASTS", podcasts)
    }
}