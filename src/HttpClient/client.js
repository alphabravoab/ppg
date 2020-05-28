import axios from 'axios'

const url = 'http://api.tvmaze.com/'

// generic http client call so these can be switched without breaking the app. App only expects promises.
export const http_get = (endpoint) => { 
    const request = `${url}${endpoint}`
    return axios.get(request)
}