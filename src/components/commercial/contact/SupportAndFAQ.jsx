import SectionHeader from "@/components/shared/others/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SupportAndFAQ = ({ data }) => {
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  const { t } = useTranslation();

  const middleIndex = Math.ceil(data?.length / 2);

  useEffect(() => {
    setFirstHalf(data?.slice(0, middleIndex));
    setSecondHalf(data?.slice(middleIndex));
  }, []);

  const handleOpenChange = (value) => {
    setOpenItem(value === openItem ? null : value);
  };

  return (
    <div className="px-4 2xl:px-0 sec_common_80">
      <div className="sec_common_60 pb-3 md:pb-10 lg:pb-20 container3X rounded-2xl md:rounded-3xl bg-[#ececec] px-3 md:px-6 min-[1320px]:px-0">
        <SectionHeader
          heading={t("faqs.heading")}
          subHeading={t("faqs.subHeading")}
          containerClassName={"gap-4 md:gap-[18px]"}
        />

        <div className="containerX xl:px-0 grid md:grid-cols-2 gap-y-3 md:gap-10 mt-4 md:mt-8 lg:mt-[60px]">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className={cn("space-y-3 md:space-y-6 rounded-xl")}
          >
            {firstHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="h-fit bg-white py-4"
                key={index}
              >
                <AccordionTrigger className="text-start text-black-900 text-base md:text-lg font-semibold !leading-[1.2] md:!leading-[1.4] px-4 md:px-6">
                  {t(`faqs.content.${index}.question`)}
                </AccordionTrigger>
                <AccordionContent
                  className={
                    "text-xs md:text-lg font-normal !leading-[1.2] md:!leading-[1.4] text-black-600 px-4 md:px-6"
                  }
                >
                  {t(`faqs.content.${index}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleOpenChange}
            className={cn("space-y-3 md:space-y-6 rounded-xl")}
          >
            {secondHalf?.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1 + firstHalf.length}`}
                className="h-fit bg-white py-4"
                key={index}
              >
                <AccordionTrigger className="text-start text-black-900 text-base md:text-lg font-semibold !leading-[1.2] md:!leading-[1.4] px-4 md:px-6">
                  {t(`faqs.content.${index + middleIndex}.question`)}
                </AccordionTrigger>
                <AccordionContent
                  className={
                    "text-xs md:text-lg font-normal !leading-[1.2] md:!leading-[1.4] text-black-600 px-4 md:px-6"
                  }
                >
                  {t(`faqs.content.${index + middleIndex}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col items-center mt-4 md:mt-8 lg:mt-[60px]">
          <h2 className="text-main-600 text-2xl md:text-5xl font-bold !leading-[1.4] md:!leading-[1.1] text-center">
            {t("faqs.footer.heading")}
          </h2>
          <p className="p_common mt-[18px] text-center">
            {t("faqs.footer.description")}
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://tidycal.com/netrosystems/discussion"
              target="_blank"
            >
              <Button
                variant="secondary"
                className={
                  "!text-base font-semibold !leading-[1.2] w-[177px] h-[52px]"
                }
              >
                {t("buttonText.getInTouch")}
              </Button>
            </a>

            <a
              href="https://tidycal.com/netrosystems/discussion"
              target="_blank"
            >
              <Button color="white" className={"h-[52px] w-[52px]"}>
                <ArrowUpRightIcon className={"shrink-0 !h-6 !w-6"} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportAndFAQ;
