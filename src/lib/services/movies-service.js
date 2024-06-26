const BASE_URL = "https://66523ab6813d78e6d6d4fe50.mockapi.io/movies"; // API Base URL

export const getMovies = async () => {
  // Fetching all movies from the API
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getMovie = async (id) => {
  // Fetching a single movie by its ID
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

export const updateMovie = async (id, updatedMovie) => {
  // Updating a movie by its ID
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMovie), //convert the object to a JSON string
  });
  return response.json();
};

export const createMovie = async (newMovie) => {
  // Creating a new movie
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie), //convert the object to a JSON string
  });
  return response.json();
};

export const deleteMovie = async (id) => {
  // Deleting a movie by its ID
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
