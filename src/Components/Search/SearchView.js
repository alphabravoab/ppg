import React from 'react'
import { useForm } from 'react-hook-form'
import SelectionButton from '../SelectionButton'

const SearchView = ({searchResults, searchShows}) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const searchTerm = data.showName.replace(/ /g,"%20")
        searchShows(searchTerm)
    }
    return(
        <div>
            Search for a show:
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="showName" ref={register} />
                <button type="submit">Search</button>
                <div>
                    {searchResults && searchResults.map(episode=> <SelectionButton key={episode.id} episode={episode.show} link={"/series/"} />)}
                </div>
            </form>
        </div>
    )
}

export default SearchView