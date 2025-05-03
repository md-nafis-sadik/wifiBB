import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const InternetPackageCard = ({ data, type = 1 }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-[8px] md:rounded-3xl p-2 md:p-4 ring-[2px] ring-neutral-200 hover:ring-0 shadow-none hover:shadow-card-primary transition_common">
      <div className="w-full aspect-[1.06/1] relative overflow-hidden rounded-[4px] md:rounded-2xl">
        <LazyLoadImage
          src={data?.image}
          alt={"middel east"}
          height={1000}
          width={2000}
          className="absolute_center min-h-full min-w-full object-cover"
        />
      </div>

      <h2 className="text-base md:text-[28px] !leading-[1.1] font-bold text-center mt-2 md:mt-4">
        {type === 1 ? "Middle East" : data?.name}
      </h2>

      <hr className="my-1 md:my-4 h-[1px] bg-neutral-100" />

      <div className="flex justify-between items-center gap-2 md:gap-4">
        <div className="flex flex-col">
          <p className="text-[10px] sm:text-sm md:text-base text-black-700 !leading-normal">
            {t("extraText.from")}
          </p>
          <h2 className="text-[10px] sm:text-sm md:text-2xl lg:text-[28px] text-black-700 font-semibold md:font-bold !leading-[1.2] md:!leading-[1.1]">
            SGD {data?.priceStart}
          </h2>
        </div>
        <Button
          className={cn(
            type === 1
              ? "!px-2 !py-[5px] md:!px-6 md:!py-4"
              : "text-base !px-2 !py-1 md:!px-6 md:!py-4",
            "text-[10px] md:text-base !leading-[1.2] rounded-sm md:rounded-xl"
          )}
          onClick={() =>
            navigate(
              type === 1 ? `/country-coverage` : `/package/details/${data?._id}`
            )
          }
        >
          {type === 1
            ? t("buttonText.findOutMore")
            : t("buttonText.seeDetails")}
        </Button>
      </div>
    </div>
  );
};

export default InternetPackageCard;
