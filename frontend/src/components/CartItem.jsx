import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const CartItem = ({ item, onQuantityChange, onRemove, onMoveToWishlist }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: "0 2px 8px #eee",
        p: 3,
        mb: 3,
        gap: 3,
      }}
    >
      <Box>
        <img
          src={item.product.images}
          alt={item.product.name}
          style={{
            width: 120,
            height: 120,
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {item.product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mr: 2 }}>
            ₹{item.product.price.toLocaleString()}
          </Typography>
          <Typography sx={{ color: "green", fontWeight: 700, mr: 2 }}>
            {item.product.discount}% OFF
          </Typography>
          <Typography
            sx={{
              color: "#888",
              textDecoration: "line-through",
              fontWeight: 500,
            }}
          >
            MRP ₹{item.product.mrp}
          </Typography>
        </Box>
        <Typography sx={{ color: "#4caf50", fontWeight: 600, mb: 1 }}>
          FREE Delivery by 19th May
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <IconButton
            onClick={() => onQuantityChange(item._id, item.quantity - 1)}
          >
            <Remove />
          </IconButton>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            {item.quantity}
          </Typography>
          <IconButton
            onClick={() => onQuantityChange(item._id, item.quantity + 1)}
          >
            <Add />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            variant="outlined"
            sx={{ borderRadius: 8, fontWeight: 700 }}
            onClick={() => onMoveToWishlist(item._id)}
          >
            Move to Wishlist
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: 8, fontWeight: 700 }}
            color="error"
            onClick={() => onRemove(item._id)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
