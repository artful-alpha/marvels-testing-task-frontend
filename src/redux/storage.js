import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./heroesSlice";
import { oneHeroReducer } from "./oneHeroSlice";
export const storage = configureStore({
  reducer: { heroesReducer, oneHeroReducer },
});
