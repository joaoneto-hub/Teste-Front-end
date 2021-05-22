import axios from 'axios';

export default {
    async all() {
        return axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            return response.data
        })
    },

    async allCapital() {
        return axios.get('https://restcountries.eu/rest/v2/all?fields=capital').then(response => {
            return response.data
        })
    },

    async theCapital(selectedCapital) {
        return axios.get(`https://restcountries.eu/rest/v2/capital/${selectedCapital}`).then(response => {
            return response.data
        })
    },

    async allLanguages() {
        return axios.get('https://restcountries.eu/rest/v2/all?fields=languages').then(response => {
            return response.data
        })
    },
    async theLanguage(selectedLanguage) {
        return axios.get(`https://restcountries.eu/rest/v2/lang/${selectedLanguage}`).then(response => {
            return response.data
        })
    },
    async region(selectedRegion) {
        return axios.get(`https://restcountries.eu/rest/v2/region/${selectedRegion}`).then(response => {
            return response.data
        })
    },
    async allCountryName() {
        return axios.get('https://restcountries.eu/rest/v2/all?fields=name').then(response => {
            return response.data
        })
    },
    async theCountry(selectedCountry) {
        return axios.get(`https://restcountries.eu/rest/v2/name/${selectedCountry}`).then(response => {
            return response.data
        })
    },
    async allCallingCodes() {
        return axios.get('http://restcountries.eu/rest/v2/all?fields=callingCodes').then(response => {
            return response.data
        })
    },
    async theCallingCodes(selectedCallingCode) {
        return axios.get(`https://restcountries.eu/rest/v2/callingcode/${selectedCallingCode}`).then(response => {
            return response.data
        })
    },

    async bordersCountry(borders) {
        return axios.get(`https://restcountries.eu/rest/v2/alpha/${borders}`).then(response => {
            return response.data
        })
    }

} 