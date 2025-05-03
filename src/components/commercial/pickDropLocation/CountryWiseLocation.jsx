import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";
import CartLocationCard from "@/components/shared/cards/CartLocationCard";
import { images } from "@/services";
import { useEffect, useState } from "react";
import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import { useTranslation } from "react-i18next";

const CountryWiseLocation = () => {
  const { pickupLocations, cart } = useSelector((state) => state.pocketWifi);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLocationSelect = (item) => {
    dispatch(setPocketWifiCartData({ pickupLocation: item }));
  };

  const handleCountrySelect = (item) => {
    dispatch(setPocketWifiCartData({ pickupCountry: item }));
  };

  return (
    <div className="w-full containerX sec_common_60 xl:px-0" id="view-location">
      <div className="flex flex-col gap-2 relative z-10">
        <span className="label">{t("extraText.country")}</span>
        <CountrySelect
          name="country"
          defaultValue={cart?.pickupCountry}
          onChange={(value) => handleCountrySelect(value)}
          containerClassName="country-select bg-neutral-50 max-w-[418px]"
          inputClassName="!border-none !outline-none bg-transparent"
          placeHolder={t("form.selectCountry")}
        />
      </div>

      {cart?.pickupCountry && (
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-4 md:mt-6">
          <div className="w-full md:w-[317px] shrink-0 flex flex-col h-full border border-neutral-200 max-h-[520px] divide-y divide-neutral-200 overflow-auto md:rounded-l-3xl">
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
          <div className="w-full md:w-full flex-grow min-h-[180px] sm:min-h-[240px] md:min-h-full relative mt-4 md:mt-0 overflow-hidden rounded-s-xl rounded-e-xl md:rounded-s-none md:rounded-e-3xl border border-neutral-300">
            <img
              src={images.locationMap}
              alt=""
              className="absolute_center min-w-full min-h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryWiseLocation;
