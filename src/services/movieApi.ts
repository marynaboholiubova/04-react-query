import axios from 'axios';
import { MoviesResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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
    },
  );

  return response.data;
};