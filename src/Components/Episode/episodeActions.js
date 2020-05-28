import {http_get} from '../../HttpClient/client'

export const GET_EPISODE_DATA = 'GET_EPISODE_DATA'
export const GET_ALL_EPISODES = 'GET_ALL_EPISODES'

const getEpisodeData = (episode) => ({
    type: GET_EPISODE_DATA,
    payload: episode
})

const getAllEpisodes = (episodes) => ({
    type: GET_ALL_EPISODES,
    payload: episodes
})

export const fetch_episode = (episodeId) => dispatch => {
    const endpoint = `episodes/${episodeId}`
    http_get(endpoint)
        .then(suc => dispatch(getEpisodeData(suc.data)))
}

export const fetchAllEpisodes = (showId) => dispatch => {
    const episodes = `shows/${showId}/episodes`
    http_get(episodes)
        .then(suc => dispatch(getAllEpisodes(suc.data)))
}
