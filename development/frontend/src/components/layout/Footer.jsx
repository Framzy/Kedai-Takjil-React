import icon from "/icon/logo.png";
import { getCurrentYear } from "../../utils/getCurrentYear";

function Footer() {
  return (
    <footer className="w-full bg-[#131313] flex items-center justify-center">
      <div className=" w-fit flex flex-col items-center justify-center gap-4 p-8">
        <img className="w-24" src={icon} alt="logo" />

        <p className="text-center text-sm text-white">
          © {getCurrentYear()} Kedai Takjil. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
