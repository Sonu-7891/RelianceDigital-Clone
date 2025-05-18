import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import StarIcon from "@mui/icons-material/Star";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { register } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) newErrors.phone = "Mobile number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Mobile number must be 10 digits";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const registerData = {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      };
      const response = await register(registerData);
      authLogin(response.data);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setErrors({
        submit: err.message || "Failed to register. Please try again.",
      });
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
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          width: { xs: "100%", md: 1000 },
          minHeight: 600,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* Left Info Panel */}
        <Box
          sx={{
            bgcolor: "#f5f7ff",
            width: { xs: "40%", md: 400 },
            p: 4,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
          }}
        >
          <Box>
            <ShoppingCartIcon sx={{ color: "#1976d2", fontSize: 32, mb: 1 }} />
            <Typography variant="h6" fontWeight={700}>
              Manage Your Orders
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Keep track of your orders, deliveries, and returns under My Orders
              section.
            </Typography>
          </Box>
          <Box>
            <PaymentIcon sx={{ color: "#1976d2", fontSize: 32, mb: 1 }} />
            <Typography variant="h6" fontWeight={700}>
              Multiple Finance Options
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pay flexibly with multiple payment options and save more with No
              Cost EMI and Cashback offers.
            </Typography>
          </Box>
          <Box>
            <StarIcon sx={{ color: "#1976d2", fontSize: 32, mb: 1 }} />
            <Typography variant="h6" fontWeight={700}>
              ROne Loyalty Points
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Earn ROne loyalty points on every purchase and redeem those across
              Reliance Retail formats.
            </Typography>
          </Box>
        </Box>
        {/* Right Register Form */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
            Register new account
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#f5f7ff",
              borderRadius: 2,
              px: 2,
              py: 1,
              mb: 3,
            }}
          >
            <InfoOutlinedIcon color="primary" sx={{ mr: 1 }} />
            <Typography color="text.secondary" fontSize={15}>
              Your number is not registered, please register to continue
              shopping.
            </Typography>
          </Box>
          {errors.submit && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.submit}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%", maxWidth: 400 }}
          >
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  autoFocus
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Enter your Mobile Number"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "phone",
                        value: e.target.value.replace(/\D/g, ""),
                      },
                    })
                  }
                  error={!!errors.phone}
                  helperText={
                    errors.phone ||
                    "Your mobile number will be used to avail of benefits such as ROne Loyalty Points and also to receive quick notifications."
                  }
                  InputProps={{
                    startAdornment: (
                      <span style={{ marginRight: 8, color: "#888" }}>+91</span>
                    ),
                    endAdornment: (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          ml: 1,
                          bgcolor: "#2d55fa",
                          color: "#fff",
                          fontWeight: 600,
                          borderRadius: 2,
                          boxShadow: 0,
                          ":hover": { bgcolor: "#1a3bb3" },
                        }}
                      >
                        Verify
                      </Button>
                    ),
                  }}
                  inputProps={{ maxLength: 10 }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={
                    errors.email ||
                    "Your email address will be used to send order invoice, order updates etc."
                  }
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                height: 48,
                fontWeight: 600,
                fontSize: 18,
                bgcolor: "#bfc6fa",
                color: "#222",
                borderRadius: 3,
                boxShadow: 0,
                ":hover": { bgcolor: "#a3b0f7" },
              }}
              disabled={loading}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Paper>
      <Snackbar
        open={success}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Registration successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
