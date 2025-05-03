import GeneralCard from "@/components/shared/cards/GeneralCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useTranslation } from "react-i18next";

const ReturnDevice = () => {
  const cardData = [
    {
      title: "Singpost Drop-Off",
      description:
        "When you rent the device, a pre-paid return label will be included in the package. You can use this label to easily mail the device back. After returning it, you’ll likely receive an email confirmation once the return is processed.",
      buttonText: "View Locations",
    },
    {
      title: "Pickup Drop off Locations",
      description:
        "With Yoowifi, you can effortlessly pick up your device at any of our designated locations and return it at one of our 30+ convenient drop-off points across the island. This streamlined process guarantees a hassle-free experience, allowing you to stay connected wherever your travels take you!",
      buttonText: "View Locations",
    },
  ];

  const { t } = useTranslation();

  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading={t("pocketWifi.howToReturn.heading")}
          subHeading={t("pocketWifi.howToReturn.subHeading")}
          containerClassName="gap-4"
        />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          {cardData.map((card, index) => (
            <GeneralCard
              key={index}
              title={
                t(`pocketWifi.howToReturn.cardData.${index}.title`) ||
                card.title
              }
              description={
                t(`pocketWifi.howToReturn.cardData.${index}.description`) ||
                card.description
              }
              buttonText={t("buttonText.viewLocations") || card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnDevice;
