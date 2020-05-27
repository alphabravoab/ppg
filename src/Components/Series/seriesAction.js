import {http_get} from '../../HttpClient/client'

export const GET_SERIES = 'GET_SERIES'
export const GET_EPISODES = 'GET_GET_EPISODES'

const getseries = (show) => ({
    type: GET_SERIES,
    payload: show
})

const getAllEpisodes = (episodes) => ({
    type: GET_EPISODES,
    payload: episodes
})




export const fetch_series = (showId) => dispatch => {
    const endpoint = `shows/${showId}`
    http_get(endpoint)
        .then(suc => dispatch(getseries(suc.data)))
    const episodes = `shows/${showId}/episodes`
    http_get(episodes)
        .then(suc => dispatch(getAllEpisodes(suc.data)))
}