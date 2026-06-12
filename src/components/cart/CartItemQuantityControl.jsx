import { useState, useEffect } from "react";
import { useCart } from "../../context/hooks/useCart"; // ← tambah import

function CartItemQuantityControl({ onChangeQuantity, removeItem, cart }) {
  const { setQuantity } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const [inputValue, setInputValue] = useState(cart.quantity);

  useEffect(() => {
    setInputValue(cart.quantity);
  }, [cart.quantity]);

  const handleChange = (type) => {
    if (type === "minus" && cart.quantity <= 1) {
      setShowConfirm(true);
      setInputValue(0);
      return;
    }
    if (type === "plus" && cart.quantity >= 30) return;
    onChangeQuantity(cart.product_id, type);
    setInputValue(type === "plus" ? cart.quantity + 1 : cart.quantity - 1);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    const val = parseInt(inputValue);

    if (isNaN(val) || val <= 0) {
      if (cart.quantity !== 1) {
        setQuantity(cart.product_id, 1);
      }

      setShowConfirm(true);
      setInputValue(0);
      return;
    }

    const clamped = Math.min(val, 30);

    if (clamped !== cart.quantity) {
      setQuantity(cart.product_id, clamped);
    }

    setInputValue(clamped);
  };

  const handleCancelRemove = () => {
    setShowConfirm(false);
    setInputValue(1);
  };

  const handleConfirmRemove = () => {
    setShowConfirm(false);
    removeItem(cart.product_id);
  };

  return (
    <>
      <div className="h-full flex flex-col gap-4 items-start">
        {!showConfirm && (
          <>
            <div className="w-fit sm:w-48  flex justify-between items-center border-2 border-gray-300 bg-gray-200">
              <button
                className="px-3 sm:px-4 py-2 font-bold  text-lg sm:text-2xl text-[var(--color-primary)] cursor-pointer hover:bg-gray-100"
                onClick={() => handleChange("minus")}
              >
                -
              </button>
              <input
                type="number"
                value={inputValue}
                min={0}
                max={20}
                onChange={handleInput}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-", "."].includes(e.key))
                    e.preventDefault();
                  if (e.key === "Enter") e.target.blur();
                }}
                className="h-full flex justify-center items-center font-bold text-center py-2 px-1 sm:px-2
                         text-base sm:text-xl text-gray-500 bg-gray-100 
                         focus:outline-[var(--color-secondary)] focus:bg-white focus:text-[var(--color-secondary)]
                         [appearance:textfield]
                         [&::-webkit-outer-spin-button]:appearance-none
                         [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                className=" px-3 sm:px-4 py-2 font-bold text-lg sm:text-2xl text-[var(--color-primary)] cursor-pointer hover:bg-gray-100 hover:text-[var(--color-secondary)]"
                onClick={() => handleChange("plus")}
              >
                +
              </button>
            </div>

            <button
              className="w-fit px-12 sm:px-18 py-2 sm:py-3  text-sm sm:text-base font-bold text-gray-600 rounded-3xl shadow-[0_4px_0px_0px_rgba(209,209,209,1)] cursor-pointer bg-gray-300 hover:bg-gray-200 transition-colors duration-300"
              onClick={() => setShowConfirm(true)}
            >
              Hapus
            </button>
          </>
        )}

        {showConfirm && (
          <div className="h-full flex flex-col justify-center items-center gap-3 p-3 bg-white border border-gray-500 rounded-xl shadow-[0_4px_0px_0px_rgba(155,155,155,0.8)]">
            <p className="text-sm text-gray-800 flex-1">
              Hapus item dari keranjang?
            </p>
            <div className="flex gap-3">
              <button
                className="text-sm px-3 py-1 text-white border bg-[var(--color-primary)] border-gray-800 rounded-lg hover:bg-gray-100 hover:text-[var(--color-primary)] cursor-pointer"
                onClick={handleCancelRemove}
              >
                Batal
              </button>
              <button
                className="text-sm px-3 py-1 text-white border bg-red-400 border-red-500 rounded-lg hover:bg-red-100 hover:text-red-500 cursor-pointer"
                onClick={handleConfirmRemove}
              >
                Hapus
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartItemQuantityControl;
