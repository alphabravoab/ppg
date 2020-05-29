import { GET_SERIES } from './seriesAction'

export default (state = {}, {type, payload}) => {
    switch(type){
        case GET_SERIES:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
