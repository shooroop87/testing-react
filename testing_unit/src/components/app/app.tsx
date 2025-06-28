import { data } from "../../data";
import { ConstructorElement } from "../../ui/constructor-element";
import s from "./app.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "../../services/store";
import {
  withoutBuns,
  areIngredientsLoading,
} from "../../services/burger-constructor/slice";
import { useEffect } from "react";
import { getIngredients } from "../../services/burger-constructor/actions";

export const App = () => {
  const ingredients = useSelector(withoutBuns);
  const isLoading = useSelector(areIngredientsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  if (isLoading && ingredients.length == 0) {
    return <p className={s.loading}>Загрузка...</p>;
  }

  return (
    <div className={clsx(s.burger_constructor, "custom-scroll")}>
      {ingredients.map((item, index) => (
        <ConstructorElement
          key={item._id}
          ingredient={item}
          index={index}
        />
      ))}
    </div>
  );
};