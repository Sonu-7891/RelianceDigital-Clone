import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBoxOpen,
  faMapMarkerAlt,
  faIdCard,
  faCoins,
  faWallet,
  faHeart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getProfile } from "../services/authService";

const sidebarOptions = [
  { label: "My Profile", icon: faUser, active: true },
  { label: "My Order", icon: faBoxOpen },
  { label: "Delivery Addresses", icon: faMapMarkerAlt },
  { label: "PAN & GST Information", icon: faIdCard },
  { label: "ROne Loyalty Points", icon: faCoins },
  { label: "My Credit (Jio Wallet)", icon: faWallet },
  { label: "My Wishlist", icon: faHeart },
];

const Profile = () => {
  const { user, logout, setUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 320,
          bgcolor: "#fff",
          borderRight: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          pt: 4,
          pb: 2,
          minHeight: "100vh",
        }}
      >
        {/* User Avatar and Name */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              bgcolor: "#e9edfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "#888",
              mb: 1,
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#222" }}>
            {user.name?.split(" ")[0] || "User"}
          </Typography>
        </Box>
        <Typography sx={{ color: "#888", fontWeight: 700, ml: 4, mb: 1 }}>
          Account
        </Typography>
        {/* Sidebar Options */}
        <Box sx={{ flex: 1 }}>
          {sidebarOptions.map((opt, idx) => (
            <Box
              key={opt.label}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 4,
                py: 2,
                cursor: "pointer",
                bgcolor: opt.active ? "#e9edfa" : "#fff",
                color: opt.active ? "#2d55fa" : "#222",
                fontWeight: opt.active ? 700 : 500,
                borderLeft: opt.active
                  ? "4px solid #2d55fa"
                  : "4px solid transparent",
                transition: "all 0.2s",
                fontSize: 18,
                mb: 0.5,
                "&:hover": { bgcolor: "#f5f6fa" },
              }}
            >
              <FontAwesomeIcon
                icon={opt.icon}
                style={{ marginRight: 16, fontSize: 20 }}
              />
              {opt.label}
            </Box>
          ))}
        </Box>
        {/* Logout Button */}
        <Box sx={{ px: 4, mt: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<FontAwesomeIcon icon={faSignOutAlt} />}
            sx={{
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              py: 1.2,
              fontSize: 16,
            }}
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Log Out
          </Button>
        </Box>
      </Box>
      {/* Main Content */}
      <Box sx={{ flex: 1, p: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
          My Profile
        </Typography>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: "0 2px 8px #eee",
            p: 4,
            maxWidth: 900,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
            Personal Details
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ minWidth: 220, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                First Name
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.name?.split(" ")[0] || "-"}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 220, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                Last Name
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.name?.split(" ")[1] || "-"}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 220, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                Date Of Birth
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.dob
                  ? new Date(user.dob).toLocaleDateString()
                  : "DD/MM/YYYY"}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 220, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                Gender
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.gender || "-"}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 320, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                Email Address
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.email}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 220, mb: 2 }}>
              <Typography sx={{ color: "#888", fontWeight: 600 }}>
                Mobile Number
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                {user.phone || "-"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="text"
              sx={{ color: "#2d55fa", fontWeight: 700, fontSize: 16 }}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} /> Edit
              Profile
            </Button>
          </Box>
          <Button onClick={async () => setUser(await getProfile())}>
            Refresh Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
