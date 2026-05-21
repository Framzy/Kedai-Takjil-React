import { formatPrice } from "../utils/formatPrice";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="listProduct">
      {products.map((product) => (
        <div key={product.id} className="items" data-id={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-pesan">
            <div className="product-pesan-info">
              <h4>{product.name}</h4>
              <p>{formatPrice(product.price)}</p>
            </div>
            <div className="btn-pesan">
              <button
                className="addCart"
                onClick={() => onAddToCart(product.id)}
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
