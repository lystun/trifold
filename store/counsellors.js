export const state = () => ({
    counsellors: {},
    counsellor: {},
})

//getters
export const getters = {
    getCounsellors(state){
        return state.counsellors
    },

    getCounsellor(state){
        return state.counsellor
    }
}

//mutations
export const mutations = {
    SET_COUNSELLORS(state, counsellors){
        state.counsellors = counsellors
    },

    SET_COUNSELLOR(state, counsellor){
        state.counsellor = counsellor
    }
}

//actions
export const actions = {
    setCounsellors({commit}, counsellors){
        commit("SET_COUNSELLORS", counsellors)
    },

    setCounsellor({commit}, counsellor){
        commit("SET_COUNSELLOR", counsellor)
    }
}