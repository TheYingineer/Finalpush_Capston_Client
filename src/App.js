import { useState, useEffect } from "react";
import { getAll } from "./getAll";
import "./App.css";
import { CustomerItem } from "./CustomerItem";
import { CreateUserForm } from "./CreateUserForm";

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
      const data = await fetch("http://localhost:5000/customers");

      const json = await data.json();

      setCustomers(json);
    };

    const fetchProductData = async () => {
      const data = await fetch(
        "https://finalpush-capstone.vercel.app/products"
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
      <CreateUserForm />
      <getAll items={customers} component={CustomerItem} />
    </div>
  );
}

export default App;
