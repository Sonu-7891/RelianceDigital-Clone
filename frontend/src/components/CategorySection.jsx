import { Typography, Box } from "@mui/material";

const categories = [
  {
    name: "Google Pixel Store",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742896316670.png",
  },
  {
    name: "Television",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/TV-180x180-15-01-2019.png",
  },
  {
    name: "Laptops",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Laptop-180x180-15-01-2019.png",
  },
  {
    name: "HeadSets",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Speaker-Headset-180x180-15-01-2019.png",
  },
  {
    name: "Mixer Grinder",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Mixer-Explore.png",
  },
  {
    name: "Soundbars",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-Speakers-Soundbars.png",
  },
  {
    name: "Microwave Ovens",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Microwave-Explore-HP-Section-Icon.png",
  },
  {
    name: "Cameras",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Camera-180x180-15-01-2019.png",
  },
  {
    name: "SmartPhones",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/iphone-pro-11-01.png",
  },
  {
    name: "Washing Machines",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Washing-Machine-180x180-15-01-2019.png",
  },
  {
    name: "Air Conditioners",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-AC.png",
  },
  {
    name: "Refrigerators",
    icon: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-Ref.png",
  },
];
const CategorySection = () => {
  // For scroll arrows (optional, can be enhanced)
  return (
    <Box
      sx={{
        borderBottom: "1px solid #eee",
        px: 5,
        height: 300,
        overflowX: "auto",
        display: "flex",
        alignItems: "center",
        gap: 5,
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
            minWidth: "auto",
            // mx: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              style={{
                width: 200,
                height: 150,
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
export default CategorySection;
