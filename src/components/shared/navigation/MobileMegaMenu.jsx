import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckSlideIcon,
  commercialRoutes,
  GroupAffiliateIcon,
  InfoIcon,
  MapCoverageIcon,
  MapPickupIcon,
  TravelIcon,
} from "@/services";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function MobileMegaMenu({ setIsShowMenu = () => {} }) {
  const { t } = useTranslation();

  return (
    <li className="xl:hidden">
      <Accordion
        type="single"
        className="flex flex-col !bg-transparent p-0 xl:hidden"
        collapsible
      >
        <AccordionItem value="parent-1" className="bg-transparent border-none ">
          <AccordionTrigger
            className="menuItem text-lg text-black-900 [&[data-state=open]]:bg-main-600"
            iconClass="text-black-900 w-5"
          >
            <div>
              <span>
                <span>{t("navbar.megamenu.menuText")}</span>
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion
              type="single"
              className="flex flex-col !bg-transparent pl-3 xl:hidden"
              collapsible
            >
              {/* travel data  */}
              <AccordionItem
                value="item-1"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <TravelIcon className="shrink-0" />
                    </div>
                    <span>{t("navbar.megamenu.menuItems.0.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.pocketWifiDetails.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.0.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.simHome.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.0.items.1")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Country Coverage  */}
              <AccordionItem
                value="item-2"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <MapCoverageIcon className="shrink-0" />
                    </div>
                    <span>{t("navbar.megamenu.menuItems.1.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=asia`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.1.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=europe`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.1.items.1")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=america`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.1.items.2")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=australia`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.1.items.3")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=africa`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.1.items.4")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Pickup/Drop off Location  */}
              <AccordionItem
                value="item-3"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1 whitespace-nowrap">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <MapPickupIcon className="shrink-0" />
                    </div>
                    <span>{t("navbar.megamenu.menuItems.2.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.pickDropLocation.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.2.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.pickDropLocation.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.2.items.1")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* How It Works  */}
              <AccordionItem
                value="item-4"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <CheckSlideIcon className="shrink-0" />
                    </div>
                    <span> {t("navbar.megamenu.menuItems.3.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#rent`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.3.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#self-return`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.3.items.1")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#topup`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.3.items.2")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Affiliate  */}
              <AccordionItem
                value="item-5"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <GroupAffiliateIcon className="shrink-0" />
                    </div>
                    <span>{t("navbar.megamenu.menuItems.4.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.affiliate.path}/#join-affiliate`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.4.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={`${commercialRoutes.affiliate.path}/#lets-talk`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.4.items.1")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* How To  */}
              <AccordionItem
                value="item-6"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-black-900 text-lg font-normal flex items-center justify-between"
                  iconClass="text-black-900 w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <InfoIcon className="shrink-0" />
                    </div>
                    <span>{t("navbar.megamenu.menuItems.5.title")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.howToSetupSim.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.5.items.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-black-900" : "text-black-900"
                          }`
                        }
                        to={commercialRoutes.howToConnectPocketWifi.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        {t("navbar.megamenu.menuItems.5.items.1")}
                      </NavLink>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}

export default MobileMegaMenu;
