import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addZeroToNumber } from "@/services";
import { setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

function NumberOfDays() {
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const { cart, packDates } = useSelector((state) => state.sim);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTopupSelect = (item) => {
    dispatch(setSimCartData({ numberOfDays: item }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-base font-semibold text-black-700">
        {t("extraText.chooseNoOfDays")}:
      </h2>
      <div className="w-full">
        <div ref={emblaRef} className="max-w-full overflow-hidden ">
          <div className="flex  gap-4 ">
            {packDates?.map((item, index) => (
              <Button
                type="button"
                className={cn(
                  "hover:bg-main-600 hover:text-white",
                  cart?.numberOfDays == item ? "text-white font-semibold" : ""
                )}
                variant={cart?.numberOfDays == item ? "default" : "cancel"}
                onClick={() => handleTopupSelect(item)}
                key={index}
              >
                {addZeroToNumber(item)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberOfDays;
