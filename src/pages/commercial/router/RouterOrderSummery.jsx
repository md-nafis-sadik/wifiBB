import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import CartPaymentCard from "@/components/shared/cards/CartPaymentCard";
import UserPaymentForm from "@/components/shared/others/UserPaymentForm";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { commercialRoutes, PlusIcon, SuccessIcon } from "@/services";
import { setRouterCartData } from "@/store/module/router/slice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterOrderSummery() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.router);
  const { userPaymentCards } = useSelector((state) => state.auth);
  const [showForm, setShowForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const isActive = isChecked && cart?.paymentCard?.id ? true : false;
  const { t } = useTranslation();

  const handlePrev = () => {
    navigate(commercialRoutes.routerShippingOption.path);
  };

  const handlePaymentCardSelect = (item) => {
    dispatch(setRouterCartData({ paymentCard: item }));
  };

  const handleNext = () => {
    setIsSuccess(true);
  };

  const handleContinue = () => {
    setIsSuccess(false);
    navigate(commercialRoutes.home.path);
  };

  return (
    <div className="w-full">
      <div className="w-full  ">
        <h4 className="text-black-900 text-base sm:text-lg md:text-2xl font-bold">
          {t("orderSummary.orderSummary")}
        </h4>
        <div className=" bg-neutral-100 rounded-2xl py-6 px-4 sm:p-8 md:p-10 divide-y divide-neutral-300 mt-4 sm:mt-6">
          {/*  */}
          <div className="pb-5 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.planName")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                {cart?.package?.title} {cart?.package?.dataSize}{" "}
                {cart?.package?.desc}
              </span>
            </div>
          </div>
          {/*  */}
          <div className="pb-5 flex flex-col gap-4  pt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.minimumCharges")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                SGD 79.00
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.deposit")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                SGD 00
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.subtotal")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                SGD 79.00
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.quantity")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                {cart?.quantity}
              </span>
            </div>
          </div>
          {/*  */}
          <div className="pb-5 flex flex-col gap-4  pt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.selfPickupDeliveryFee")}
              </span>
              <span className="text-base sm:text-lg text-black-700">FREE</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.returnDropOffFee")}
              </span>
              <span className="text-base sm:text-lg text-black-700">FREE</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg text-black-700">
                {t("orderSummary.totalDeliveryCharges")}
              </span>
              <span className="text-base sm:text-lg text-black-700">
                SGD 0.00
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between gap-3 pt-5">
            <span className="text-lg text-black-900 font-semibold">
              {t("orderSummary.totalDataCharges")}
            </span>
            <span className="text-lg text-black-900 font-semibold">SGD 79</span>
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          {userPaymentCards?.length == 0 && (
            <div>
              <h5 className="text-black-900 text-base sm:text-lg md:text-2xl font-bold">
                {t("orderSummary.paymentInformation")}
              </h5>
              <div className="px-10 py-6 rounded-2xl bg-neutral-100 text-sm sm:text-base md:text-lg text-black-600 mt-4 sm:mt-6">
                {t("orderSummary.noCardAdded")}
              </div>
            </div>
          )}
          {userPaymentCards?.length > 0 && (
            <div className="mt-4 sm:mt-6 grid lg:grid-cols-2 gap-4">
              {userPaymentCards?.map((item, index) => (
                <CartPaymentCard
                  wrapperClass={
                    cart?.paymentCard?.id == item?.id ? "bg-main-700" : ""
                  }
                  item={item}
                  key={index}
                  onClick={() => handlePaymentCardSelect(item)}
                />
              ))}

              <button
                type="button"
                className="h-full min-h-[200px] text-lg font-semibold text-black-900 bg-neutral-200 rounded-2xl flex items-center justify-center"
                onClick={() => setShowForm(true)}
              >
                <PlusIcon />
                <span>{t("orderSummary.addCard")}</span>
              </button>
            </div>
          )}
          {userPaymentCards?.length == 0 && !showForm && (
            <div className="mt-4 sm:mt-6">
              <h4 className="text-black-900 text-base sm:text-lg md:text-2xl font-bold">
                {t("orderSummary.addNewPaymentMethod")}
              </h4>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="px-10 py-6 w-full rounded-2xl bg-neutral-100 flex items-center gap-2 text-sm sm:text-base md:text-lg text-black-900 font-semibold mt-6"
              >
                <PlusIcon /> <span>{t("orderSummary.addCard")}</span>
              </button>
            </div>
          )}
          {showForm && <UserPaymentForm handler={() => setShowForm(false)} />}
          <div className="flex items-center space-x-4 mt-6 sm:mt-8 md:mt-12">
            <Switch
              checked={isChecked}
              onCheckedChange={(ev) => setIsChecked(ev)}
            />
            <p className="text-black-700 text-base sm:text-lg">
              {t("orderSummary.readAndAgree")}{" "}
              <span className="font-semibold">
                {t("orderSummary.termsAndConditions")} &{" "}
                {t("orderSummary.privacyPolicy")}.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Dialog open={isSuccess}>
        <DialogContent
          showCloseIcon={false}
          className="w-[calc(100vw-32px)] max-w-[800px] h-full max-h-[400px] sm:max-h-[500px] flex items-center justify-center p-10 bg-main-50"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <SuccessIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
            </div>
            <div className="text-center flex flex-col gap-3 sm:gap-4">
              <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700">
                {t("orderSummary.orderConfirmed")}
              </DialogTitle>
              <p className="text-base text-black-700">
                {t("orderSummary.welcomeMessage")}
              </p>
            </div>
            <DialogClose
              onClick={handleContinue}
              className="px-10 py-4 bg-main-600 text-white rounded-xl max-w-max mx-auto outline-none border-none"
            >
              {t("orderSummary.continue")}
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default RouterOrderSummery;
