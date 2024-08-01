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
  allMovies: [],
  loading: false,
  error: null,
  moviePageMovies: [],
  tvShows: [],
  movieSearch: "",
  filteredMovies: [],
  singleMovie: {
    movie: null,
    loading: false,
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilteredMovies(state, action) {
      if (state.movieSearch === "") {
        state.filteredMovies = state.movies;
        return;
      }

      state.filteredMovies = state.allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(state.movieSearch.toLowerCase())
      );
    },
    setMovieSearch(state, action) {
      state.movieSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesAsync.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getMoviesAsync.fulfilled, (state, action) => {
      state.allMovies = action.payload;
      state.filteredMovies = action.payload;
      state.moviePageMovies = action.payload.filter(
        (movie) => movie.type === "movie"
      );
      state.tvShows = action.payload.filter(
        (movie) => movie.type === "tv series"
      );
      state.allMovies.loading = false;
    });

    builder.addCase(getMoviesAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFilteredMovies, setMovieSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
