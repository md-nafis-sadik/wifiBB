import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import { commercialRoutes } from "@/services";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterPlanSummery() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.router);
  const date = new Date(cart?.startDate);
  const formattedDate = date.toISOString().split("T")[0];
  const { t } = useTranslation();

  const handlePrev = () => {
    navigate(commercialRoutes.routerPlan.path);
  };

  const handleNext = () => {
    navigate(commercialRoutes.routerShippingOption.path);
  };

  return (
    <div className="w-full">
      <div className="w-full py-6 px-4 sm:p-8 md:p-10 bg-neutral-100 rounded-2xl">
        <h4 className="text-black-900 text-2xl font-bold">
          {t("extraText.planSummary")}
        </h4>
        <div className="mt-3 sm:mt-6 md:mt-12 pb-5 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-base sm:text-lg text-black-700">
              {t("extraText.chosenPlan")}
            </span>
            <span className="text-base sm:text-lg text-black-700">
              {cart?.package?.title} {cart?.package?.dataSize}{" "}
              {cart?.package?.desc}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-base sm:text-lg text-black-700">
              {t("extraText.dataAvailable")}
            </span>
            <span className="text-base sm:text-lg text-black-700">1GB/Day</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-base sm:text-lg text-black-700">
              {t("extraText.startDate")}
            </span>
            <span className="text-base sm:text-lg text-black-700">
              {formattedDate}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-base sm:text-lg text-black-700">
              {t("extraText.quantity")}
            </span>
            <span className="text-base sm:text-lg text-black-700">
              {cart?.quantity}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 pt-5 border-t border-neutral-300">
          <span className="text-lg text-black-900 font-semibold">
            {t("extraText.totalAmount")}
          </span>
          <span className="text-lg text-black-900 font-semibold">
            SGD {cart?.package?.packPrice}
          </span>
        </div>
      </div>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={true}
      />
    </div>
  );
}

export default RouterPlanSummery;
