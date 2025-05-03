import DataSize from "@/components/commercial/sim/cartService/DataSize";
import NumberOfDays from "@/components/commercial/sim/cartService/NumberOfDays";
import ServiceDate from "@/components/commercial/sim/cartService/ServiceDate";
import SimAccounts from "@/components/commercial/sim/cartService/SimAccounts";
import SimInformation from "@/components/commercial/sim/cartService/SimInformation";
import RouterCartFooter from "@/components/commercial/sim/RouterCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes, PlusRoundedIcon } from "@/services";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SimCartService({ className = "", multiCountry = false }) {
  const { cart } = useSelector((state) => state.sim);
  const dispatch = useDispatch();
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const { t } = useTranslation();

  const [addNewCountry, setAddNewCountry] = useState(false);

  const handleTabSelect = (value) => {
    dispatch(setSimCartData({ cartType: value }));
  };

  const handleCartQuantity = (value) => {
    dispatch(setSimCartData({ quantity: value }));
  };

  return (
    <div
      className={cn("w-full flex flex-col gap-6 overflow-hidden", className)}
    >
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black-700">
          {t("extraText.simType")}
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "sim" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "sim" ? "default" : "cancel"}
              onClick={() => handleTabSelect("sim")}
            >
              {t("buttonText.sim")}
            </Button>
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "esim" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "esim" ? "default" : "cancel"}
              onClick={() => handleTabSelect("esim")}
            >
              {t("buttonText.eSim")}
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

      {cart?.cartType == "topup" && <SimAccounts />}
      <DataSize />
      <NumberOfDays />

      <ServiceDate multiCountry={multiCountry} />
      {multiCountry && (
        <div className="flex_center flex-col">
          {addNewCountry ? (
            <ServiceDate
              multiCountry={multiCountry}
              className={"w-full my-4 md:my-6"}
              servicedateAdded
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

      <CartQuantity
        max={10}
        defaultValue={cart?.quantity}
        setter={handleCartQuantity}
        label={t("extraText.noOfSimESim") + ":"}
        labelClass="font-semibold"
      />
      <SimInformation />
    </div>
  );
}

export default SimCartService;
