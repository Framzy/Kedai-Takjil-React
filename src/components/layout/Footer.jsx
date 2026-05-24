import { getCurrentYear } from "../../utils/getCurrentYear";

function Footer() {
  return (
    <footer className="w-full bg-[#131313] flex items-center justify-center">
      <div className=" w-fit flex flex-col items-center justify-center gap-2 p-5">
        <img className="w-14" src="icon/logo.png" alt="logo" />

        <p className="text-center text-sm text-white">
          © {getCurrentYear()} Kedai Takjil. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
