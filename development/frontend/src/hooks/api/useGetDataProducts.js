import { useCallback, useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function useGetDataProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestKey, setRequestKey] = useState(0);

  const refetch = useCallback(() => {
    setRequestKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/products`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!Array.isArray(result.data)) {
          throw new Error("Format respons API tidak valid.");
        }

        const normalizedProducts = result.data.map((product) => ({
          ...product,
          imageKey: product.image_key,
          sold: Number(product.sold ?? 0),
        }));

        setProducts(normalizedProducts);
      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("Gagal mengambil produk dari API:", err);
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [requestKey]);

  return { products, isLoading, error, refetch };
}

export default useGetDataProducts;
