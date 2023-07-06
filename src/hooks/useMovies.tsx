import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/MovieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesPlaying, setMoviesPlaying] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('now_playing')
        setMoviesPlaying( resp.data.results )
            
        setIsLoading( false );
    }

    useEffect(() => {
        // Now Playing
        getMovies();
    }, [])

  return{
    moviesPlaying,
    isLoading
  }
}
