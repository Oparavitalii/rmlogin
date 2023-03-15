import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { composeFilters } from "../Helpers/filterApi";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "course/get",
  async (_, { rejectWithValue }) => {
    const url = "https://rickandmortyapi.com/api/character";

    try {
      let response = await axios.get(url);
      let data = await composeFilters(response.data.results);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  characters: [],
  query: "",
  nameUser: "",
};

const apiSlice = createSlice({
  name: "rickandmorty",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setNameUser: (state, action) => { 
      state.nameUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setQuery,setNameUser } = apiSlice.actions;

export default apiSlice.reducer;
