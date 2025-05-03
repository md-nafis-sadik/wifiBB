import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function PackageCard({ item = {}, index, wrapperClass = "", ...props }) {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "px-4 py-5 rounded-xl border border-neutral-400 flex flex-col md:flex-row items-start gap-4 sm:gap-5",
        wrapperClass
      )}
      {...props}
    >
      <div className="w-14 aspect-square bg-main-50 p-1 rounded-lg flex items-center  justify-center">
        <img
          src={item?.image}
          alt="icon"
          className="w-full h-full object-contain rounded"
        />
      </div>
      <div className="w-full flex items-end gap-2">
        <div className="w-full">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black-700">
            {t(`recommendedPackages.packageList.${index}.title`)}
          </h3>
          {item?.features?.map((_, featureIndex) => (
            <p
              key={featureIndex}
              className="text-sm sm:text-base text-black-700"
            >
              {t(
                `recommendedPackages.packageList.${index}.features.${featureIndex}`
              )}
            </p>
          ))}
        </div>
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black-700 whitespace-nowrap">
          SGD {item?.packPrice}
        </h4>
      </div>
    </div>
  );
}

export default PackageCard;
