import ProductSectionList from "../components/home/product/ProductSectionList";
import SectionTitle from "../components/home/SectionTitle";

const productListContent = [
  { label: "Produk Rekomendasi", value: "recommended" },
  { label: "Produk Terbaru", value: "newest" },
];

function ProductSection() {
  return (
    <>
      <section
        id="product"
        className="scroll-mt-16 bg-[var(--background-white)] px-8 py-12 md:px-10 md:pt-8 md:pb-16 xl:pt-10 "
      >
        <SectionTitle label="Produk Kami" color="primary" />

        <div className="w-full flex flex-col gap-10 justify-center items-center ">
          {productListContent.map((item, index) => (
            <ProductSectionList
              key={index}
              label={item.label}
              productListOptions={item.value}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default ProductSection;
