import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const productCategories = [
  "Smartphones",
  "Laptops",
  "DSLR Cameras",
  "Televisions",
  "Air Conditioners",
  "Refrigerator",
  "Kitchen Appliances",
  "Accessories",
  "Personal Care & Grooming",
];

const siteInfo = [
  "About Reliance Digital",
  "resQ Services",
  "Site Map",
  "Gift Cards",
  "Corporate Enquiries",
  "Contact Us",
];

const resourceCenter = [
  "Buying Guides",
  "Manuals",
  "How To's",
  "Compare Products",
  "Nearest Store",
];

const policies = [
  "Terms of Use",
  "FAQs",
  "Cancellation and Returns Policy",
  "Pricing & Payments Policy",
  "Privacy Policy",
  "E-waste Recycling Policy",
  "EMI and Additional Cashback T&C",
  "RelianceOne Loyalty Program T&C",
  "Caution Notice",
];

const socialIcons = [
  { icon: faFacebookF, alt: "Facebook", link: "#" },
  { icon: faTwitter, alt: "Twitter", link: "#" },
  { icon: faYoutube, alt: "YouTube", link: "#" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#fafbfc", color: "#222", pt: 6, mt: 8 }}
    >
      <Container maxWidth="xl">
        <Grid container pl={10} spacing={25}>
          {/* Product Categories */}
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Product Categories
            </Typography>
            {productCategories.map((cat) => (
              <Typography key={cat} variant="body2" sx={{ mb: 0.5 }}>
                {cat}
              </Typography>
            ))}
          </Grid>
          {/* Site Info */}
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Site Info
            </Typography>
            {siteInfo.map((info) => (
              <Typography key={info} variant="body2" sx={{ mb: 0.5 }}>
                {info}
              </Typography>
            ))}
          </Grid>
          {/* Resource Center */}
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Resource Center
            </Typography>
            {resourceCenter.map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Grid>
          {/* Policies */}
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Policies
            </Typography>
            {policies.map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* App Download & Social Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#f5f5f5",
            borderRadius: 2,
            mt: 4,
            p: 3,
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/hOmxLhtSw-JMRrIxPWp-Sub-Menu.png"
              alt="Reliance Digital App"
              style={{ height: 70 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Experience Reliance digital app on mobile
            </Typography>
            <img
              src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/8YVBmT93N-cssrx3-hK-Sub-Menu.png"
              alt="Google Play"
              style={{ height: 40, marginLeft: 16 }}
            />
            <img
              src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/misc/pictures/free-icon/original/yHABhA17_-kAjbYgiar-Sub-Menu.png"
              alt="App Store"
              style={{ height: 40, marginLeft: 8 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500, mr: 2 }}>
              Follow us
            </Typography>
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#222" }}
              >
                <FontAwesomeIcon icon={icon.icon} size="2x" />
              </a>
            ))}
          </Box>
        </Box>

        {/* Disclaimer */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Disclaimer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product prices, offers and availability are subject to change from
            time to time. All prices are inclusive of taxes. Product colours &
            images are only for illustration and they may not exactly match with
            the actual product. Product specs are subject to change & may vary
            from actual product. While every care is taken to avoid inaccuracies
            in content, these are provided as is, without warranty of any kind.
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ pb: 2 }}
        >
          Copyright © {new Date().getFullYear()} Reliance Digital. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
