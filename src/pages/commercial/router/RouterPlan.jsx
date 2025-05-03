import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import PackageCard from "@/components/shared/cards/PackageCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouterCartService from "./RouterCartService";
import { useTranslation } from "react-i18next";

function RouterPlan() {
  const { t } = useTranslation();
  const tabs = [
    { tab: "all", translableName: t("routerPlan.tabs.0") },
    { tab: "daily", translableName: t("routerPlan.tabs.1") },
    { tab: "monthly", translableName: t("routerPlan.tabs.2") },
    { tab: "multi-country", translableName: t("routerPlan.tabs.3") },
  ];
  const { recomandedPackages, cart } = useSelector((state) => state.router);
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useDispatch();
  const isActivePackage = Boolean(cart?.package?.id || cart?.topup?.planCode);
  const deviceSelect =
    cart?.cartType === "topup" ? Boolean(cart?.device?.deviceId) : true;
  const isCountryAvailable = Boolean(cart?.productCountry?.id);
  const isStartDateAvailable = Boolean(cart?.startDate);

  const isActivePlan =
    isActivePackage &&
    deviceSelect &&
    isCountryAvailable &&
    isStartDateAvailable
      ? true
      : false;
  const isActive = cart?.package?.id && isActivePlan ? true : false;
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();

  const filterByCategory = (item) => {
    if (activeTab == "all") return true;
    else return item?.category == activeTab;
  };

  const handleSelectPlan = (item) => {
    dispatch(setRouterCartData({ package: item }));
  };

  const handleNext = () => {
    navigate(commercialRoutes.routerPlanSummery.path);
    dispatch(handleNextRouterCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerRegion.path);
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-base md:text-2xl !leading-[1.2] md:!leading-[1.4] font-semibold md:font-bold">
          Select a Plan
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            {tabs.map(({ tab, translableName }) => (
              <Button
                key={tab}
                className={cn(
                  "w-full hover:bg-secondary-500",
                  activeTab === tab ? "text-black-900 font-semibold" : ""
                )}
                variant={activeTab === tab ? "secondary" : "outline"}
                onClick={() => setActiveTab(tab)}
              >
                {translableName || tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
        {/* coverage accordion */}
        <Accordion type="single" collapsible="true" defaultValue="item-1">
          <AccordionItem value={`item-1`} className="">
            <AccordionTrigger className="!text-sm md:!text-base !font-bold text-black-700">
              Country Coverage
            </AccordionTrigger>
            <AccordionContent className="!text-xs md:!text-base !leading-[120%] md:!leading-[150%] text-black-700">
              {cart && cart.package.coverage ? (
                cart.package.coverage.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < cart.package.coverage.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>*Select a package first</span>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Information */}
        <Accordion type="single" collapsible="true" defaultValue="item-1">
          <AccordionItem value={`item-1`} className="">
            <AccordionTrigger className="!text-sm md:!text-base !font-bold text-black-700">
              Information
            </AccordionTrigger>
            <AccordionContent className="!text-xs md:!text-base !leading-[120%] md:!leading-[150%] text-black-700">
              {cart && cart.package.information ? (
                <span>{cart.package.information}</span>
              ) : (
                <span>*Select a package first</span>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* packages */}
        {recomandedPackages?.filter(filterByCategory)?.map((item, index) => (
          <PackageCard
            wrapperClass={`cursor-pointer ${
              cart?.package?.id == item?.id ? "border-main-600" : ""
            }`}
            item={item}
            index={index}
            key={index}
            onClick={() => handleSelectPlan(item)}
          />
        ))}
      </div>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />

      {cart?.package?.dataSize && (
        <RouterCartService
          multiCountry={activeTab === "multi-country"}
          className="mt-6 md:mt-12"
        />
      )}
    </div>
  );
}

export default RouterPlan;
