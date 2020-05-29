import { GET_EPISODE_DATA, GET_ALL_EPISODES } from './episodeActions'

const episodeReducer =  (state = {}, {type, payload}) => {
   
    switch(type){
        case GET_EPISODE_DATA:
            return {
                ...state,
                ...payload
            }
        case GET_ALL_EPISODES:
            return {
                ...state,
                ...payload 
            }
        default:
            return state
    }
}

export default episodeReducer
