import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import DiscountDownloadApp from "@/components/shared/others/DiscountDownloadApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextPocketWifiCart,
  setPocketWifiCartData,
} from "@/store/module/pocketWifi/slice";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import { setProductActiveTab } from "@/store/module/shared/sharedSlice";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { CountrySelect } from "react-country-state-city";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function RouterRegion() {
  const { t } = useTranslation();

  const tabs = [
    {
      name: "Pocket WIFI",
      route: commercialRoutes.pocketWifiRegion.path,
      translableName: t("routerRegion.tabs.0"),
    },
    {
      name: "SIM/eSIM",
      route: commercialRoutes.simRegion.path,
      translableName: t("routerRegion.tabs.1"),
    },
    {
      name: "Router",
      route: commercialRoutes.routerRegion.path,
      translableName: t("routerRegion.tabs.2"),
    },
  ];

  const { cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { productTab } = useSelector((state) => state.shared);
  const isActive = cart?.productCountry?.id ? true : false;

  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);

  const handleCountrySelect = (value) => {
    dispatch(setPocketWifiCartData({ productCountry: value }));
    dispatch(setRouterCartData({ productCountry: value }));
    dispatch(setSimCartData({ productCountry: value }));
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setPocketWifiCartData({ [name]: value }));
    dispatch(setRouterCartData({ [name]: value }));
    dispatch(setSimCartData({ [name]: value }));
  };

  const handleNext = () => {
    if (productTab.activeTab === "Pocket WIFI") {
      navigate(commercialRoutes.pocketWifiPlan.path);
      dispatch(handleNextPocketWifiCart());
    } else if (productTab.activeTab === "SIM/eSIM") {
      navigate(commercialRoutes.simPlan.path);
      dispatch(handleNextSimCart());
    } else if (productTab.activeTab === "Router") {
      navigate(commercialRoutes.routerPlan.path);
      dispatch(handleNextRouterCart());
    }
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerHome.path);
  };

  useEffect(() => {
    dispatch(
      setProductActiveTab(tabs.find((tab) => tab.route === pathname)?.name)
    );
  }, [pathname]);

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-12">
      <div className="w-full hidden md:flex flex-col gap-5">
        <h2 className="text-base md:text-2xl !leading-[1.2] md:!leading-[1.4] font-semibold md:font-bold">
          {t("routerRegion.header.text")}
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            {tabs.map(({ name, translableName }) => (
              <Button
                key={name}
                className={cn(
                  "w-full hover:bg-secondary-500",
                  productTab.activeTab === name
                    ? "text-black-900 font-semibold"
                    : ""
                )}
                variant={
                  productTab.activeTab === name ? "secondary" : "outline"
                }
                onClick={() => dispatch(setProductActiveTab(name))}
              >
                {translableName || name.charAt(0).toUpperCase() + name.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <span className="label">
              {t(`pocketWifiRegion.form.fields.0.label`)}
            </span>
            <CountrySelect
              name="country"
              defaultValue={cart?.productCountry}
              onChange={(value) => handleCountrySelect(value)}
              containerClassName="country-select bg-neutral-50"
              inputClassName="!border-none !outline-none bg-transparent"
              placeHolder={t(`pocketWifiRegion.form.fields.0.placeholder`)}
            />
          </div>
          <Input
            name="promoCode"
            placeholder={t(`pocketWifiRegion.form.fields.1.placeholder`)}
            label={t(`pocketWifiRegion.form.fields.1.label`)}
            required
            onChange={handleInputChange}
            defaultValue={cart?.promoCode}
          />
          <Input
            name="memberId"
            placeholder={t(`pocketWifiRegion.form.fields.2.placeholder`)}
            label={t(`pocketWifiRegion.form.fields.2.label`)}
            required
            onChange={handleInputChange}
            defaultValue={cart?.memberId}
          />
          <RouterCartFooter
            prevHandler={handlePrev}
            nextHandler={handleNext}
            isActive={isActive}
          />
        </div>
      </div>
      <DiscountDownloadApp />
    </div>
  );
}

export default RouterRegion;
