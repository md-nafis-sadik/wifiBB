import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const GeneralCard = ({
  title,
  description,
  buttonText = "View Locations",
  stepsButton,
  onClick = () => {},
  className = "",
}) => {
  const location = useLocation();
  const pickDropPage = location?.pathname === "/pick-drop-location";
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "p-6 sm:pl-8 md:pl-10 rounded-2xl bg-neutral-100 h-full flex flex-col justify-between gap-4",
        className
      )}
    >
      <div>
        <h3 className="text-sm sm:text-base md:text-2xl font-bold text-black-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%] mt-2 sm:mt-3 md:mt-4">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to={
            pickDropPage
              ? "#view-location"
              : `/pick-drop-location/#view-location`
          }
        >
          <Button
            className="p-2.5 sm:px-4 md:px-6 sm:py-3 md:py-4 rounded sm:rounded-xl !text-xs md:!text-base"
            onClick={onClick}
          >
            <span>{buttonText}</span>
            <ArrowUpRightIcon className="w-[14px] h-[14px] md:w-6 md:h-6" />
          </Button>
        </Link>

        {stepsButton && (
          <Link to={stepsButton.to}>
            <Button
              variant="secondary"
              className={
                "p-2.5 py-[11px] sm:px-4 md:px-6 sm:py-[13px] md:py-4 lg:py-[17px] rounded sm:rounded-xl !text-xs md:!text-base"
              }
            >
              {t(`buttonText.viewSteps`) || stepsButton.text}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GeneralCard;
