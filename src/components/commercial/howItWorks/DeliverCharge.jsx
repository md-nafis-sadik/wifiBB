import SectionHeader from "@/components/shared/others/SectionHeader";
import { howItWorksData } from "@/services";
import React from "react";
import { useTranslation } from "react-i18next";

const DeliverCharge = () => {
  const { t } = useTranslation();

  return (
    <section className="containerX">
      <div className="sec_common_60 xl:!px-0">
        <SectionHeader
          heading={t(
            "howItWorksPage.deliveryChargesSection.sectionHeader.heading"
          )}
          subHeading={t(
            "howItWorksPage.deliveryChargesSection.sectionHeader.subHeading"
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-4 md:mt-10">
          {howItWorksData.map((item, index) => (
            <article
              key={index}
              className="md:p-6 p-4 border border-neutral-300 rounded-xl md:rounded-3xl md:min-h-[200px] flex justify-between flex-row md:flex-col items-end md:items-start"
            >
              <div>
                <p className="text-base md:text-[18px] font-semibold leading-[140%] text-black-900">
                  {t(
                    `howItWorksPage.deliveryChargesSection.howItWorksData.${index}.type`
                  ) || item.type}{" "}
                  <span className="text-black-700 text-xs md:text-sm">
                    {t(
                      `howItWorksPage.deliveryChargesSection.howItWorksData.${index}.typeSuffix`
                    ) || item.typeSuffix}
                  </span>
                </p>

                <p className="text-sm md:text-[18px] leading-[140%] text-black-600 mt-2">
                  {t(
                    `howItWorksPage.deliveryChargesSection.howItWorksData.${index}.duration`
                  ) || item.duration}
                </p>
              </div>

              <h2 className="text-2xl md:text-4xl text-main-600 font-bold leading-[140%]">
                {item.price === 0 ? "Free" : `$${item.price}`}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverCharge;
