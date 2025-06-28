
import { Route, Routes } from "react-router-dom";
import s from "./app.module.css";
import { Home } from "../pages/home/home";
import { Product } from "../pages/product/product";

export const App = () => {
  return (
    <div className={s.app}>
      <main className={s.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
    </div>
  );
};