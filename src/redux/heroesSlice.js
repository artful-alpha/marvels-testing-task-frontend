import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseServer from "../configs/axiosConfig";
export const getAllHeroes = createAsyncThunk(
  "loadHero/getAllHeroes",
  async () => {
    const { data } = await baseServer.get("/api/heroes");

    return data;
  }
);

const initialState = {
  heroes: [],
  status: "loading",
};

const heroesSlice = createSlice({
  name: "loadHero",
  initialState,
  extraReducers: {
    [getAllHeroes.pending]: (state, action) => {
      state.heroes = [];
      state.status = "loading";
    },
    [getAllHeroes.fulfilled]: (state, action) => {
      state.heroes = action.payload;
      state.status = "loaded";
    },
    [getAllHeroes.rejected]: (state) => {
      state.status = "error ";
    },
  },
});

export const heroesReducer = heroesSlice.reducer;
