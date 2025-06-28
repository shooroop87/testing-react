import { products} from "../../data";
import { CardsList } from "../../components/cards-list";

export const Home = () => {
  return (
    <section>
      <h1>Каталог игрушек</h1>
      <CardsList cards={products} />
    </section>
  )
};