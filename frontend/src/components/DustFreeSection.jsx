
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
 
} from "@mui/material";     
import { fetchProducts } from "../services/productService";
import ProductSection from "./ProductSection";

const DustFreeSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      const data = await fetchProducts({ category: "DustFree" });
      setProducts(data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products");
      setLoading(false);
    }
  }, []); // Empty dependency array since we don't use any external values

  useEffect(() => {
    loadProducts();
  }, [loadProducts]); // Only re-run if loadProducts changes (which it won't)

  const productSectionProps = useMemo(
    () => ({
      title: "Dust Free Home",
      subtitle: "Smart Cleaning Solutions",
      products: products,
      bgcolor: "#c3e3f0",
    }),
    [products]
  ); // Only recompute if products change

  if (loading) {
    return <Box sx={{ p: 2 }}>Loading...</Box>;
  }

  if (error) {
    return <Box sx={{ p: 2 }}>{error}</Box>;
  }

  return <ProductSection {...productSectionProps} />;
};

export default React.memo(DustFreeSection); // Prevent re-renders if props haven't changed
