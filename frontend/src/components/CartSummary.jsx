import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";

const CartSummary = ({
  subtotal,
  discount,
  promotion,
  delivery,
  total,
  itemCount,
  onCheckout,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: "0 2px 8px #eee",
        p: 4,
        minWidth: 320,
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Payment Summary
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Price ({itemCount} items)</Typography>
          <Typography>₹{subtotal.toLocaleString()}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Discount</Typography>
          <Typography sx={{ color: "green" }}>
            -₹{discount.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Promotion</Typography>
          <Typography sx={{ color: "green" }}>
            -₹{promotion.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Delivery Charges</Typography>
          <Typography>₹{delivery.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">₹{total.toLocaleString()}</Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#2d55fa",
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          borderRadius: 4,
          py: 1.5,
          textTransform: "none",
        }}
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
