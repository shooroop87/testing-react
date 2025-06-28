export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
};

export type TIngredientsResponse = {
    ingredients: Array<TIngredient>;
}

export type TMoveInfo = {
  from: number;
  to: number;
}