import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Grid, Alert } from "@mui/material";
import CartEmpty from "../components/CartEmpty";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import {
  getCart,
  updateCartItem,
  removeFromCart,
} from "../services/cartService";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch cart on mount
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await getCart();
      console.log(response);
      const cartData = response.data?.items || [];
      setCart(cartData);
    } catch (err) {
      setError("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await updateCartItem(itemId, newQuantity);
      fetchCart();
    } catch (err) {
      setError("Failed to update quantity");
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeFromCart(itemId);
      fetchCart();
    } catch (err) {
      setError("Failed to remove item");
    }
  };

  const handleMoveToWishlist = (itemId) => {
    // Placeholder for wishlist logic
    alert("Move to Wishlist clicked for item " + itemId);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) {
    return <Typography>Loading cart...</Typography>;
  }

  if (!cart || cart.length === 0) {
    return <CartEmpty />;
  }

  // Example summary values (replace with real logic as needed)
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = cart.reduce(
    (sum, item) => sum + item.product.price * 0.1 * item.quantity,
    0
  );

  const promotion = 500; // Example static value
  const delivery = 0;
  const total = subtotal - discount - promotion + delivery;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Container sx={{ py: 4 , margin: 'auto'}} >
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        My Cart{" "}
        <span style={{ fontWeight: 400, fontSize: 22 }}>
          ({itemCount} Item{itemCount > 1 ? "s" : ""})
        </span>
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={10}>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
              onMoveToWishlist={handleMoveToWishlist}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary
            subtotal={subtotal}
            discount={discount}
            promotion={promotion}
            delivery={delivery}
            total={total}
            itemCount={itemCount}
            onCheckout={handleCheckout}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 4,
          color: "#888",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <span
          role="img"
          aria-label="secure"
          style={{ color: "#2d55fa", fontSize: 22 }}
        >
          🔒
        </span>
        <Typography variant="body2">
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </Typography>
      </Box>
    </Container>
  );
};

export default Cart;
