import { TIngredientsResponse } from "../types";
import { data } from "../data";

const getIngredients = (): Promise<TIngredientsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ingredients: data,
      });
    }, 2000);
  });
};

export const api = {
  getIngredients,
};