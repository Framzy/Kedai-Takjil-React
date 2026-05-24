import { useEffect, useState } from "react";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   const handleAddToCart = (productId) => {
  //     handleAddToCart(productId);
  //   };

  return (
    <>
      <section id="product" className="min-h-screen scroll-mt-16">
        <h1 className="title">Produk Kami</h1>
        <div className="row-2">
          <div className="information">
            <h3>| Produk Rekomendasi</h3>
            <h3>
              <a href="/products" className="full-product">
                Lihat Semua
              </a>
            </h3>
          </div>
          <div className="product">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="col-3">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="star">
                      <img src="/images/icons/star.png" alt="star" />
                    </i>
                  ))}
                </div>
                <p>Rp {(product.price / 1000).toFixed(0)},000</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductSection;
