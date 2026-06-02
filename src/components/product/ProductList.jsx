import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

const ProductList = ({ productListOptions }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (productListOptions === "all") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }

  if (productListOptions === "recommended") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
        {products
          .sort((a, b) => b.sold - a.sold)
          .slice(0, 6)
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    );
  }

  if (productListOptions === "newest") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
        {products
          .sort((a, b) => b.id - a.id)
          .slice(0, 6)
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    );
  }

  return null;
};

export default ProductList;
