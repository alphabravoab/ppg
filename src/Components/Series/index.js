import { connect } from 'react-redux'
import SeriesView from './SeriesView'
import { fetchSeries } from './seriesAction'
import { fetchAllEpisodes } from '../Episode'
import seriesReducer from './seriesReducer'

const mapStateToProps = state => {
    return {
        series: state.series || {},
        episodes: state.episode || {},
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSeries:(showId) => {dispatch(fetchSeries(showId))},
        fetchAllEpisodes:(showId) => {dispatch(fetchAllEpisodes(showId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesView)
export { fetchSeries, seriesReducer }
