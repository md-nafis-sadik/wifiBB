import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function SimInformation() {
  const { t } = useTranslation();

  return (
    <Accordion type="single" className="flex flex-col gap-4" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {t(`simInformation.accordionData.items.0.title`)}
        </AccordionTrigger>
        <AccordionContent>
          {t(`simInformation.accordionData.items.0.content`)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          {t(`simInformation.accordionData.items.1.title`)}
        </AccordionTrigger>
        <AccordionContent>
          {t(`simInformation.accordionData.items.1.content`)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          {t(`simInformation.accordionData.items.2.title`)}
        </AccordionTrigger>
        <AccordionContent>
          {t(`simInformation.accordionData.items.2.content`)}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          {t(`simInformation.accordionData.items.3.title`)}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-5">
            <li>{t(`simInformation.accordionData.items.3.content.0`)}</li>
            <li>{t(`simInformation.accordionData.items.3.content.1`)}</li>
            <li>{t(`simInformation.accordionData.items.3.content.2`)}</li>
            <li>{t(`simInformation.accordionData.items.3.content.3`)}</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SimInformation;
