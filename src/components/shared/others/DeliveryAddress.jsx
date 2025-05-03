import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@/services";
import { removeUserLocation, setUserLocation } from "@/store/module/auth/slice";
import { useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";
import UserLocationCard from "../cards/UserLocationCard";
import { useTranslation } from "react-i18next";

function DeliveryAddress({
  handleSelect = () => {},
  selectedItem = {},
  ...props
}) {
  const { userLocations } = useSelector((state) => state.auth);
  const [isAddressNotAdded, setIsAddressNotAdded] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form?.address?.value;
    const appartment = form?.appartment?.value;
    const province = form.province.value;
    const postCode = form.postCode.value;
    if (!country?.id) {
      alert("Please select country");
    }
    const data = {
      id: userLocations?.length + 1,
      name,
      phoneNumber,
      address,
      appartment,
      province,
      postCode,
      country,
      state,
    };
    dispatch(setUserLocation(data));
    setIsAddressNotAdded(true);
  };

  const handleRemove = (event, index) => {
    event.stopPropagation();
    dispatch(removeUserLocation(index));
    handleSelect({});
  };

  return (
    <div className="">
      <h2 className="text-base sm:text-lg ">
        {t("extraText.deliveryAddress")}
      </h2>
      <div
        className={cn(
          "flex flex-col gap-6",
          userLocations?.length > 0 ? "mt-6" : ""
        )}
      >
        {userLocations?.map((item, index) => (
          <UserLocationCard
            {...props}
            wrapperClass={
              selectedItem?.id === item?.id
                ? "border-main-600"
                : "border-neutral-400"
            }
            handleSelect={() => handleSelect(item)}
            handleRemove={(event) => handleRemove(event, index)}
            key={index}
            item={item}
          />
        ))}
      </div>
      {!isAddressNotAdded && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-8 border border-main-600 rounded-xl gap-6 mt-6"
        >
          <div className="">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black-900">
              {t("extraText.addAddress")}
            </h3>
            <div className="w-full flex gap-4 mt-5 mb-4 sm:mb-8 md:mb-12">
              <Button
                className="w-full sm:max-w-[200px] text-sm font-semibold hover:bg-secondary-500 hover:text-black-900"
                type="button"
                variant={activeTab === "home" ? "secondary" : "outline"}
                onClick={() => setActiveTab("home")}
              >
                {t("buttonText.homeorAddress")}
              </Button>
              <Button
                className="w-full sm:max-w-[200px] text-sm font-semibold hover:bg-secondary-500 hover:text-black-900"
                type="button"
                variant={activeTab === "hotel" ? "secondary" : "outline"}
                onClick={() => setActiveTab("hotel")}
              >
                {t("buttonText.hotel")}
              </Button>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black-900">
              {t("extraText.addressDetails")}
            </h3>
            <div className="flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-6 md:mt-8">
              <Input
                label={t("form.fullName")}
                placeholder={t("form.enterNameHere")}
                name="name"
                required
              />
              <Input
                label={t("form.phoneNumber")}
                placeholder={t("form.enterNumber")}
                name="phoneNumber"
                required
              />
              <div className="flex flex-col gap-2">
                <span className="label">{t("form.country")}</span>
                <CountrySelect
                  name="country"
                  defaultValue={country}
                  onChange={(value) => setCountry(value)}
                  containerClassName="country-select bg-neutral-50"
                  inputClassName="!border-none !outline-none bg-transparent"
                  placeHolder={t("form.selectCountry")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="label">{t("form.state")}</span>
                <StateSelect
                  name="country"
                  countryid={country?.id}
                  defaultValue={state}
                  onChange={(value) => setState(value)}
                  containerClassName="country-select bg-neutral-50"
                  inputClassName="!border-none !outline-none bg-transparent"
                  placeHolder={t("form.selectCountry")}
                />
              </div>
              {activeTab === "home" && (
                <>
                  <Input
                    label={t("form.address")}
                    placeholder={t("form.enterFullAddress")}
                    name="address"
                    required={activeTab == "home" ? true : false}
                  />
                  <Input
                    label={t("form.apartment")}
                    placeholder={t("form.enterApartmentDetails")}
                    name="appartment"
                    required={activeTab == "home" ? true : false}
                  />
                </>
              )}
              <Input
                label={t("form.province")}
                placeholder={t("form.enterProvince")}
                name="province"
                required
              />
              <Input
                label={t("form.postalCode")}
                placeholder={t("form.enterPostalCode")}
                name="postCode"
                required
              />
            </div>
            <div className="mt-4 sm:mt-8 md:mt-12 flex justify-end">
              <Button type="submit">{t("buttonText.saveAddress")}</Button>
            </div>
          </div>
        </form>
      )}
      {isAddressNotAdded && (
        <button
          type="button"
          className="flex items-center gap-2 text-base font-semibold text-main-600 mt-6"
          onClick={() => setIsAddressNotAdded(false)}
        >
          <PlusIcon color="#D81F22" />
          <span>{t("extraText.addNewAddress")}</span>
        </button>
      )}
    </div>
  );
}

export default DeliveryAddress;
