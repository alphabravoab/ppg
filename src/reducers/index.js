
import { seriesReducer } from '../Components/Series/'
import { episodeReducer } from '../Components/Episode/'
import { searchReducer } from '../Components/Search/'

export default {
  series: seriesReducer,
  episode: episodeReducer,
  search: searchReducer
}