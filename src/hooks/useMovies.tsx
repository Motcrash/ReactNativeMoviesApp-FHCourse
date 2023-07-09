import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/MovieInterface';

interface MoviesStateInterface {
  nowPlaying: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ moviesState, setMoviesState] = useState<MoviesStateInterface>({
      nowPlaying: [],
      topRated: [],
      upcoming: [],
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        const resps = await Promise.all([ nowPlayingPromise, topRatedPromise, upcomingPromise]);

        setMoviesState({
          nowPlaying: resps[0].data.results,
          topRated: resps[1].data.results,
          upcoming: resps[2].data.results,
        });
            
        setIsLoading( false );
    }

    useEffect(() => {
        // Now Playing
        getMovies();
    }, [])

  return{
    ...moviesState,
    isLoading,
  }
}
