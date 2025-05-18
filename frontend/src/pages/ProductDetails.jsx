import { useState, useEffect, useMemo, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  Divider,
  Tab,
  Tabs,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { fetchProductById } from "../services/productService";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const dummyData = {
  name: "NVY 109 cm (43 inch) QLED Smart TV, NVQ43SFR1, Black",
  price: 14999,
  mrp: 45999,
  images: [
    "https://rukminim2.flixcart.com/image/416/416/xif0q/television/2/0/7/-original-imagwz2zqzqzqzqz.jpeg",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/television/2/0/7/-original-imagwz2zqzqzqzqz.jpeg",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/television/2/0/7/-original-imagwz2zqzqzqzqz.jpeg",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/television/2/0/7/-original-imagwz2zqzqzqzqz.jpeg",
  ],
  rating: 4.8,
  numReviews: 5,
  stock: 10,
  description: "A QLED TV with stunning visuals and smart features.",
  brand: "NVY",
  category: "Television",
  offers: [
    { title: "EMI Offers", desc: "EMI starts from ₹914.66/month" },
    {
      title: "Payment Page Offers",
      desc: "10% Instant Discount with J&K Credit Card EMI",
    },
  ],
  delivery: {
    pincode: "302033",
    freeDelivery: true,
    deliveryDate: "20th May",
    cod: false,
  },
  installation: [
    "Installation location feasibility check",
    "Set-up TV connections to Set-top box",
    "TV demonstration",
  ],
  specifications: {
    "Display Size": "43 inch",
    Resolution: "3840 x 2160",
    "Smart TV": "Yes",
    HDMI: "3",
    USB: "2",
  },
  reviews: [
    {
      user: "sushil kumar",
      city: "Navi Mumbai",
      rating: 5,
      text: "Great TV!",
      date: "20/4/2025",
    },
    {
      user: "Prashanth H",
      city: "Bangalore",
      rating: 5,
      text: "Value for money.",
      date: "18/4/2025",
    },
  ],
};

const tabLabels = [
  "Product Info",
  "Delivery Related",
  "Key Features",
  "Description",
  "Specifications",
  "Customer Reviews",
];

const ProductDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(1); // Default to Delivery Related
  const [selectedImg, setSelectedImg] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [addCartLoading, setAddCartLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  // Merge fetched data with dummy data
  const merged = useMemo(() => {
    if (!product) return dummyData;
    return {
      ...dummyData,
      ...product,
      images:
        product.images && product.images.length > 0
          ? product.images
          : dummyData.images,
      offers:
        product.offers && product.offers.length > 0
          ? product.offers
          : dummyData.offers,
      delivery: product.delivery || dummyData.delivery,
      installation: product.installation || dummyData.installation,
      specifications: product.specifications || dummyData.specifications,
      reviews:
        product.reviews && product.reviews.length > 0
          ? product.reviews
          : dummyData.reviews,
    };
  }, [product]);

  // Sticky header show/hide logic
  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY for main page scroll
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.1;
      setShowSticky(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add to cart handler
  const handleAddToCart = async () => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
      return;
    }
    setAddCartLoading(true);
    setError("");
    setSuccess("");
    try {
      await addItem(merged._id || id, 1);
      console.log(id);
      setSuccess("Product added to cart successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to add product to cart");
    } finally {
      setAddCartLoading(false);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 2, position: "relative" }}>
      {/* Sticky Header (only visible after scroll) */}
      {!showSticky && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 1200,
            bgcolor: "#f5f7fa",
            borderRadius: 0,
            boxShadow: 2,
            px: { xs: 1, md: 6 },
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {merged.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800 }}>
              ₹{merged.price?.toLocaleString()}
            </Typography>
            <Button
              variant="outlined"
              sx={{ fontWeight: 700, mr: 1 }}
              onClick={handleAddToCart}
              disabled={addCartLoading}
            >
              Add to Cart
            </Button>
            <Button variant="contained" sx={{ fontWeight: 700 }}>
              Buy Now
            </Button>
          </Box>
        </Box>
      )}
      {/* Main Content */}
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Left: Image Gallery */}
        <Grid xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: "transparent" }}>
              <img
                src={merged.images[selectedImg]}
                alt={merged.name}
                style={{
                  maxWidth: 400,
                  maxHeight: 350,
                  objectFit: "contain",
                  borderRadius: 8,
                }}
              />
            </Paper>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              {merged.images.map((img, idx) => (
                <Box
                  key={img + idx}
                  onClick={() => setSelectedImg(idx)}
                  sx={{
                    border:
                      idx === selectedImg
                        ? `2px solid ${theme.palette.primary.main}`
                        : "2px solid #eee",
                    borderRadius: 2,
                    p: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={img}
                    alt={merged.name}
                    style={{ width: 60, height: 40, objectFit: "contain" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        {/* Right: Details (scrollable, hide scrollbar) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxHeight: "80vh",
              overflowY: "auto",
              pr: 2,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {/* Tabs */}
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}
            >
              {tabLabels.map((label, idx) => (
                <Tab
                  key={label}
                  label={label}
                  value={idx}
                  sx={{ fontWeight: 700 }}
                />
              ))}
            </Tabs>
            {/* Tab Panels */}
            {tab === 0 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Product Info
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body1">{merged.description}</Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, fontWeight: 700 }}
                  onClick={handleAddToCart}
                  disabled={addCartLoading}
                >
                  Add to Cart
                </Button>
                <Box sx={{ minHeight: 32 }}>
                  {success && (
                    <Typography color="success.main" sx={{ mt: 1 }}>
                      {success}
                    </Typography>
                  )}
                  {error && (
                    <Typography color="error.main" sx={{ mt: 1 }}>
                      {error}
                    </Typography>
                  )}
                </Box>
              </Box>
            )}
            {tab === 1 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Delivery Related
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
                >
                  <Chip label={merged.delivery.pincode} />
                  <Typography color="success.main" fontWeight={600}>
                    FREE Delivery by {merged.delivery.deliveryDate}
                  </Typography>
                  <Typography color="error" fontWeight={600}>
                    {merged.delivery.cod
                      ? "COD Available"
                      : "COD Not Available"}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                  Offers available
                </Typography>
                <Grid container spacing={2}>
                  {merged.offers.map((offer, idx) => (
                    <Grid item xs={12} sm={6} key={offer.title + idx}>
                      <Paper sx={{ p: 2, bgcolor: "#f5f7fa" }}>
                        <Typography fontWeight={700}>{offer.title}</Typography>
                        <Typography>{offer.desc}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                  Installation & Protection Service
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#f5f7fa" }}>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {merged.installation.map((item, idx) => (
                      <li key={item + idx}>
                        <Typography>{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Box>
            )}
            {tab === 2 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Key Features
                </Typography>
                <Divider sx={{ my: 1 }} />
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {(
                    merged.features || [
                      "QLED Display",
                      "Smart TV",
                      "Dolby Audio",
                    ]
                  ).map((f, idx) => (
                    <li key={f + idx}>
                      <Typography>{f}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
            {tab === 3 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Description
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body1">{merged.description}</Typography>
              </Box>
            )}
            {tab === 4 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Specifications
                </Typography>
                <Divider sx={{ my: 1 }} />
                <List>
                  {Object.entries(merged.specifications).map(([k, v]) => (
                    <ListItem key={k}>
                      <ListItemText primary={k} secondary={v} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {tab === 5 && (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Customer Reviews
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Rating value={merged.rating} precision={0.1} readOnly />
                  <Typography variant="h6" fontWeight={700}>
                    {merged.rating} / 5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ({merged.numReviews} Ratings)
                  </Typography>
                </Box>
                {merged.reviews.map((r, idx) => (
                  <Paper key={r.user + idx} sx={{ p: 2, mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating value={r.rating} readOnly size="small" />
                      <Typography fontWeight={700}>{r.user}</Typography>
                      <Typography color="text.secondary">{r.city}</Typography>
                      <Typography color="text.secondary" sx={{ ml: "auto" }}>
                        {r.date}
                      </Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>{r.text}</Typography>
                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
