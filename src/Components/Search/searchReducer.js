import { SEARCH_SHOW } from './searchActions'

const searchReducer = (state=[], {type, payload}) => {
    switch(type){
        case SEARCH_SHOW:
            return [...payload]
        default:
            return state
    }
}

export default searchReducer
