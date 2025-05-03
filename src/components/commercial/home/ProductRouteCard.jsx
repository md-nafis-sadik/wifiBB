import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { useTranslation } from "react-i18next";

function ProductRouteCard({
  item,
  wrapperClass = "",
  pocketWifiColor = "",
  routerColor = "",
  simColor = "",
  index,
  ...props
}) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "py-5 px-2 sm:px-4 rounded-xl bg-black-800 flex flex-col text-center items-center justify-center gap-2 cursor-pointer w-full",
        wrapperClass
      )}
      {...props}
    >
      <div className="w-8 h-8 flex items-center justify-center mx-auto">
        {item?.icon({ pocketWifiColor, routerColor, simColor })}
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-semibold leading-[140%]">
        {t(`productsData.cardData.${index}.title`)}
      </h4>
      <button
        type="button"
        className="outline-none flex items-center justify-center gap-1 xs:gap-2 text-main-600 text-xs xs:text-sm font-semibold"
      >
        <span>{t("buttonText.buyNow")}</span>
        <ArrowUpRightIcon className="w-4 " color="#d81f22" />
      </button>
    </div>
  );
}

export default ProductRouteCard;
