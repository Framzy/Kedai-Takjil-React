import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId) => {
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    },
    [navigate, location.pathname],
  );

  return { scrollToSection };
};

export default useScrollToSection;
