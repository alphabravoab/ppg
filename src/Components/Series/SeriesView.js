import React, { useEffect } from 'react'
import EpisodeButton from './EpisodeButton'

const Series = ({series, episodes, fetch_series}) => {
    useEffect(() => {
        fetch_series(6771)
      },[fetch_series]);

    return(
        <div>
            {series.name}
    {Object.values(episodes).map(x=> <EpisodeButton key={x.id} episode={x} />)}
        </div>
    )
}


export default Series
