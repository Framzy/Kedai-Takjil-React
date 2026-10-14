import { useEffect, useState } from "react";

function useGetDataProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          // ✅ hanya set state jika komponen masih mounted
          setProducts(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Gagal load produk:", err);
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, isLoading, error };
}

export default useGetDataProducts;
