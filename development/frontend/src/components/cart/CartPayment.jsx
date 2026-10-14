import { getTotalPrice } from "../../utils/getTotalPrice";
import { Link } from "react-router-dom";

function CartPayment({ carts, products, setShowCheckout }) {
  return (
    <div className="w-full py-8 gap-10 md:gap-0 flex flex-col-reverse md:flex-row justify-between items-end rounded-b-3xl ">
      <div className="w-fit h-full flex flex-col self-start md:self-end px-10 gap-4 ">
        <Link to="/products">
          <p
            className="relative font-semibold text-[var(--color-primary)] text-sm sm:text-lg 
                      hover:text-[var(--color-secondary)] transition-colors duration-300 cursor-pointer
                      before:absolute before:content-[''] before:w-full before:h-0.5  before:bottom-0 before:bg-[var(--color-primary)] 
                      before:transition-all before:duration-300 hover:before:w-0 
                      "
          >
            Lihat Produk Lainnya
          </p>
        </Link>
      </div>
      <div className="w-fit flex flex-col justify-center items-center px-10 gap-4">
        <div className="w-full flex flex-col justify-center items-end gap-6 ">
          <div className="w-fit gap-18 flex justify-between items-center">
            <p className="font-semibold text-gray-600 text-base sm:text-lg ">
              Total
            </p>
            <p className="font-bold text-[var(--color-primary)] text-base sm:text-lg ">
              {getTotalPrice(carts, products)}
            </p>
          </div>
          <button
            className="w-fit  px-12 sm:px-22 py-2 sm:py-3 font-bold text-white rounded-3xl  shadow-[0_4px_0px_0px_rgba(210,210,210,0.8)] cursor-pointer 
                      bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]  transition-colors duration-300"
            onClick={() => carts.length > 0 && setShowCheckout(true)}
          >
            Pesan
          </button>
        </div>
        <p className="font-semibold text-gray-600 text-xs sm:text-base">
          *Jenis Pembayaran: Cash on Delivery
        </p>
      </div>
    </div>
  );
}

export default CartPayment;
