import { useParams } from "react-router-dom";
import { products } from "../../data";
import s from "./product.module.css";

export const Product = () => {
  const { id } = useParams();

  const product = products.find(p => p.id === id)!;

  return (
    <article className={s.product}>
      <h1>{product?.title}</h1>
      <img className={s.image} alt={product.alt} src={product.src} />
      <p className={s.description}>{product.description}</p>
    </article>
  )
}