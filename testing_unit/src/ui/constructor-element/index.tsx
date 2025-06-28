import s from "./constructor-element.module.css";
import { CurrencyIcon } from "../currency-icon";
import { DragIcon } from "../drag-icon";
import { useRef } from "react";
import { TIngredient } from "../../types";
import { useDrag, useDrop } from "react-dnd";
import { sortIngredients } from "../../services/burger-constructor/slice";
import { useDispatch } from "../../services/store";

type TConstructorElementProps = {
  ingredient: TIngredient;
  index: number;
};

export const ConstructorElement = ({ingredient, index}: TConstructorElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const [, drop] = useDrop<
    {
      ingredient: TIngredient,
      index: number;
    }
  >({
    accept: "sort",
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();

      if (!hoverBoundingRect || !clientOffset) {
        return;
      }

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(sortIngredients({
        from: dragIndex,
        to: hoverIndex
      }));

      item.index = hoverIndex;
    }
  })

  const [{isDragging}, drag] = useDrag({
    type: "sort",
    item: () => {
      return { ingredient, index};
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div 
      className={s.element_container}
      ref={ref}
      style={{opacity}}
    >
      <DragIcon />
      <div className={s.constructor_element}>
        <span className={s.constructor_element_row}>
          <img
            className={s.constructor_element_image}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <span className={s.constructor_element_text}>{ingredient.name}</span>
          <span className={s.constructor_element_price}>
            {ingredient.price}
            <CurrencyIcon />
          </span>
        </span>
      </div>
    </div>
  );
};