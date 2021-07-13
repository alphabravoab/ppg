import React  from 'react'
import { Link } from 'react-router-dom'
import './SelectionButtonView.css'

const SelectionButtonView = ({episode, link}) => {
    return(
        <Link key={episode.id} to={link + episode.id}>
            <button className="episodeButton">
                {episode.image && <img src={episode.image.medium} alt={episode.name} />}
                {!episode.image && <>{episode.name}</>}
            </button>
        </Link>         
    )
}

export default SelectionButtonView
