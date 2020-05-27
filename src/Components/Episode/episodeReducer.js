import { GET_EPISODE_DATA, RELEASE_EPISODE_DATA } from './episodeActions'

export default (state = {}, {type, payload}) => {
    switch(type){
        case GET_EPISODE_DATA:
            return {
                ...state,
                ...payload
            }
        case RELEASE_EPISODE_DATA:
            return {
                ...state,
                episodes: {}
            }
        default:
            return state
    }
}