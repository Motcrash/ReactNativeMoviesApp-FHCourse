import { useEffect, useState } from "react"
import { FullMovie } from "../interfaces/MovieInterface"
import movieDB from "../api/movieDB";
import { CreditsResponse } from "../interfaces/creditrInterface";

interface MovieDetails {
    isLoading: boolean, 
    fullMovie?: FullMovie,
    cast: any[],
}

export const useMovieDetails = ( movieID: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    
    const detailsPromise = await movieDB.get<FullMovie>(`/${movieID}`)
    const castPromise = await movieDB.get<CreditsResponse>(`/${movieID}/credits`)

    const [ detailsResponse, castResponse ] = await Promise.all([ detailsPromise, castPromise ]);

    setState({
        isLoading: false,
        fullMovie: detailsResponse.data,
        cast: castResponse.data.cast,
    })

  }

  useEffect(() => {
    getMovieDetails();
  }, [])
  
  return {
    ...state,
    
  }

}
