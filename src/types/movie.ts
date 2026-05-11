import axios from 'axios';
import type { Movie } from '../types/movie';

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface FetchMoviesParams {
  query: string;
  page: number;
}

export const fetchMovies = async ({
  query,
  page,
}: FetchMoviesParams): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
};


