import { connect } from 'react-redux'
import SeriesView from './SeriesView'
import {fetch_series} from './seriesAction'

const mapStateToProps = state => {
    return {
        series: state.series.show || {},
        episodes: state.series.episodes || {},
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_series:(showId) => {dispatch(fetch_series(showId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesView)