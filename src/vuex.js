import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: false,
        oneCountry: {},
        allRegions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    },
    mutations: {
        allInformationsCountry(state, country) {
            state.oneCountry = country
            state.status = !state.status
        },
        allInformationsBordersCountry(state, country) {
            state.oneCountry = country
        },
        back(state) {
            state.status = !state.status
        }
    },
})

export { store }