import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Slider,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Chip,
  Divider,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";
import { fetchProducts } from "../services/productService";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [discountRange, setDiscountRange] = useState([0, 100]);
  const [search, setSearch] = useState("");

  const loadProducts = useCallback(async () => {
    try {
      const response = await fetchProducts({ category: categoryName });
      const productArray = response.data || [];
      setProducts(productArray);
      setFiltered(productArray);
      setLoading(false);
      const uniqueBrands = [...new Set(productArray.map((p) => p.brand))];
      setBrands(uniqueBrands);
      // Set price and discount range
      const prices = productArray.map((p) => p.price);
      const discounts = productArray.map((p) => {
        if (p.mrp && p.price) {
          return Math.round(((p.mrp - p.price) / p.mrp) * 100);
        }
        return 0;
      });
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
      setDiscountRange([Math.min(...discounts), Math.max(...discounts)]);
    } catch (err) {
      setLoading(false);
    }
  }, [categoryName]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Filtering logic
  useEffect(() => {
    let result = [...products];
    // Brand filter
    if (brandFilter.length > 0) {
      result = result.filter((p) => brandFilter.includes(p.brand));
    }
    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    // Discount filter
    result = result.filter((p) => {
      if (p.mrp && p.price) {
        const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
        return discount >= discountRange[0] && discount <= discountRange[1];
      }
      return true;
    });
    // Search filter
    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    setFiltered(result);
  }, [brandFilter, priceRange, discountRange, search, products]);

  if (loading) return <Typography>Loading products...</Typography>;

  // Product Card for grid
  const ProductCard = ({ product }) => {
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
        {product.label && (
          <Chip
            label={product.label}
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
        )}
        {discount > 0 && (
          <Chip
            label={`${discount}% OFF`}
            sx={{
              position: "absolute",
              top: 0,
              left: product.label ? 100 : 0,
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
          image={product.images?.[0] || product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "contain",
            mt: 4,
            mb: 1,
          }}
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
              MRP ₹{product.mrp.toLocaleString()}
            </Typography>
          )}
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1, fontWeight: 700, borderRadius: 2 }}
          >
            + Compare
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mr: 2 }}>
          Best in {categoryName}
        </Typography>
        <Chip label={`${filtered.length} Products`} color="primary" />
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* Filters */}
        <Grid item xs={12} md={3}>
          <Box sx={{ bgcolor: "#f5f7fa", borderRadius: 3, p: 3, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Filters
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* Brand Filter */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Brand</Typography>
            <Box sx={{ mb: 2 }}>
              {brands.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={brandFilter.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setBrandFilter([...brandFilter, brand]);
                        } else {
                          setBrandFilter(
                            brandFilter.filter((b) => b !== brand)
                          );
                        }
                      }}
                    />
                  }
                  label={brand}
                />
              ))}
            </Box>
            {/* Price Filter */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Price</Typography>
            <Slider
              value={priceRange}
              min={Math.min(...products.map((p) => p.price))}
              max={Math.max(...products.map((p) => p.price))}
              onChange={(_, val) => setPriceRange(val)}
              valueLabelDisplay="auto"
              sx={{ color: "#2d55fa", mb: 2 }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography>₹{priceRange[0]}</Typography>
              <Typography>₹{priceRange[1]}</Typography>
            </Box>
            {/* Discount Filter */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Discount</Typography>
            <Slider
              value={discountRange}
              min={Math.min(
                products.map((p) => {
                  if (p.mrp && p.price) {
                    return Math.round(((p.mrp - p.price) / p.mrp) * 100);
                  }
                  return 0;
                })
              )}
              max={Math.max(
                ...products.map((p) => {
                  if (p.mrp && p.price) {
                    return Math.round(((p.mrp - p.price) / p.mrp) * 100);
                  }
                  return 0;
                })
              )}
              onChange={(_, val) => setDiscountRange(val)}
              valueLabelDisplay="auto"
              sx={{ color: "#2d55fa", mb: 2 }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography>{discountRange[0]}%</Typography>
              <Typography>{discountRange[1]}%</Typography>
            </Box>
            {/* Search by Name */}
            <TextField
              label="Search Product"
              variant="outlined"
              size="small"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => {
                setBrandFilter([]);
                setPriceRange([
                  Math.min(...products.map((p) => p.price)),
                  Math.max(...products.map((p) => p.price)),
                ]);
                setDiscountRange([
                  Math.min(
                    products.map((p) => {
                      if (p.mrp && p.price) {
                        return Math.round(((p.mrp - p.price) / p.mrp) * 100);
                      }
                      return 0;
                    })
                  ),
                  Math.max(
                    ...products.map((p) => {
                      if (p.mrp && p.price) {
                        return Math.round(((p.mrp - p.price) / p.mrp) * 100);
                      }
                      return 0;
                    })
                  ),
                ]);
                setSearch("");
              }}
            >
              Reset Filters
            </Button>
          </Box>
        </Grid>
        {/* Product Grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {filtered.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoryProducts;
