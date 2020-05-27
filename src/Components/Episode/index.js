import EpisodeView from './EpisodeView'
import { connect } from 'react-redux'
import {fetch_episode} from './episodeActions'

const mapStateToProps = state => {
    return {
        episode: state.episode || {},
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_episode:(epId) => {dispatch(fetch_episode(epId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeView)

