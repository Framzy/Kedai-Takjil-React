import { useState } from "react";
import { useCart } from "../../context/hooks/useCart";
import useGetDataProducts from "../../hooks/api/useGetDataProducts";
import PopupCart from "../cart/PopupCart";
import ProductItem from "./ProductItem";
import ProductSkeleton from "./ProductSkeleton";
import ProductError from "./ProductError";

const INITIAL_ITEMS = 10;
const LOAD_MORE = 6;

const LoadMoreButton = ({ list, totalItems, handleLoadMore }) => {
  if (totalItems >= list.length) return null;

  return (
    <div className="w-full py-4 flex justify-center items-center">
      <button
        onClick={handleLoadMore}
        className="text-[var(--color-primary)] text-base md:text-lg font-bold cursor-pointer 
                  bg-transparent px-12 py-2 rounded-md shadow-[0_4px_0px_0px_rgba(210,210,210,0.8)] border-2 border-[var(--color-primary)]
                  hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:transform hover:-skew-x-3 transition-colors duration-300"
      >
        Lihat Semua
      </button>
    </div>
  );
};

const ProductList = ({ productListOptions }) => {
  const { products, isLoading, error, refetch, retryCount, maxRetries } =
    useGetDataProducts();
  const [totalItems, setTotalItems] = useState(INITIAL_ITEMS);
  const { showPopup, closePopup } = useCart();

  const handleLoadMore = () => {
    setTotalItems((prevItems) => prevItems + LOAD_MORE);
  };

  const skeletonCount = productListOptions === "all" ? INITIAL_ITEMS : 6;

  let renderedProductList;

  switch (productListOptions) {
    case "all":
      renderedProductList = (
        <div className="flex flex-col items-center gap-6">
          {error ? (
            <ProductError
              refetch={refetch}
              isLoading={isLoading}
              error={error}
              retryCount={retryCount}
              maxRetries={maxRetries}
            />
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
              {isLoading
                ? Array.from({ length: skeletonCount }).map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))
                : products
                    .slice(0, totalItems)
                    .map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))}
            </div>
          )}
          {!isLoading && (
            <LoadMoreButton
              list={products}
              totalItems={totalItems}
              handleLoadMore={handleLoadMore}
            />
          )}
        </div>
      );

      break;
    case "recommended":
      renderedProductList = (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
          {error ? (
            <ProductError
              refetch={refetch}
              isLoading={isLoading}
              error={error}
              retryCount={retryCount}
              maxRetries={maxRetries}
            />
          ) : isLoading ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            [...products]
              .sort((a, b) => b.sold - a.sold)
              .slice(0, 6)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
          )}
        </div>
      );
      break;
    case "newest":
      renderedProductList = (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15">
          {error ? (
            <ProductError
              refetch={refetch}
              isLoading={isLoading}
              error={error}
              retryCount={retryCount}
              maxRetries={maxRetries}
            />
          ) : isLoading ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            [...products]
              .sort((a, b) => b.id - a.id)
              .slice(0, 6)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
          )}
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
