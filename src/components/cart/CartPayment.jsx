import { getTotalPrice } from "../../utils/getTotalPrice";

function CartPayment({ carts, products, setShowCheckout }) {
  return (
    <div className="w-fit px-10 py-8 gap-4 flex flex-col justify-end items-center rounded-br-3xl ">
      <div className="w-full flex flex-col justify-center items-end gap-6 ">
        <div className="w-fit gap-18 flex justify-between items-center">
          <p className="font-semibold text-gray-600 text-lg">Total</p>
          <p className="font-bold text-[var(--color-primary)] text-lg">
            {getTotalPrice(carts, products)}
          </p>
        </div>
        <button
          className="w-fit px-22 py-3 font-bold text-white rounded-3xl  shadow-[0_4px_0px_0px_rgba(210,210,210,0.8)] cursor-pointer 
                      bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]  transition-colors duration-300"
          onClick={() => carts.length > 0 && setShowCheckout(true)}
        >
          Pesan
        </button>
      </div>
      <p className="w-full font-semibold text-left text-gray-600 text-md">
        *Jenis Pembayaran: Cash on Delivery
      </p>
    </div>
  );
}

export default CartPayment;
