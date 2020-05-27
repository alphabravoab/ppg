import {http_get} from '../../HttpClient/client'

export const GET_EPISODE_DATA = 'GET_EPISODE_DATA'
export const RELEASE_EPISODE_DATA = 'RELEASE_EPISODE_DATA'

const getEpisodeData = (episode) => ({
    type: GET_EPISODE_DATA,
    payload: episode
})

const releaseData = () => ({
    type: RELEASE_EPISODE_DATA,
    payload: {}
})

export const fetch_episode = (episodeId) => dispatch => {
    const endpoint = `episodes/${episodeId}`
    http_get(endpoint)
        .then(suc => dispatch(getEpisodeData(suc.data)))
}

export const release_episode = () => dispatch => {
    dispatch(releaseData())
}