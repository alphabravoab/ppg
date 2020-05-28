import React  from 'react'
import { Link } from 'react-router-dom'
import './episodeViewButton.css'

const EpisodeButtonView = ({episode}) => {
    return(
            <Link key={episode.id} to={"/episode/"+ episode.id}><button className="episodeButton"><div className="buttonText">{episode.name}</div></button></Link>
           
    )
}

export default EpisodeButtonView