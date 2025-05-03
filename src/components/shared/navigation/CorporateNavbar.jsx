import { Button } from "@/components/ui/button";
import useActiveMenuItem from "@/hooks/useActiveMenuItem";
import useGteNavbarStatus from "@/hooks/useGteNavbarStatus";
import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import {
  CellphoneIcon,
  CloseIcon,
  commercialRoutes,
  corporateRoutes,
  LogoIcon,
  PersonIcon,
  SearchIcon,
} from "@/services";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { CountrySelect } from "react-country-state-city";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export const corporateMenuItems = [
  {
    name: "Iot",
    path: corporateRoutes.iot.path,
    activePath: corporateRoutes.iot.activePath,
  },
  {
    name: "Hotel",
    path: corporateRoutes.hotel.path,
    activePath: corporateRoutes.hotel.activePath,
  },
  {
    name: "Travel Agency",
    path: corporateRoutes.travelAgency.path,
    activePath: corporateRoutes.travelAgency.activePath,
  },
  {
    name: "Maritime Internet",
    path: corporateRoutes.maritimeInternet.path,
    activePath: corporateRoutes.maritimeInternet.activePath,
  },
  {
    name: "Office/Roadshow Events",
    path: corporateRoutes.office.path,
    activePath: corporateRoutes.office.activePath,
  },
  {
    name: "About Us",
    path: corporateRoutes.aboutUs.path,
    activePath: corporateRoutes.aboutUs.activePath,
  },
  {
    name: "Commercial",
    path: corporateRoutes.commercial.path,
    activePath: corporateRoutes.commercial.activePath,
  },
];

function CorporateNavbar() {
  const { isScrolled, isRedBorder, isHome } = useGteNavbarStatus();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const menuItems = useActiveMenuItem(corporateMenuItems);
  const {
    setIsAuthDialogOpen,
    setLoginRequiredDialogOpen,
    setAppDownloadDialogOpen,
  } = useModal();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleCountryChange = (country) => {
    navigate(
      `/country-coverage/filter?region=${country?.region?.toLowerCase()}&country=${country?.name?.toLowerCase()}`
    );
  };

  const handleModalOpen = (name = "auth", value) => {
    if (name == "auth") {
      setIsAuthDialogOpen(value);
    } else if (name == "download") {
      setAppDownloadDialogOpen(value);
    } else {
      setLoginRequiredDialogOpen(value);
    }
    setIsShowMenu(false);
  };
  return (
    <header
      className={cn(
        "sticky top-0 left-0 w-full z-40 duration-300 border-b border-neutral-200",
        isScrolled ? "bg-black border-black-900" : ""
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto relative">
        <nav
          className={cn(
            "w-full duration-300 flex items-center lg:gap-10 justify-between px-4 py-2 sm:py-4",
            isScrolled ? "text-white" : "text-white xl:text-black-700"
          )}
        >
          <div className="flex w-full xl:w-auto items-center gap-2 sm:gap-6  justify-between">
            <Link to={commercialRoutes.home.path}>
              <LogoIcon
                className="max-w-[100px] sm:max-w-[112px]"
                color="#E41F26"
              />
            </Link>
            <div className="w-full max-w-[200px] xs:max-w-full  items-center justify-end xs:gap-1 flex xl:hidden">
              <div
                className={cn(
                  "w-full relative duration-300 origin-left",
                  showSearchbar
                    ? "max-w-[200px] xs:max-w-full"
                    : "max-w-0 overflow-hidden "
                )}
              >
                <CountrySelect
                  onChange={(val) => handleCountryChange(val)}
                  name="country"
                  containerClassName={cn(
                    "country-search bg-transparent blackSearch"
                  )}
                  inputClassName="!border-none !outline-none bg-transparent"
                  placeHolder="Select Country"
                  autoComplete="off"
                />
                <SearchIcon
                  className="absolute inset-y-0 top-1/2 -translate-y-1/2 left-3"
                  color="#191919"
                />
              </div>
              {showSearchbar ? (
                <button
                  type="button"
                  className="border-none outline-none"
                  onClick={() => setShowSearchbar(false)}
                >
                  <CloseIcon
                    className="w-6 h-6"
                    color={isScrolled ? "#757575" : "#191919"}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="border-none outline-none"
                  onClick={() => setShowSearchbar(true)}
                >
                  <SearchIcon
                    className="w-6 h-6"
                    color={
                      isRedBorder
                        ? "#757575"
                        : isScrolled || !isHome
                        ? "#757575"
                        : "#FAFAFA"
                    }
                  />
                </button>
              )}
            </div>
            <button
              type="butotn"
              className="outline-none border-none xl:hidden"
              onClick={() => setIsShowMenu(true)}
            >
              <MenuIcon color={isScrolled ? "#fff" : "#000"} />
            </button>
          </div>
          <div
            className={cn(
              "flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-between text-lg xl:text-sm font-semibold fixed xl:relative top-0 left-0 w-full bg-black h-screen xl:bg-transparent xl:h-auto p-4 xl:p-0 overflow-auto xl:overflow-visible duration-100",
              isShowMenu ? "translate-x-0" : "translate-x-full xl:translate-x-0"
            )}
          >
            <div className="max-w-[360px] pt-10 xl:pt-0 xl:max-w-none mx-auto flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-between">
              <div className="flex xl:hidden w-full xl:w-auto items-center justify-between pb-10">
                <Link to={commercialRoutes.home.path}>
                  <LogoIcon color="#E41F26" />
                </Link>
                <button
                  type="butotn"
                  className="outline-none border-none xl:hidden absolute top-4 right-4"
                  onClick={() => setIsShowMenu(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <ul className="flex flex-col xl:flex-row xl:items-center 2xl:gap-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={cn(
                        "menuItem font-normal hover:after:bg-main-600",
                        item.isActive
                          ? "after:scale-x-100 font-semibold after:bg-main-600 bg-main-600 xl:bg-transparent"
                          : ""
                      )}
                      to={item.path}
                      onClick={() => setIsShowMenu(false)}
                    >
                      {t(`navbar.corporate.${index}.name`)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                className={cn(
                  "menuItem p-3 xl:p-0 text-white xl:text-main-600"
                )}
                to={commercialRoutes.home.path}
              >
                {t("navbar.forYoo")}
              </Link>
              <div className="flex flex-col xl:flex-row xl:items-center gap-3 w-full xl:w-auto flex-1 xl:flex-none justify-end xl:justify-center mt-6 xl:mt-0">
                <div className="w-full relative hidden xl:block max-w-[198px]">
                  <CountrySelect
                    onChange={(val) => handleCountryChange(val)}
                    name="country"
                    containerClassName={cn(
                      "country-search bg-transparent nav-white"
                    )}
                    inputClassName="!border-none !outline-none bg-transparent"
                    placeHolder={t("extraText.selectCountry")}
                    autoComplete="off"
                  />
                  <SearchIcon
                    className="absolute inset-y-0 top-1/2 -translate-y-1/2 left-3"
                    color="#191919"
                  />
                </div>
                <Button
                  variant="secondary"
                  className={
                    "px-6 md:py-3 rounded-[10px] w-full max-w-[320px] xl:w-auto hidden"
                  }
                >
                  <span>Login</span>
                </Button>
                <Button
                  variant="outline"
                  className={
                    "px-6 md:py-3 bg-transparent border-main-600 text-main-600 hover:bg-main-600 hover:text-white rounded-[10px] w-full max-w-[320px] xl:w-auto xl:hidden"
                  }
                  onClick={() => handleModalOpen("auth", true)}
                >
                  <span>Login</span>
                </Button>
                <Button
                  className={cn(
                    "px-6 md:py-3 rounded-[10px] w-full max-w-[320px] xl:w-auto bg-main-600 text-white"
                  )}
                  onClick={() => handleModalOpen("download", true)}
                >
                  <CellphoneIcon color="#fff" className="w-5 h-5 shrink-0" />
                  <span>{t("buttonText.downloadApp")}</span>
                </Button>
                <Button
                  className={
                    "min-w-10 min-h-10 p-0 rounded-[10px] hidden xl:flex"
                  }
                  variant="secondary"
                  onClick={() => handleModalOpen("auth", true)}
                >
                  <PersonIcon className="!h-6 !w-6 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default CorporateNavbar;
