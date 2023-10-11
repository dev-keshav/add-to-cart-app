import React from "react";
import { useCart } from "../context/CartProvider";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Rating from "@mui/material/Rating";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AddtoCart = () => {
  const { cartItems, removeFromCart, totalCartPrice } = useCart();
  // console.log(removeFromCart)

  return (
    <>
      <h1 className="outer_div">Add to Cart</h1>
      <div className="addtocart_div">
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          <Paper>
            <TableContainer sx={{ minWidth: 300, maxWidth: 900, minHeight: 100, maxHeight: 500, backgroundColor: 'black', color: 'white' }} component={Paper}>
              <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Product Name</StyledTableCell>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Rating</StyledTableCell>
                    <StyledTableCell align="right">Prices</StyledTableCell>
                    <StyledTableCell align="right">Remove</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ overflow: "scroll" }}>
                  {cartItems.map((item) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell sx={{ color: '#9933ff'}} component="th" scope="row">
                        {item.title}
                      </StyledTableCell>
                      <StyledTableCell sx={{ color: '#8080ff'}} align="center">
                        {item.category}
                      </StyledTableCell>
                      <StyledTableCell sx={{ backgroundColor: '#1976D2'}} align="center">
                        <Rating
                          name="read-only"
                          value={item.rating.rate}
                          readOnly
                        />
                      </StyledTableCell>
                      <StyledTableCell sx={{ color: '#8080ff'}} align="right">
                        {item.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <DeleteForeverIcon
                          className="remove-btn"
                          size="small"
                          onClick={() => removeFromCart(item.id)}
                          color="error"
                          variant="outlined"
                        ></DeleteForeverIcon>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Total </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="right">{totalCartPrice}</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Paper>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

export default AddtoCart;
