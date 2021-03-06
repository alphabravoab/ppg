import React, { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SelectionButton from '../SelectionButton'
import search from '../../images/search.png'
import './seriesView.css'

const Series = ({series, episodes, fetchAllEpisodes, fetchSeries}) => {
    const { summary, image, name, genres } = series
    const { id } = useParams()
    useEffect(() => {
            fetchSeries(id)
            fetchAllEpisodes(id)
      },[fetchSeries, fetchAllEpisodes, id]);
    
    return(
        <div>
           <div className="title">
               <div>{name}</div>
               <div><Link to={"/search"}><img className="searchButton" src={search} alt="search" /></Link></div>
           </div> 
           {image && <img className="episodeImage" src={image.original} alt={name} />}
           <div className="summary">{ReactHtmlParser(summary)}</div>
           <div>
               <div><b>genres:</b></div>
               <div className="genreList">{genres && genres.map(genre => <div key={genre} className="genre">{genre}</div>)}</div>
               
           </div>
        <div className="episodes">
            {Object.values(episodes).map(episode=> <SelectionButton key={episode.id} episode={episode} link={"/episode/"} />)}
        </div>
        </div>
    )
}


export default Series
