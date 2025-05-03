import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function CartShippingCard({ item = {}, index, isActive = false, ...props }) {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "p-6 min-h-[154px] flex items-center rounded-xl border-2 cursor-pointer",
        isActive ? "border-main-600" : "border-neutral-400"
      )}
      {...props}
    >
      <div className="flex w-full items-end gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-black-900">
            {t(`shippingOptions.${index}.title`) || item?.title}
          </h2>
          {item?.subtitle && (
            <p className="text-base text-black-700">
              {t(`shippingOptions.${index}.subtitle`) || item?.subtitle}
            </p>
          )}
          <p className="text-base text-black-700">
            {t(`shippingOptions.${index}.description`) || item?.description}
          </p>
        </div>
        <span className="text-2xl font-bold text-main-600">{item?.price}</span>
      </div>
    </div>
  );
}

export default CartShippingCard;
