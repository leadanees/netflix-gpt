import React from 'react'
import GptSearchBar from './GptSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="background_image"
        />
      </div>
      <GptSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
