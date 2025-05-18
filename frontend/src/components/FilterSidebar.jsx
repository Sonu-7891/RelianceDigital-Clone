import {
  Box,
  Drawer,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

const FilterSidebar = ({
  categories,
  brands,
  onFilterChange,
  initialFilters = {},
}) => {
  const [filters, setFilters] = useState({
    priceRange: initialFilters.priceRange || [0, 100000],
    categories: initialFilters.categories || [],
    brands: initialFilters.brands || [],
    rating: initialFilters.rating || 0,
  });

  const handlePriceChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  const handleCategoryChange = (category) => {
    setFilters({
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    });
  };

  const handleBrandChange = (brand) => {
    setFilters({
      ...filters,
      brands: filters.brands.includes(brand)
        ? filters.brands.filter((b) => b !== brand)
        : [...filters.brands, brand],
    });
  };

  const handleRatingChange = (rating) => {
    setFilters({ ...filters, rating });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters({
      priceRange: [0, 100000],
      categories: [],
      brands: [],
      rating: 0,
    });
    onFilterChange({
      priceRange: [0, 100000],
      categories: [],
      brands: [],
      rating: 0,
    });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
          position: "relative",
          height: "auto",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={filters.priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={100000}
          step={1000}
          valueLabelFormat={(value) => `₹${value}`}
        />
        <Typography variant="body2" color="text.secondary">
          ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography gutterBottom>Categories</Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 2 }} />

        <Typography gutterBottom>Brands</Typography>
        <FormGroup>
          {brands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 2 }} />

        <Typography gutterBottom>Rating</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant={filters.rating === rating ? "contained" : "outlined"}
              onClick={() => handleRatingChange(rating)}
              size="small"
            >
              {rating}+
            </Button>
          ))}
        </Box>

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={handleApplyFilters} fullWidth>
            Apply Filters
          </Button>
          <Button variant="outlined" onClick={handleReset} fullWidth>
            Reset
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterSidebar;
