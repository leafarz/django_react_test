import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components//Carousel";
import BodyNav from "./components/BodyNav";
import GridRow from "./components/GridRow";
import Page from "./components/Page";
import Footer from "./components/Footer";

import Product from "./components/Product";
import Checkout from "./components/Checkout";

const data = [
  {
    url:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
    category: "Shirt",
    label: "Denim shirt",
    tag: "danger",
    tagDisplay: "NEW",
    price: "120"
  },
  {
    url:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
    category: "Sport Wear",
    label: "Sweatshirt",
    tag: "",
    price: "139"
  },
  {
    url:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
    category: "Sport Wear",
    label: "Grey blouse",
    tag: "primary",
    tagDisplay: "bestseller",
    price: "139"
  },
  {
    url:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    category: "Outwear",
    label: "Black jacket",
    price: "219"
  }
];

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Carousel />

      <main>
        <div className="container">
          <BodyNav />

          <section className="text-center mb-4">
            <GridRow data={data} />
          </section>

          <Page />
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
