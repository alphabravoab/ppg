import React, { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import EpisodeButton from './EpisodeButton'
import './seriesView.css'

const Series = ({series, episodes, fetchAllEpisodes, fetch_series}) => {
    const { summary, image, name, genres, id } = series
    useEffect(() => {
        fetch_series(id)
        fetchAllEpisodes(id)
      },[fetch_series, fetchAllEpisodes, id]);
    
    return(
        <div>
           <div className="title">{name}</div> 
           {image && <img className="episodeImage" src={image.original} alt={name} />}
           <div className="summary">{ReactHtmlParser(summary)}</div>
           <div>
               <div><b>genres:</b></div>
               <div className="genreList">{genres && genres.map(genre => <div key={genre} className="genre">{genre}</div>)}</div>
               
           </div>
        <div>
            {Object.values(episodes).map(episode=> <EpisodeButton key={episode.id} episode={episode} />)}
        </div>
        </div>
    )
}


export default Series
