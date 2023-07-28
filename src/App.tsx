import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import Banner from "./components/Home/Banner/Banner";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppContext value={undefined}>
        <Header />
        <Banner />
        <Router />
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
