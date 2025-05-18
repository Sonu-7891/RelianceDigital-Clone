import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import StarIcon from "@mui/icons-material/Star";
import { login } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    setLoading(true);
    try {
      const response = await login(email, password);
      
      // Store tokens in localStorage
      localStorage.setItem("token", response.accessToken);

      localStorage.setItem("refreshToken", response.refreshToken);
      authLogin(response);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setError(err.message || "Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#fff",
          borderRadius: "40px",
          boxShadow: 0,
          overflow: "hidden",
          width: { xs: "100%", md: 1200 },
          maxWidth: "100vw",
        }}
      >
        {/* Left Info Panel */}
        <Box
          sx={{
            bgcolor: "#e9edfa",
            width: { xs: "0", md: 480 },
            minHeight: 600,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
            px: 7,
            py: 6,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <ShoppingCartIcon sx={{ color: "#2d55fa", fontSize: 36, mr: 2 }} />
            <Box>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                Manage Your Orders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Keep track of your orders, deliveries, and returns under My
                Orders section.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <PaymentIcon sx={{ color: "#2d55fa", fontSize: 36, mr: 2 }} />
            <Box>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                Multiple Finance Options
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pay flexibly with multiple payment options and save more with No
                Cost EMI and Cashback offers.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ color: "#2d55fa", fontSize: 36, mr: 2 }} />
            <Box>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                ROne Loyalty Points
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Earn ROne loyalty points on every purchase and redeem those
                across Reliance Retail formats.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Right Login Form */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 8,
            px: { xs: 2, md: 8 },
            bgcolor: "#fff",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 32, md: 56 },
              mb: 2,
              textAlign: "left",
              lineHeight: 1.1,
            }}
          >
            Login or Register
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontSize: 22,
              mb: 5,
              textAlign: "left",
              maxWidth: 600,
            }}
          >
            You'll receive a 6-digit code to verify your Mobile Number
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%", maxWidth: 600, mt: 2 }}
          >
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 4, fontSize: 22 }}
              autoFocus
              type="email"
              InputProps={{
                sx: { fontSize: 20 },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 4, fontSize: 22 }}
              type="password"
              InputProps={{
                sx: { fontSize: 20 },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#bfc6fa",
                color: "#222",
                fontWeight: 700,
                fontSize: 22,
                height: 56,
                borderRadius: 999,
                boxShadow: 0,
                mb: 2,
                mt: 6,
                textTransform: "none",
                ":hover": { bgcolor: "#a3b0f7" },
              }}
              disabled={loading}
            >
              Login
            </Button>
            {error && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {error}
              </Alert>
            )}
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={success}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Login successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
