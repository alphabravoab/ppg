import { connect } from 'react-redux'
import SeriesView from './SeriesView'
import {fetch_series} from './seriesAction'
import {fetchAllEpisodes} from '../Episode/episodeActions'

const mapStateToProps = state => {
    return {
        series: state.series || {},
        episodes: state.episode || {},
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_series:(showId) => {dispatch(fetch_series(showId))},
        fetchAllEpisodes:(showId) => {dispatch(fetchAllEpisodes(showId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesView)