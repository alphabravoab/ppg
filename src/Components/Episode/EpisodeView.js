import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Episode = ({episode, fetch_episode}) => {
    const { id } = useParams()
    useEffect(() => {  
        fetch_episode(id)
      },[fetch_episode, id]);
    const {airdate, airstamp, airtime,image, name, season, number, runtime, summary, url} = episode
    return(
        <div>
            {name}
            {image && <img src={image.original} alt={name} />}
        </div>
    )
}

export default Episode
