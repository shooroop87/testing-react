import { TProduct } from "../../types";
import { Card } from "../card";
import s from "./cards-list.module.css";

type TCardsListProps = {
  cards: Array<TProduct>;
};

export const CardsList = ({ cards }: TCardsListProps) => {
  return (
    <section className={s.cards}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};