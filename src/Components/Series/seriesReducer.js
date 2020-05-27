import { GET_SERIES, GET_EPISODES } from './seriesAction'

export default (state = {}, {type, payload}) => {
    switch(type){
        case GET_SERIES:
            return {
                ...state,
                show: {...payload}
            }
        case GET_EPISODES:
            return {
                ...state,
                episodes: {...payload}
            }
        default:
            return state
    }
}