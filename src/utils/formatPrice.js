export const formatPrice = (price) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
