import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const getIngredients = createAsyncThunk(
  "burger-constructor/getIngredients",
  async () => {
    const res = await api.getIngredients();
    return res.ingredients;
  }
);