import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import TelevisionSection from "../components/TelevisionSection";
import RefrigeratorSection from "../components/RefrigeratorSection";
import EarphonesSection from "../components/EarphonesSection";
import CoolerSection from "../components/CoolerSection";
import AirConditionerSection from "../components/AirConditionerSection";
import CategorySection from "../components/CategorySection";
import LaptopSection from "../components/LaptopSection";
import MobileSection from "../components/MobileSection";
import WatchSection from "../components/WatchSection";
import TabletSection from "../components/TabletSection";
import SoundSection from "../components/SoundSection";
import DustFreeSection from "../components/DustFreeSection";
import WashingMachineSection from "../components/WashingMachineSection";
import PrinterSection from "../components/PrinterSection";
import WaterFilterSection from "../components/WaterFilterSection";
import FeatureSlider from "../components/FeatureSlider";
import FooterDescription from "../components/FooterDescription";
// Dummy data for banners and categories
const banners = [
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747140009562.jpeg",
    alt: "Pixel Days Banner",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747051045350.jpeg",
    alt: "Banner 2",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747288069436.jpeg",
    alt: "Banner 3",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741686479001.jpeg",
    alt: "Banner 4",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746614031182.jpeg",
    alt: "Banner 5",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1745496516466.jpeg",
    alt: "Banner 6",
  },
];

// Dummy featured products
const featuredProducts = [
  {
    _id: "1",
    name: "Google Pixel 8 Pro",
    image: "/dummy/pixel8pro.png",
    price: 84999,
    rating: 4.7,
    numReviews: 120,
    stock: 10,
    brand: "Google",
    category: "Mobiles",
    description: "The latest Google flagship phone.",
  },
  {
    _id: "2",
    name: "Samsung 4K TV",
    image: "/dummy/samsungtv.png",
    price: 49999,
    rating: 4.5,
    numReviews: 80,
    stock: 5,
    brand: "Samsung",
    category: "Televisions",
    description: "Crystal clear 4K UHD TV.",
  },
  {
    _id: "3",
    name: "Sony Headphones",
    image: "/dummy/sonyheadphones.png",
    price: 7999,
    rating: 4.8,
    numReviews: 200,
    stock: 15,
    brand: "Sony",
    category: "Earphones",
    description: "Noise cancelling wireless headphones.",
  },
];

const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {/* Hero Banners - Auto Sliding */}
      <Box sx={{ bgcolor: "#fff", py: 1, px: { xs: 0, md: 2 } }}>
        <Container maxWidth="xl" disableGutters sx={{ px: 0 }}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              mb: 4,
              boxShadow: 1,
              width: "100%",
              position: "relative",
              height: { xs: 180, md: 340 },
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
            }}
          >
            <img
              src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747287137578.jpeg"
              alt="Banner 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              mb: 4,
              boxShadow: 1,
              width: "100%",
              position: "relative",
              height: { xs: 180, md: 340 },
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
            }}
          >
            {banners.map((banner, idx) => (
              <Box
                key={banner.img}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: idx === bannerIndex ? 1 : 0,
                  transition: "opacity 0.7s cubic-bezier(.4,0,.2,1)",
                  zIndex: idx === bannerIndex ? 2 : 1,
                }}
              >
                <img
                  src={banner.img}
                  alt={banner.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </Box>
            ))}
            {/* Dots */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                zIndex: 10,
              }}
            >
              {banners.map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: idx === bannerIndex ? 22 : 8,
                    height: 8,
                    borderRadius: 6,
                    backgroundColor:
                      idx === bannerIndex ? "#1976d2" : "#e0e0e0",
                    transition: "background 0.3s",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#111",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Mobile Section */}
      <MobileSection />
      {/* Laptop Section */}
      <LaptopSection />
      {/* Television Section */}
      <TelevisionSection />
      {/* Watch Section */}
      <WatchSection />
      {/* Refrigerator Section */}
      <RefrigeratorSection />
      {/* Earphones Section */}
      <EarphonesSection />
      {/* Cooler Section */}
      <CoolerSection />
      {/* Feature Slider */}
      <FeatureSlider />
      {/* Air Conditioner Section */}
      <AirConditionerSection />
      {/* Tablet Section */}
      <TabletSection />
      {/* Sound Section */}
      <SoundSection />
      {/* Dust Free Section */}
      <DustFreeSection />
      {/* Washing Machine Section */}
      <WashingMachineSection />
      {/* Printer Section */}
      <PrinterSection />
      {/* Water Filter Section */}
      <WaterFilterSection />
      {/* Category Section */}
      <Box sx={{ width: "80%", m: "auto" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#111" }}>
          Explore Our Range Of Products
        </Typography>
        <CategorySection />
      </Box>
      <FooterDescription/>
    </Box>
  );
};

export default Home;
