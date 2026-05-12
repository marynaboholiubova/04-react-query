import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface MoviesResponse {
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
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  );

  return response.data;
};