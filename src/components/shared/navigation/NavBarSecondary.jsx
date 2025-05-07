import { Button } from "@/components/ui/button";
import useActiveMenuItem from "@/hooks/useActiveMenuItem";
import useGteNavbarStatus from "@/hooks/useGteNavbarStatus";
import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  CellphoneIcon,
  CloseIcon,
  commercialRoutes,
  corporateRoutes,
  Logo,
  LogoIcon,
  PersonFillIcon,
  PersonIcon,
  SearchIcon,
} from "@/services";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { CountrySelect } from "react-country-state-city";
import { Link, useNavigate } from "react-router-dom";
import DesktopMegaMenu from "./DesktopMegaMenu";
import MobileMegaMenu from "./MobileMegaMenu";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageOptions } from "@/services";
import Cookies from "js-cookie";
import i18next from "i18next";

const NavBarSecondary = () => {
  const { isScrolled, isRedBorder, isHome, isBlack, isBannerRoutes } =
    useGteNavbarStatus();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const {
    setIsAuthDialogOpen,
    setLoginRequiredDialogOpen,
    setAppDownloadDialogOpen,
  } = useModal();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleCountryChange = (country) => {
    navigate(
      `country-coverage/filter?region=${country?.region?.toLowerCase()}&country=${country?.name?.toLowerCase()}`
    );
  };
  const currentLanguage = Cookies.get("i18next");
  const [lang, setLang] = useState(currentLanguage);

  // console.log(currentLanguage);

  const handleLanguageChange = (language) => {
    setLang(language);
    i18next.changeLanguage(language);
  };

  const commercialMenuItems = [
    {
      name: "Home",
      path: commercialRoutes.home.path,
      activePath: commercialRoutes.home.activePath,
    },
    {
      name: "SIM/eSIM",
      path: commercialRoutes.simHome.path,
      activePath: commercialRoutes.simHome.activePath,
    },
    {
      name: "Pocket WIFI",
      path: commercialRoutes.pocketWifiHome.path,
      activePath: commercialRoutes.pocketWifiHome.activePath,
    },
    {
      name: "Promo",
      path: commercialRoutes.promo.path,
      activePath: commercialRoutes.promo.activePath,
    },
    {
      name: "FAQ",
      path: commercialRoutes.faq.path,
      activePath: commercialRoutes.faq.activePath,
    },
    {
      name: "Contact",
      path: commercialRoutes.contact.path,
      activePath: commercialRoutes.contact.activePath,
    },
  ];

  const menuItems = useActiveMenuItem(commercialMenuItems);

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
    // <header
    //   className={cn(
    //     "sticky top-0 left-0 w-full z-40 duration-300 border-b border-neutral-200",
    //     isScrolled ? "bg-black border-black-900" : ""
    //   )}
    // >
    <header
      className={cn(
        "sticky top-0 left-0 w-full z-40 duration-300",
        isScrolled || showMegaMenu ? "bg-white" : "",
        !isHome && !isBannerRoutes ? "border-b border-neutral-200" : ""
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        <nav
          className={cn(
            "w-full duration-300 flex items-center lg:gap-10 2xl:gap-15 justify-between px-4 xl:px-0 py-2 sm:py-4",
            isScrolled ? "text-black-900" : "text-black-900 xl:text-black-700"
          )}
        >
          <div className="flex w-full xl:w-auto items-center gap-2 sm:gap-6  justify-between">
            <Link to={commercialRoutes.home.path}>
              <Logo className="max-w-[100px] sm:max-w-[112px]" />
            </Link>
            {/* <div className="w-full max-w-[200px] xs:max-w-full  items-center justify-end xs:gap-1 flex xl:hidden">
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
                  <SearchIcon className="w-6 h-6" color="#757575" />
                </button>
              )}
            </div> */}
            <button
              type="butotn"
              className="outline-none border-none xl:hidden"
              onClick={() => setIsShowMenu(true)}
            >
              <MenuIcon color={isScrolled ? "#191919" : "#000"} />
            </button>
          </div>
          <div
            className={cn(
              "flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-between text-lg xl:text-sm fixed xl:!static  top-0 left-0 w-full bg-white h-screen xl:bg-transparent xl:h-auto p-4 xl:p-0 overflow-auto xl:overflow-visible duration-500",
              isShowMenu
                ? "translate-x-0"
                : "translate-x-full xl:translate-x-[auto]"
            )}
          >
            <div className="max-w-[360px] pt-10 xl:pt-0 xl:max-w-none mx-auto flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-center">
              <div className="flex xl:hidden w-full xl:w-auto items-center justify-between pb-10">
                <Link to={commercialRoutes.home.path}>
                  <Logo />
                </Link>
                <button
                  type="butotn"
                  className="outline-none border-none xl:hidden absolute top-4 right-4"
                  onClick={() => setIsShowMenu(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <ul className="flex flex-col xl:flex-row xl:items-center gap-y-1 gap-x-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={cn(
                        "menuItem hover:aftersecondary-500-600",
                        item.isActive
                          ? "after:scale-x-100 font-semibold after:bg-secondary-500 bg-gray-100 xl:bg-transparent text-secondary-500"
                          : ""
                      )}
                      onClick={() => setIsShowMenu(false)}
                      to={item.path}
                    >
                      {t(`navbar.commercial.${index}.name`)}
                    </Link>
                  </li>
                ))}
                {/* mega menu  */}
                {/* <li
                  className="hidden xl:block"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <div
                    className="flex items-center justify-between xl:justify-start cursor-pointer w-full max-w-[320px] p-3 rounded-lg xl:rounded-none hover:bg-secondary-500 xl:w-auto xl:max-w-none xl:p-0 xl:hover:text-inherit xl:hover:bg-transparent hover:text-black-900"
                    onClick={() => setShowMegaMenu(!showMegaMenu)}
                  >
                    <span>{t("navbar.megamenu.menuText")}</span>
                    <ArrowDownIcon
                      className={cn(
                        showMegaMenu ? "-rotate-180" : "-rotate-0",
                        "transform transition_common duration-150"
                      )}
                      pathClass={
                        isScrolled ? "fill-white" : "fill-neutral-black"
                      }
                    />
                  </div>
                  <DesktopMegaMenu isShow={showMegaMenu} />
                </li>
                <MobileMegaMenu setIsShowMenu={setIsShowMenu} /> */}
              </ul>

              {/* <Link
                className={cn(
                  "menuItem p-3 xl:p-0 text-black-900 xl:text-secondary-500"
                )}
                to={corporateRoutes.home.path}
              >
                {t("extraText.corporate")}
              </Link> */}
            </div>

            <div className="flex flex-col xl:flex-row xl:items-center gap-3 w-full xl:w-auto flex-1 xl:flex-none justify-end xl:justify-center mt-6 xl:mt-0">
              {/* <div className="w-full relative hidden xl:block max-w-[198px]">
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
                </div> */}
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
                  "px-6 md:py-3 bg-transparent border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-black-900 rounded-[10px] w-full max-w-[320px] xl:w-auto xl:hidden"
                }
                onClick={() => handleModalOpen("auth", true)}
              >
                <span>Login</span>
              </Button>
              <Button
                className={
                  "min-w-10 min-h-10 p-0 rounded-full hidden xl:flex bg-neutral-100 hover:bg-neutral-100"
                }
                variant="secondary"
                onClick={() => handleModalOpen("auth", true)}
              >
                <PersonFillIcon />
              </Button>
              <Button
                className={cn(
                  "px-6 md:py-3 rounded-full w-full max-w-[320px] xl:w-auto bg-main-600 text-black-900"
                )}
                onClick={() => handleModalOpen("download", true)}
              >
                {/* <CellphoneIcon color="#fff" className="w-5 h-5 shrink-0" /> */}
                <span>{t("buttonText.downloadApp")}</span>
              </Button>
              <Select onValueChange={handleLanguageChange} defaultValue={lang}>
                <SelectTrigger className="w-16 bg-white text-black font-semibold">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languageOptions.map(({ _id, label, value, flag }) => (
                    <SelectItem
                      key={_id}
                      value={value}
                      className={
                        "flex flex-row gap-1 items-center text-black font-semibold"
                      }
                    >
                      {/* <img
                    src={flag()}
                    alt={label}
                    className="w-8 h-auto inline-block"
                  />{" "} */}
                      <span>{label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBarSecondary;
