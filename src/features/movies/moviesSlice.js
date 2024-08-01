import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getMovies } from "../../lib/services/movies-service";

export const getMoviesAsync = createAsyncThunk(
  "movies/getAllMoveies",
  async () => {
    const movies = await getMovies();

    return movies;
  }
);

const initialState = {
  allMovies: {
    movies: [],
    loading: false,
    error: null,
  },
  movieSearch: "",
  filteredMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilteredMovies(state, action) {
      if (state.movieSearch === "") {
        state.filteredMovies = state.allMovies.movies;
        return;
      }

      state.filteredMovies = state.allMovies.movies.filter((movie) =>
        movie.title.toLowerCase().includes(state.movieSearch.toLowerCase())
      );
    },
    setMovieSearch(state, action) {
      state.movieSearch = action.payload;
      setFilteredMovies(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesAsync.pending, (state, action) => {
      state.allMovies.loading = true;
    });

    builder.addCase(getMoviesAsync.fulfilled, (state, action) => {
      state.allMovies.movies = action.payload;
      state.filteredMovies = action.payload;
      state.allMovies.loading = false;
    });

    builder.addCase(getMoviesAsync.rejected, (state, action) => {
      state.allMovies.loading = false;
      state.allMovies.error = action.error.message;
    });
  },
});

export const { setFilteredMovies, setMovieSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
