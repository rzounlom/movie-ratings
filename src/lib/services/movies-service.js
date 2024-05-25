const BASE_URL = "https://66523ab6813d78e6d6d4fe50.mockapi.io/movies";

export const getMovies = async () => {
  // Fetching all movies from the API
  const response = await fetch(BASE_URL);
  return response.json();
};
