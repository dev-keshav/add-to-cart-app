import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Allproducts } from "../database/AllProducts";
import Grid from "@mui/material/Grid";
import { useCart } from "../context/CartProvider";

export default function SingleProduct() {
  // const [cartItems, setCartItems] = React.useState([]);

  // const addtocart = (product) => {
  //   const updatedcart = [...cartItems, product];
  //   setCartItems(updatedcart);

  //   console.log(updatedcart);
  // };

  const { addToCart } = useCart();

  return (
    <>
      <Grid sx={{ pl: "150px" }} container spacing={1}>
        {Allproducts.map((cart, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 245, m: 4, backgroundColor: "#5398DD" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cart.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cart.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cart.category}
              </Typography>
              <Typography
                sx={{ zIndex: -1 }}
                variant="h4"
                color="text.secondary"
              >
                ${cart.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={() => addToCart(cart)}
              >
                Add to cart
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
}
