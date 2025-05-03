import DataSize from "@/components/commercial/router/cartService/DataSize";
import ServiceDate from "@/components/commercial/router/cartService/ServiceDate";
import WifiDevices from "@/components/commercial/router/cartService/WifiDevices";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes, PlusRoundedIcon } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterCartService({ className = "", multiCountry = false }) {
  const { cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const { t } = useTranslation();

  const [addNewCountry, setAddNewCountry] = useState(false);

  const handleTabSelect = (value) => {
    dispatch(setRouterCartData({ cartType: value }));
  };

  const handleCartQuantity = (value) => {
    dispatch(setRouterCartData({ quantity: value }));
  };

  return (
    <div className={cn("w-full flex flex-col gap-6", className)}>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black-700">
          {t("extraText.service")}
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "rental" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "rental" ? "default" : "cancel"}
              onClick={() => handleTabSelect("rental")}
            >
              {t("buttonText.rental")}
            </Button>
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "topup" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "topup" ? "default" : "cancel"}
              onClick={() => handleTabSelect("topup")}
            >
              {t("buttonText.topUp")}
            </Button>
          </div>
        </div>
      </div>

      {cart?.cartType == "rental" ? <DataSize /> : <WifiDevices />}
      <ServiceDate multiCountry={multiCountry} />
      {multiCountry && (
        <div className="flex_center flex-col">
          {addNewCountry ? (
            <ServiceDate
              multiCountry={multiCountry}
              servicedateAdded
              className={"w-full my-4 md:my-6"}
            />
          ) : (
            <button
              className="text-sm md:text-base !leading-normal font-medium flex items-center justify-center gap-3 md:gap-[14px] hover:opacity-75"
              onClick={() => setAddNewCountry(true)}
            >
              <PlusRoundedIcon className="h-6 w-6 md:h-8 md:w-8" />
              <span>{t("buttonText.addACountry")}</span>
            </button>
          )}
        </div>
      )}

      <div>
        <span className="label mb-2 md:mb-4">
          {t("extraText.noOfRentalDevices")}
        </span>
        <CartQuantity
          max={10}
          defaultValue={cart?.quantity}
          setter={handleCartQuantity}
        />
      </div>
    </div>
  );
}

export default RouterCartService;
