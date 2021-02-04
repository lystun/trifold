export const state = () => ({
    events: {}
})

//getters
export const getters = {
    getEvents(state){
        return state.events
    }
}

//mutations
export const mutations = {
    SET_EVENTS(state, events){
        state.events = events
    }
}

//actions
export const actions = {
    setEvents({commit}, events){
        commit("SET_EVENTS", events)
    }
}