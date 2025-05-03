import { Button } from "@/components/ui/button";
import { commercialRoutes, images } from "@/services";
import { servicesData } from "@/services/data";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const WhyYoowifi = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="sec_common_60 bg-white px-4 min-[1176px]:px-0">
      <div className="containerX flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-[60px]">
        <div className="w-full md:w-1/2 min-[950px]:w-2/5 overflow-visible">
          <LazyLoadImage
            src={images.pocketWifiSimRed}
            height={2000}
            width={2000}
            alt="why choose us"
            className="min-w-full min-h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 min-[950px]:w-3/5 flex flex-col justify-center items-start gap-4 md:gap-9">
          <h2 className="title text-center md:text-start w-full">
            {t("whyYooWifi.sectionHeading")}
          </h2>

          <div className="flex flex-col gap-2 md:gap-4">
            {servicesData().map(({ _id, icon }, index) => (
              <div key={_id} className="flex items-center gap-4">
                <div className="flex_center bg-[#FFF1F1] rounded-full h-8 w-8 md:h-11 md:w-11">
                  {icon}
                </div>
                <p className="text-sm md:text-lg !leading-[1.4] text-black-700">
                  {t(`whyYooWifi.servicesData.${index}.title`)}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant={"secondary"}
            size={"lg"}
            className={"h-11 md:h-[52px] !text-base"}
            onClick={() => navigate(commercialRoutes.aboutUs.path)}
          >
            {t("buttonText.aboutUs")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyYoowifi;
