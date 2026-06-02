import useIsMobile from "../../../hooks/useIsMobile";
import background from "../../../assets/images/home/background_img.webp";
import mobileBackground from "../../../assets/images/home/mobile_background_img.webp";

function HeroBackground() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${isMobile ? mobileBackground : background})`,
        }}
      />
    </>
  );
}

export default HeroBackground;
