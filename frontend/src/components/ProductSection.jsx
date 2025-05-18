import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
} from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";

const ProductCard = memo(({ product }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://via.placeholder.com/200x200?text=No+Image";

  // Calculate discount percentage
  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
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
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Chip
        label={product.label || "Best seller"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: product.labelColor || "#0074c2",
          color: "#fff",
          fontWeight: 600,
          fontSize: 12,
          borderRadius: 0,
          px: 2,
          zIndex: 2,
        }}
        size="small"
      />
      {discount > 0 && (
        <Chip
          label={`${discount}% OFF`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "#0074c2",
            color: "#fff",
            fontWeight: 600,
            fontSize: 12,
            borderRadius: 0,
            px: 2,
            zIndex: 2,
          }}
          size="small"
        />
      )}
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
        image={
          imageError
            ? fallbackImage
            : product.images?.[0] || product.image || fallbackImage
        }
        alt={product.name}
        onError={() => setImageError(true)}
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
            ₹{product.price.toLocaleString()}
          </Typography>
          {discount > 0 && (
            <Typography
              variant="body2"
              sx={{ color: "#0a8f08", fontWeight: 600 }}
            >
              {discount}% OFF
            </Typography>
          )}
        </Box>
        {product.mrp && (
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
        )}
      </CardContent>
    </Card>
  );
});

const ProductSection = memo(
  ({ title, subtitle, products, bgcolor = "#c3e3f0" }) => {
    const navigate = useNavigate();
    // Try to infer category name from the first product
    const categoryName =
      products &&
      products.length > 0 &&
      products[0].category &&
      (typeof products[0].category === "string"
        ? products[0].category
        : products[0].category.name);
    return (
      <Box
        sx={{
          bgcolor,
          borderRadius: 5,
          px: { xs: 1, md: 4 },
          py: { xs: 2, md: 4 },
          my: 4,
          mx: 2,
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            display: "none",
          },
          maxWidth: 1800,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#222", fontWeight: 500 }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Button
            sx={{
              color: "#0026b3",
              fontWeight: 700,
              fontSize: 18,
              textTransform: "none",
              px: 2,
              borderRadius: 2,
              background: "none",
              boxShadow: "none",
              ":hover": { background: "#e3f0ff" },
            }}
            endIcon={
              <span style={{ fontSize: 22, fontWeight: 700 }}>&#8250;</span>
            }
            onClick={() =>
              categoryName &&
              navigate(`/category/${encodeURIComponent(categoryName)}`)
            }
            disabled={!categoryName}
          >
            View All
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 0,
            pb: 1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </Box>
      </Box>
    );
  }
);

export default ProductSection;
