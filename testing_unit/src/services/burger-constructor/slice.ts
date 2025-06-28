import { TIngredient, TMoveInfo } from "../../types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "./actions";

type TBurgerConstructorState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
};

export const initialState: TBurgerConstructorState = {
  ingredients: [],
  isLoading: false,
};

const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    sortIngredients: (state, action: PayloadAction<TMoveInfo>) => {
      state.ingredients.splice(
        action.payload.to,
        0/*,
        state.ingredients.splice(action.payload.from, 1)[0]*/
      );
    }
  },
  selectors: {
    withoutBuns: (state) =>
      state.ingredients.filter((item) => item.type !== "bun"),
    allIngredients: (state) => state.ingredients,  
    areIngredientsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      });
  },
});

export const reducer = burgerConstructorSlice.reducer;
export const { withoutBuns, areIngredientsLoading, allIngredients } =
  burgerConstructorSlice.selectors;
export const { sortIngredients } = burgerConstructorSlice.actions;