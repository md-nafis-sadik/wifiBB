import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  commercialRoutes,
  corporateRoutes,
  images,
  languageOptions,
  Logo,
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
        type: "WifiBB - Your solution for reliable, global connectivity with eSIM technology.",
        value: "WifiBB - Your solution for reliable, global connectivity with eSIM technology.",
      },

    ],
    legals: [
      { title: "Download the app", path: "#" },
      { title: "Rental Agreement", path: "#" },
      { title: "Refund policy", path: "#" },
    ],

    downloads: [
      { title: "Download the app", path: "#" },
    ],
    menuData: [
      {
        title: "Services & Plans",
        links: [
          { label: "Pricing & Ordering", path: commercialRoutes.aboutUs.path },
          { label: "How to use WiFiBB", path: commercialRoutes.faq.path },
          { label: "Membership", path: "/download" },
        ],
      },
      {
        title: "Support & Deals",
        links: [
          {
            label: "Promo",
            path: commercialRoutes.pocketWifiDetails.path,
          },
          {
            label: "FAQ",
            path: commercialRoutes.countryCoverage.path,
          },
          { label: "Contact", path: "/local-data" },
       
        ],
      }
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
    <footer className="bg-white">
      <div className="container2X sec_common_80 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-16 text-center md:text-left">
        {/* CONTACT/LOGO */}
        <div className="col-span-1 md:col-span-2 min-[1320px]:col-span-2">
          <div className="flex justify-center md:justify-start mb-4">
          <Logo
                          className="max-w-[100px] sm:max-w-[112px] mx-auto md:mx-0"
                        />
                        </div>
          {footerData.contact.map(({ type, value }, index) => (
            <p
              key={index}
              className="flex items-center gap-1 mt-4 md:mt-6 text-base md:text-lg !leading-[1.4]"
            >
              <span className="text-black-00">
                {t(`footer.contact.${index}.type`)} :
              </span>
              {/* <span className="text-black-700">{value}</span> */}
              
            </p>
          ))}

          
        </div>

        {/* ESSENTIAL LINKS */}
        {footerData.menuData.map(({ title, links }, menuIndex) => (
          <div
            key={menuIndex}
            className="col-span-1 md:col-span-1 min-[1320px]:col-span-1 shrink-0"
          >
            <h3 className="text-sm md:text-base text-black-900 font-bold !leading-[1.4]">
              {t(`footer.menuData.${menuIndex}.title`)}
            </h3>
            <ul className="mt-4 md:mt-6">
              {links.map(({ path }, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-black-900 !leading-[1.2] hover:opacity-70 mt-3 md:mt-3 lg:mt-4 whitespace-normal"
                >
                  <Link to={path}>
                    {t(`footer.menuData.${menuIndex}.links.${index}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

<div
     
            className="col-span-1 md:col-span-2 min-[1320px]:col-span-2 shrink-0"
          >
            <p className="text-sm md:text-base text-secondary-500 font-semibold !leading-[1.4] ">
            {t("footer.subscribeNewsLetter")}
          </p>

          <div className="flex items-center bg-white rounded-full p-1 mt-3 md:mt-4 border border-neutral-300 max-w-[348px] mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Ex: user@website.com"
              className="text-sm md:text-base bg-transparent text-black-900 placeholder-black-600 focus:outline-none w-full px-4 placeholder:text-sm"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              required
            />
            <button
              className={cn(
                "shrink-0 bg-main-600 text-black-900 rounded-full px-5 py-3 flex items-center justify-center ml-2 text-sm font-semibold",
                isButtonDisabled
                  ? "cursor-not-allowed"
                  : "hover:bg-main-650 "
              )}
              onClick={() => setUserEmail("")}
              disabled={isButtonDisabled}
            >
              Subscribe <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          </div>
      </div>

      <div className="container2X sec_common_40 lg:px-4 flex flex-col md:flex-row gap-2 justify-between md:items-center">
        <p className="text-sm md:text-base text-black-900 !leading-[1.4] text-center">
          ©2024 <span className="font-semibold">Wifipack Ltd</span>.{" "}
          {t("footer.copyRightText")}

          {/* <div className="flex gap-4 md:gap-8">
            {footerData.legals.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm md:text-base text-black-900 !leading-[1.4] hover:opacity-70"
              >
                {t(`footer.legals.${index}.title`)}
              </Link>
            ))}
          </div> */} | Terms and Conditions |
          Rental Agreement | Refund Policy
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">


          <div className="flex gap-4 md:gap-8">
            {footerData.downloads.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm md:text-base text-black-900 !leading-[1.4] hover:opacity-70"
              >
                {/* {t(`footer.downloads.${index}.title`)} */}
                Download the app
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
