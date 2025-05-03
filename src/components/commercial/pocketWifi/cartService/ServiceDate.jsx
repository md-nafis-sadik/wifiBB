import DatePicker from "@/components/shared/others/DatePicker";
import { cn } from "@/lib/utils";
import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import { CountrySelect } from "react-country-state-city";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

function ServiceDate({ multiCountry, className, servicedateAdded = false }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.pocketWifi);
  const { t } = useTranslation();

  const handleCountrySelect = (value) => {
    dispatch(
      setPocketWifiCartData(
        servicedateAdded
          ? { productCountrySecondary: value }
          : { productCountry: value }
      )
    );
  };

  const handleStartDate = (value) => {
    dispatch(
      setPocketWifiCartData(
        servicedateAdded ? { startDateSecondary: value } : { startDate: value }
      )
    );
  };

  const handleEndDate = (value) => {
    dispatch(
      setPocketWifiCartData(
        servicedateAdded ? { endDateSecondary: value } : { endDate: value }
      )
    );
  };

  return (
    <div className={cn("px-4 py-6 bg-neutral-100 rounded-xl", className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="label">{t("form.country")}</span>
          <CountrySelect
            name="country"
            defaultValue={
              servicedateAdded
                ? cart?.productCountrySecondary
                : cart?.productCountry
            }
            onChange={(value) => handleCountrySelect(value)}
            containerClassName="country-select bg-neutral-50 rounded-xl"
            inputClassName="!border-none !outline-none bg-transparent"
            placeHolder={t("form.selectCountry")}
          />
        </div>
        <div className="flex items-center gap-4">
          <DatePicker
            date={servicedateAdded ? cart?.startDateSecondary : cart?.startDate}
            setDate={handleStartDate}
            wrapper="flex-col items-start gap-2"
            label={t("form.startDate")}
          />
          {multiCountry && (
            <DatePicker
              date={servicedateAdded ? cart?.endDateSecondary : cart?.endDate}
              setDate={handleEndDate}
              wrapper="flex-col items-start gap-2"
              label={t("form.endDate")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceDate;
