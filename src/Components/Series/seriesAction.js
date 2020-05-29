import {http_get} from '../../HttpClient/client'

export const GET_SERIES = 'GET_SERIES'

const getseries = (show) => ({
    type: GET_SERIES,
    payload: show
})


export const fetchSeries = (showId) => dispatch => {
    // When the app loads from root it doesn't have an id yet. So as long as it's undefined it shouldn't make a call.
    if(showId !== undefined) {
        const endpoint = `shows/${showId}`
        http_get(endpoint)
            .then(suc => dispatch(getseries(suc.data)))
    }
}
