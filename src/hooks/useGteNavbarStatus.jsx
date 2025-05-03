import { commercialRoutes } from "@/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function useGteNavbarStatus() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedHeroIndex } = useSelector((state) => state.shared);
  const isHome = location?.pathname === "/";
  const bannerPaths = [
    commercialRoutes.contact.path,
    commercialRoutes.aboutUs.path,
    commercialRoutes.countryCoverage.path
  ];
  const isBannerRoutes = bannerPaths?.includes(location?.pathname);
  function handleScroll() {
    setIsScrolled(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return {
    isHome: isHome,
    isScrolled,
    isWhite: selectedHeroIndex == 2 && !isScrolled && isHome ? true : false,
    isRedBorder: selectedHeroIndex != 1 && !isScrolled && isHome ? true : false,
    isBlack:
      selectedHeroIndex == 0 || selectedHeroIndex == 1
        ? isHome || isScrolled || isBannerRoutes
          ? true
          : false
        : false,
    isBannerRoutes,
  };
}

export default useGteNavbarStatus;
