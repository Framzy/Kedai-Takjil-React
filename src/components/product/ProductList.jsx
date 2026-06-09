import { useEffect, useState } from "react";
import { useCart } from "../../context/hooks/useCart";
import PopupCart from "../cart/PopupCart";
import ProductItem from "./ProductItem";

const ProductList = ({ productListOptions }) => {
  const [products, setProducts] = useState([]);

  const { showPopup, closePopup } = useCart();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Gagal load produk:", err));
  }, []);

  let renderedProductList;

  switch (productListOptions) {
    case "all":
      renderedProductList = (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      );
      break;
    case "recommended":
      renderedProductList = (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
          {products
            .sort((a, b) => b.sold - a.sold)
            .slice(0, 6)
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      );
      break;
    case "newest":
      renderedProductList = (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
          {products
            .sort((a, b) => b.id - a.id)
            .slice(0, 6)
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <>
      <PopupCart show={showPopup} onClose={closePopup} />

      {renderedProductList}
    </>
  );
};

export default ProductList;
