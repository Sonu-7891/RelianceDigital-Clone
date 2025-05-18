import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import {
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  FavoriteOutlined,
} from "@mui/icons-material";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = async () => {
    try {
      await addItem(product._id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
     <Card
    sx={{
      width: 260,
      minWidth: 260,
      borderRadius: 2,
      boxShadow: 0,
      mx: 1,
      my: 2,
      bgcolor: "#fff",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      cursor: "pointer",
    }}
  >
    <Chip
      label={product.label || "New"}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: product.labelColor || "#0a8f08",
        color: "#fff",
        fontWeight: 600,
        fontSize: 12,
        borderRadius: 0,
        px: 2,
        zIndex: 2,
      }}
      size="small"
    />
    <IconButton
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        color: "#bbb",
        zIndex: 2,
      }}
    >
      <FavoriteOutlined />
    </IconButton>
    <CardMedia
      component="img"
      image={product.image}
      alt={product.name}
      sx={{ width: "100%", height: 200, objectFit: "contain", mt: 4, mb: 1 }}
    />
    <CardContent sx={{ flex: 1, width: "100%", p: 2, pt: 0 }}>
      <Typography
        variant="body2"
        sx={{ fontWeight: 500, color: "#222", mb: 1, minHeight: 48 }}
        noWrap={false}
      >
        {product.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#0a8f08" }}>
          ₹{product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "#0a8f08", fontWeight: 600 }}>
          {product.discount}% OFF
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#888",
          textDecoration: "line-through",
          fontWeight: 500,
          margin: "auto",
        }}
      >
        MRP ₹{product.mrp}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default ProductCard;
