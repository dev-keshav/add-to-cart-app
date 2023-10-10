import React from "react";
import { useCart } from "../context/CartProvider";
import { CardActions, Divider } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const AddtoCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <h1 className="outer_div">Add to Cart</h1>
      <CardActions className="details_header addtocart_div">
        <p className="products_details">Product Name</p>
        <p className="products_details">Category</p>
        <p className="products_details">Rating</p>
        <p className="products_details">Prices</p>
      </CardActions>
      <Divider color='white' />
      <div className="addtocart_div">
        <ul>
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              
              <li key={index}>
                <CardActions className="details">
                  <p className="products_details">{item.title}</p>
                  <p className="products_details">{item.category}</p>
                  <p className="products_details">{item.rating.rate}/5.0</p>
                  <p className="products_details">Price: ${item.price}</p>
                  <DeleteForeverIcon
                    className="remove-btn"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                    color="error"
                    variant="outlined"
                  >
                    Hello
                  </DeleteForeverIcon>
                </CardActions>
              </li>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default AddtoCart;
