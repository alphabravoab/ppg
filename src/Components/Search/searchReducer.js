import { SEARCH_SHOW } from './searchActions'

export default (state=[], {type, payload}) => {
    switch(type){
        case SEARCH_SHOW:
            return [...payload]
        default:
            return state
    }
}