import React, { useState, useEffect } from "react";
import { Box, Card, Typography, Container, Grid } from "@mui/material";

const sliderImages = [
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1744797053476.jpeg",
    alt: "Vivo T4 Banner 1",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747392261188.jpeg",
    alt: "Vivo T4 Banner 2",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747217979475.jpeg",
    alt: "Vivo T4 Banner 3",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746619812783.jpeg",
    alt: "Vivo T4 Banner 4",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1746424514333.jpeg",
    alt: "Vivo T4 Banner 5",
  },
  {
    img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1747397768584.jpeg",
    alt: "Vivo T4 Banner 6",
  },
];

const features = [
  {
    icon: "🚚",
    title: "FASTEST DELIVERY & INSTALLATION",
  },
  {
    icon: "💰",
    title: "MULTIPLE FINANCE OPTIONS",
  },
  {
    icon: "🔗",
    title: "UNMATCHED NETWORK",
  },
];

const FeatureSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ my: 4, mx: 2 }}>
      <Container maxWidth="xl" disableGutters>
        {/* Slider */}
        <Box
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            mb: 4,
            boxShadow: 1,
            width: "100%",
            position: "relative",
            height: { xs: 180, md: 300 },
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
          }}
        >
          {sliderImages.map((banner, idx) => (
            <Box
              key={banner.img}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: idx === index ? 1 : 0,
                transition: "opacity 0.7s cubic-bezier(.4,0,.2,1)",
                zIndex: idx === index ? 2 : 1,
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
            {sliderImages.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setIndex(idx)}
                sx={{
                  width: idx === index ? 22 : 8,
                  height: 8,
                  borderRadius: 6,
                  backgroundColor: idx === index ? "#1976d2" : "#e0e0e0",
                  transition: "background 0.3s",
                  cursor: "pointer",
                  mx: 0.5,
                  ":hover": {
                    backgroundColor: "#111",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
        {/* Features */}
        <Grid container spacing={2} justifyContent="center">
          {features.map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 3,
                  borderRadius: 2,
                  boxShadow: 0,
                  border: "1.5px solid #e0e0e0",
                  minHeight: 80,
                  mb: { xs: 1, md: 0 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mr: 2, fontSize: 36, color: "#0026b3" }}
                  component="span"
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#222",
                    fontSize: 18,
                    textAlign: "left",
                  }}
                >
                  {feature.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSlider;
