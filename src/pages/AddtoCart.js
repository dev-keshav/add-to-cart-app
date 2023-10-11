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
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <h1 className="outer_div">Add to Cart</h1>
      <div className="addtocart_div">
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        <TableContainer sx={{ width: 700 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Rating</StyledTableCell>
                <StyledTableCell align="right">Prices</StyledTableCell>
                <StyledTableCell align="right">Remove</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                {cartItems.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.category}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.rating.rate}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.price}</StyledTableCell>
                    <StyledTableCell align="right">
                      <DeleteForeverIcon
                        className="remove-btn"
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                        color="error"
                        variant="outlined"
                      >
                      </DeleteForeverIcon>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

export default AddtoCart;
