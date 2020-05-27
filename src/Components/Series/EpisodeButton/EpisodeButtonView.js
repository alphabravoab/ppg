import React  from 'react'
import { Link } from 'react-router-dom'
import './episodeViewButton.css'

const EpisodeButtonView = ({episode}) => {
    return(
            <Link to={"/episode/"+ episode.id}><button type="submit" className="episodeButton">{episode.name}</button></Link>
           
    )
}

export default EpisodeButtonView