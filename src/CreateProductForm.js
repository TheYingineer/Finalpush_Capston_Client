import React, { useReducer } from "react";

export const CreateUserForm = () => {
  const initialFormState = {
    product_name: "",
    product_description: "",
    price: "",
  };

  const createProductReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_TEXT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(createProductReducer, initialFormState);

  // useEffect(() => {
  //   console.log({ initialFormState });
  // }, [initialFormState]);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      payload: e.target.value,
      type: "HANDLE_INPUT_TEXT",
    });
  };

  const handleSubmit = () => {
    console.log(state);
    fetch("https://finalpush-capstone-c88q4vol9-theyingineer.vercel.app/products", {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Tokene",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  return (
    <form>
      <label for="Product_Name">
        Product Name:
        <input type="text" name="product_name" onChange={handleChange} />
      </label>

      <label for="Product_Description">
        Product Description:
        <input type="text" name="product_description" onChange={handleChange} />
      </label>

      <label for="Price">
        Price:
        <input type="text" name="price" onChange={handleChange} />
      </label>


      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
      
    </form>
  );
};
