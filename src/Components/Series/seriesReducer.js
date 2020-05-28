import { GET_SERIES } from './seriesAction'

//setting an initial id of 6771 to start at power puffs.
const show = {
    id: 6771
}

export default (state = show, {type, payload}) => {
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