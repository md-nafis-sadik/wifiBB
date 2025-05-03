import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import CartLocationCard from "@/components/shared/cards/CartLocationCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commercialRoutes, images } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import { CountrySelect } from "react-country-state-city";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterSelfPickup() {
  const { pickupLocations, cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isActive =
    cart?.pickupCountry?.id && cart?.pickupLocation?.code ? true : false;

  const handleNext = () => {
    navigate(commercialRoutes.routerOrderSummery.path);
    dispatch(handleNextRouterCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerShippingOption.path);
  };

  const handleLocationSelect = (item) => {
    dispatch(setRouterCartData({ pickupLocation: item }));
  };

  const handleCountrySelect = (item) => {
    dispatch(setRouterCartData({ pickupCountry: item }));
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="label">{t("extraText.country")}</span>
          <CountrySelect
            name="country"
            defaultValue={cart?.pickupCountry}
            onChange={(value) => handleCountrySelect(value)}
            containerClassName="country-select bg-neutral-50"
            inputClassName="!border-none !outline-none bg-transparent"
            placeHolder={t("form.selectCountry")}
          />
        </div>
        <Accordion type="single" className="flex flex-col gap-4" collapsible>
          <AccordionItem
            className="border-none bg-transparent"
            value="topup-device"
          >
            <AccordionTrigger className="border px-4 py-3 bg-neutral-50 text-black-600 rounded-xl text-base font-normal">
              {t("extraText.selectLocation")}
            </AccordionTrigger>
            <AccordionContent className="px-0 pt-4">
              <div className="flex flex-col h-full border border-neutral-200 max-h-[520px] divide-y divide-neutral-200 overflow-auto">
                {pickupLocations?.map((item, index) => (
                  <CartLocationCard
                    wrapperClass={
                      cart?.pickupLocation?.code == item?.code
                        ? "bg-neutral-100"
                        : ""
                    }
                    key={index}
                    onClick={() => handleLocationSelect(item)}
                    item={item}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="w-full h-[350px] rounded-2xl overflow-hidden">
          <img
            src={images.locationMap}
            alt=""
            className="w-full h-full object-cover bg-right-top"
          />
        </div>
      </div>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default RouterSelfPickup;
