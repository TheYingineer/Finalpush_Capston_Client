import { useState, useEffect } from "react";
import { getAll } from "./getAll";
import "./App.css";
import { ProductItem } from "./ProductItem";
import { CreateProductForm } from "./CreateProductForm";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchCustomerData = async () => {
  //     const data = await fetch(
  //       "https://quote-generator-olive-seven.vercel.app/customers"
  //     );

  //     const json = await data.json();

  //     setCustomers(json);
  //   };

  useEffect(() => {
    const fetchCustomerData = async () => {
      const data = await fetch(
        "https://finalpush-capstone-c88q4vol9-theyingineer.vercel.app/customers"
      );

      const json = await data.json();

      setCustomers(json);
    };

    const fetchProductData = async () => {
      const data = await fetch(
        "https://finalpush-capstone-c88q4vol9-theyingineer.vercel.app/products"
      );

      const json = await data.json();

      setProducts(json);
    };

    fetchProductData();
    fetchCustomerData();
  }, []);

  useEffect(() => {
    console.log({ customers });
  }, [customers]);

  useEffect(() => {
    console.log({ products });
  }, [products]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Router />
        <CreateProductForm />
        <getAll items={products} component={ProductItem} />
      </BrowserRouter>
    </div>
  );
}

export default App;
