import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const {id} = useParams()

  return (
    <>
    Movie details {id}
      
    </>
  )
}

export default MovieDetails
