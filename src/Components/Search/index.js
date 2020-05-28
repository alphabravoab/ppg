import SearchView from './SearchView'
import { connect } from 'react-redux'
import { searchShows } from './searchActions'

const mapStateToProps = state => {
    return {
        searchResults: state.search || {},
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchShows:(searchResults) => {dispatch(searchShows(searchResults))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchView)