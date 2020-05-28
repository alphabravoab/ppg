import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import BackButton from './BackButton'
import './episodeView.css'


const Episode = ({episode, fetch_episode}) => {
    const { id } = useParams()
    useEffect(() => {  
        fetch_episode(id)
      },[fetch_episode, id]);
    const {image, name, season, summary} = episode
    return(
        <div className="episodeBody">
            <div className="episodeHeader">
                <div className="headerBody">
                    <Link to={"/"}><button className="backButton"> <BackButton /></button></Link>
                    <div>Title: {name}</div>
                    <div>season: {season}</div>
                </div>
            </div>
            {image && <img className="episodeImage" src={image.original} alt={name} />}
            <div className="summary">{ReactHtmlParser(summary)}</div>
        </div>
    )
}

export default Episode
