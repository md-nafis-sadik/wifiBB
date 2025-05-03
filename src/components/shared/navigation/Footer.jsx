import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  commercialRoutes,
  corporateRoutes,
  images,
  languageOptions,
  validateEmail,
} from "@/services";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const footerData = {
    contact: [
      {
        type: "Call",
        value: "111 222 3456",
      },
      {
        type: "Mail",
        value: "info@demo.com",
      },
    ],
    legals: [
      { title: "Terms of use", path: "#" },
      { title: "Privacy policy", path: "#" },
    ],
    menuData: [
      {
        title: "YOOWIFI",
        links: [
          { label: "About Us", path: commercialRoutes.aboutUs.path },
          { label: "FAQ", path: commercialRoutes.faq.path },
          { label: "Download the app", path: "/download" },
          { label: "Contact Us", path: commercialRoutes.contact.path },
          { label: "Terms of service", path: "/terms-of-service" },
          { label: "Privacy Policy", path: "/privacy-policy" },
        ],
      },
      {
        title: "FOR YOO",
        links: [
          {
            label: "Travel Data",
            path: commercialRoutes.pocketWifiDetails.path,
          },
          {
            label: "Country Coverage",
            path: commercialRoutes.countryCoverage.path,
          },
          { label: "Local Data", path: "/local-data" },
          {
            label: "Pickup /drop off locations",
            path: commercialRoutes.pickDropLocation.path,
          },
          { label: "Products", path: commercialRoutes.countryCoverage.path },
          { label: "How it works", path: commercialRoutes.howItWorks.path },
        ],
      },
      {
        title: "CORPORATE",
        links: [
          { label: "Iot", path: corporateRoutes.iot.path },
          { label: "Hotel", path: corporateRoutes.hotel.path },
          { label: "Travel Agency", path: corporateRoutes.travelAgency.path },
          {
            label: "Maritime Internet",
            path: corporateRoutes.maritimeInternet.path,
          },
          {
            label: "Offices/Roadshow&Event",
            path: corporateRoutes.office.path,
          },
        ],
      },
    ],
  };

  const [userEmail, setUserEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const currentLanguage = Cookies.get("i18next");
  const [lang, setLang] = useState(currentLanguage);
  const { t } = useTranslation();
  // console.log(currentLanguage);

  const handleLanguageChange = (language) => {
    setLang(language);
    i18next.changeLanguage(language);
  };

  useEffect(() => {
    setIsButtonDisabled(!validateEmail(userEmail));
  }, [userEmail]);

  return (
    <footer className="bg-black">
      <div className="container2X sec_common_80 xl:px-0 grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20">
        {/* CONTACT/LOGO */}
        <div className="col-span-1 md:col-span-5 min-[1320px]:col-span-4">
          <LazyLoadImage
            src={images.appLogo}
            alt="logo"
            className="h-[71px] w-auto"
          />
          {footerData.contact.map(({ type, value }, index) => (
            <p
              key={index}
              className="flex items-center gap-1 mt-4 md:mt-6 text-base md:text-lg !leading-[1.4]"
            >
              <span className="text-black-600">
                {t(`footer.contact.${index}.type`)} :
              </span>
              <span className="text-white font-semibold">{value}</span>
            </p>
          ))}

          <p className="text-lg md:text-2xl text-secondary-500 font-semibold !leading-[1.4] mt-5 md:mt-8">
            {t("footer.subscribeNewsLetter")}
          </p>

          <div className="flex items-center bg-neutral-900 rounded-[8px] md:rounded-[20px] p-2 shadow-md mt-3 md:mt-4 border border-neutral-800 max-w-[348px]">
            <input
              type="email"
              placeholder="Ex: user@website.com"
              className="text-sm md:text-base bg-transparent text-white placeholder-black-600 focus:outline-none w-full px-4 font-semibold"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              required
            />
            <button
              className={cn(
                "h-8 w-8 md:h-[52px] md:w-[52px] shrink-0 bg-main-600 text-white rounded-[8px] md:rounded-2xl p-2 flex items-center justify-center ml-2",
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-500"
              )}
              onClick={() => setUserEmail("")}
              disabled={isButtonDisabled}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ESSENTIAL LINKS */}
        {footerData.menuData.map(({ title, links }, menuIndex) => (
          <div
            key={menuIndex}
            className="col-span-1 md:col-span-5 min-[1320px]:col-span-2 shrink-0"
          >
            <h3 className="text-base md:text-lg text-main-600 font-bold uppercase !leading-[1.4]">
              {t(`footer.menuData.${menuIndex}.title`)}
            </h3>
            <ul className="mt-4 md:mt-6">
              {links.map(({ path }, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-black-100 font-semibold !leading-[1.2] hover:opacity-70 mt-3 md:mt-6 lg:mt-8 whitespace-normal"
                >
                  <Link to={path}>
                    {t(`footer.menuData.${menuIndex}.links.${index}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container2X sec_common_40 lg:px-4 flex flex-col md:flex-row gap-2 justify-between md:items-center">
        <p className="text-sm md:text-base text-white !leading-[1.4]">
          ©2024 <span className="font-semibold">Yoowifi</span>.{" "}
          {t("footer.copyRightText")}
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Select onValueChange={handleLanguageChange} defaultValue={lang}>
            <SelectTrigger className="w-[180px] bg-main-20">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map(({ _id, label, value, flag }) => (
                <SelectItem
                  key={_id}
                  value={value}
                  className={"flex flex-row gap-1 items-center"}
                >
                  <img
                    src={flag()}
                    alt={label}
                    className="w-8 h-auto inline-block"
                  />{" "}
                  <span>{label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-4 md:gap-8">
            {footerData.legals.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm md:text-base text-white !leading-[1.4] hover:opacity-70"
              >
                {t(`footer.legals.${index}.title`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
