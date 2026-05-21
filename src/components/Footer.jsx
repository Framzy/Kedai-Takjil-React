import { getCurrentYear } from "../utils/formatPrice";

const Footer = ({ variant = "home" }) => {
  const classMap = {
    home: "home-footer",
    about: "about-footer",
    contact: "contact-footer",
    product: "product-footer",
  };

  const contentClassMap = {
    home: "home-footer-content",
    about: "about-footer-content",
    contact: "contact-footer-content",
    product: "product-footer-content",
  };

  return (
    <div className={classMap[variant]}>
      <div className={contentClassMap[variant]}>
        <img src="/images/icons/logo.png" alt="logo" />
        <span>© {getCurrentYear()} Kedai Takjil. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
