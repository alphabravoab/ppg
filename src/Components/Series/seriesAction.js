import {http_get} from '../../HttpClient/client'

export const GET_SERIES = 'GET_SERIES'

const getseries = (show) => ({
    type: GET_SERIES,
    payload: show
})


export const fetch_series = (showId) => dispatch => {
    const endpoint = `shows/${showId}`
    http_get(endpoint)
        .then(suc => dispatch(getseries(suc.data)))
}