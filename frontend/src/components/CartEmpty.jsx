import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 4,
          boxShadow: "0 2px 16px #eee",
          p: 6,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <FontAwesomeIcon
            icon={faBoxOpen}
            style={{ fontSize: 80, color: "#bfc6fa" }}
          />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Empty Cart
        </Typography>
        <Typography sx={{ color: "#888", mb: 4 }}>
          Browse items and add them to your cart
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2d55fa",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
            borderRadius: 4,
            px: 4,
            py: 1.5,
            textTransform: "none",
          }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </Box>
    </Box>
  );
};

export default CartEmpty;
