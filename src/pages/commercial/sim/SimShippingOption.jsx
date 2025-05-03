import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import CartShippingCard from "@/components/shared/cards/CartShippingCard";
import DeliveryAddress from "@/components/shared/others/DeliveryAddress";
import { commercialRoutes } from "@/services";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SimShippingOption() {
  const { shippingOptions } = useSelector((state) => state.shared);
  const { cart } = useSelector((state) => state.sim);
  const dispatch = useDispatch();
  const isActive =
    cart?.shipping &&
    (cart?.shipping?.title == "Self Pickup" || cart?.shippingAddress?.id);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSelectCard = (item) => {
    dispatch(setSimCartData({ shipping: item }));
  };

  const handleLocationSelect = (item) => {
    dispatch(setSimCartData({ shippingAddress: item }));
  };

  const handleNext = () => {
    if (cart?.shipping?.title == "Self Pickup") {
      navigate(commercialRoutes.simSelfPickup.path);
    } else {
      navigate(commercialRoutes.simOrderSummery.path);
    }
    dispatch(handleNextSimCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerPlanSummery.path);
  };

  return (
    <div action="#" className="w-full">
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold sm:font-bold text-black-900">
        {t("extraText.selectShippingOption")}
      </h2>
      <div className="flex flex-col gap-6 mt-4 sm:mt-5 md:mt-6">
        {shippingOptions?.map((item, index) => (
          <CartShippingCard
            key={index}
            index={index}
            item={item}
            onClick={() => handleSelectCard(item)}
            isActive={cart?.shipping?.shippingId == item?.shippingId}
          />
        ))}
        {cart?.shipping?.title && cart?.shipping?.title !== "Self Pickup" && (
          <DeliveryAddress
            selectedItem={cart?.shippingAddress}
            handleSelect={handleLocationSelect}
          />
        )}
      </div>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default SimShippingOption;
