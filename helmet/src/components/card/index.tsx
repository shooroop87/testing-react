import { Link } from "react-router-dom";
import { TProduct } from "../../types";
import s from "./card.module.css";

type TCardProps = {
  card: TProduct;
};

export const Card = ({ card }: TCardProps) => {
  return (
    <Link to={`/product/${card.id}`}>
      <article className={s.card}>
        <img className={s.image} alt={card.alt} src={card.src} />
        {card.title && <p className={s.title}>{card.title}</p>}
        <p className={s.description}>{card.description}</p>
      </article>
    </Link>
  );
};