import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseServer from "../configs/axiosConfig";

export const getOneHero = createAsyncThunk(
  "loadHero/getOneHero",
  async (param) => {
    const { data } = await baseServer.get(`/api/heroes/${param}`);
    return data;
  }
);

const initialState = {
  hero: [],
  status: "loading",
};

const heroSlice = createSlice({
  name: "loadHero",
  initialState,
  extraReducers: {
    [getOneHero.pending]: (state, action) => {
      state.hero = [];
      state.status = "loading";
    },
    [getOneHero.fulfilled]: (state, action) => {
      state.hero = action.payload;
      state.status = "loaded";
    },
    [getOneHero.rejected]: (state) => {
      state.status = "error ";
    },
  },
});

export const oneHeroReducer = heroSlice.reducer;
