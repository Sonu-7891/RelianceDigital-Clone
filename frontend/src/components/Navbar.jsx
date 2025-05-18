import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  InputBase,
  Box,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  FavoriteBorder as WishlistIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

// Dummy featured products
const categories = [
  {
    name: "Mobiles",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/jJc56F0NF-menu_Mobiles.png",
  },
  {
    name: "Air Conditioners",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/0HED31BMrJ-lg-sac-581110843-i-1-1200wx1200h.jpeg",
  },
  {
    name: "Air Coolers",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/jDnjGNKzM-Primary-Menu.jpeg",
  },
  {
    name: "Refrigerators",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-Ref.png",
  },
  {
    name: "Televisions",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/TV-180x180-15-01-2019.png",
  },
  {
    name: "Small Appliances",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/GhVsBI1rO-Primary-Menu.png",
  },
  {
    name: "Earphones",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/pvHyUpHquz-realme-tws-anc-buds-494249583-i-1-1200wx1200h.jpeg",
  },
  {
    name: "Smart Watches",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/TvMZUb1Xg-Primary-Menu.png",
  },
  {
    name: "Tablets",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1745410817591.jpeg",
  },
  {
    name: "Washing Machines",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/HAT8U8-9N-Primary-Menu.jpeg",
  },
  {
    name: "Best Deals",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/TvinFGkVU-Primary-Menu.png",
  },
  {
    name: "All Categories",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/resize-w:50/34MaVOg_1-menu_All-Categories.png",
  },
];
const CategoryNavbar = () => {
  // For scroll arrows (optional, can be enhanced)
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
        px: 5,
        height: 64,
        py: 1.5,
        overflowX: "auto",
        display: "flex",
        alignItems: "center",
        gap: 5,
        boxShadow: 1,
        position: "relative",
        zIndex: 10,
        // Hide scrollbar for all browsers
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
        "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari/Opera
      }}
    >
      {/* Left Arrow */}
      {/* Remove arrows for a clean look */}
      {categories.map((cat) => (
        <Box
          key={cat.name}
          sx={{
            display: "flex",
            alignItems: "center",

            cursor: "pointer",
            // mx: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", minWidth: "auto" }}>
            <img
              src={cat.icon}
              alt={cat.name}
              style={{
                width: 20,
                height: 20,
                marginBottom: 4,
                ml: 2,
                filter: "drop-shadow(0 1px 2px #eee)",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                ml: 1,

                color: "#111",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {cat.name}
            </Typography>
          </Box>
        </Box>
      ))}
      {/* Right Arrow */}
      {/* Remove arrows for a clean look */}
    </Box>
  );
};

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Top Red Navbar */}
      <AppBar
        position="sticky"
        sx={{ bgcolor: "#e42529", boxShadow: 0, zIndex: 1201 }}
      >
        <Toolbar
          sx={{
            height: 80,
            display: "flex",
            alignItems: "center",
            pt: 1,
            px: { xs: 1, md: 6 },
            mb: -1,
          }}
        >
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", mr: 2, minWidth: 180 }}
          >
            <img
              src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/company/1/applications/645a057875d8c4882b096f7e/application/pictures/free-logo/original/OhLa8p_da-Reliance-Digital.webp"
              alt="Reliance Digital"
              style={{ height: 36 }}
              onClick={() => navigate("/")}
            />
          </Box>

          {/* Search Bar */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: 4,
            }}
          >
            <Box
              sx={{
                bgcolor: "#eee",
                borderRadius: 5,
                px: 2,
                py: 0.5,
                display: "flex",
                alignItems: "end",
                width: { xs: "100%", md: "100%" },
                boxShadow: 1,
              }}
            >
              <SearchIcon sx={{ color: "#888", mr: 1 }} />
              <InputBase
                placeholder="Search Products & Brands"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ color: "#222", width: "100%", fontSize: 14 }}
              />
            </Box>
          </Box>

          {/* Right Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
                mr: -5,
              }}
            >
              <Link
                href="#"
                underline="none"
                color="#fff"
                sx={{ fontSize: 12, fontWeight: 400 }}
              >
                Orders
              </Link>
              <Link
                href="#"
                underline="none"
                color="#fff"
                sx={{ fontSize: 12, fontWeight: 400 }}
              >
                Contact us
              </Link>
              <Link
                href="#"
                underline="none"
                color="#fff"
                sx={{ fontSize: 12, fontWeight: 400 }}
              >
                Resource Center
              </Link>
              <Link
                href="#"
                underline="none"
                color="#fff"
                sx={{ fontSize: 12, fontWeight: 400 }}
              >
                Find a store
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "150px" }}
              >
                <LocationIcon sx={{ fontSize: 22, color: "#fff" }} />
                <Typography
                  variant="body2"
                  color="#fff"
                  sx={{ ml: 0.5, fontWeight: 700 }}
                >
                  Pick your location
                </Typography>
              </Box>
              <IconButton
                component={RouterLink}
                to="/cart"
                sx={{ color: "#fff" }}
              >
                <CartIcon sx={{ fontSize: 28 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontWeight: 700, ml: 0.5 }}
                >
                  Cart
                </Typography>
                <Badge
                  badgeContent={getCartCount()}
                  color="secondary"
                  sx={{ ml: 1 }}
                />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <WishlistIcon sx={{ fontSize: 28 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontWeight: 700, ml: 0.5 }}
                >
                  Wishlist
                </Typography>
              </IconButton>
              {isAuthenticated ? (
                <IconButton
                  component={RouterLink}
                  to="/profile"
                  sx={{ color: "#fff" }}
                >
                  <PersonIcon sx={{ fontSize: 28 }} />
                </IconButton>
              ) : (
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    ml: 1,
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
        <CategoryNavbar />
      </AppBar>
      {/* Category Navbar will be handled in Home.jsx */}
    </>
  );
};

export default Navbar;
