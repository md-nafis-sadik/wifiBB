import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useTranslation } from "react-i18next";

function HowToConnect() {
  const { t } = useTranslation();

  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading={t("pocketWifi.howToConnect.heading")}
          subHeading={t("pocketWifi.howToConnect.subHeading")}
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          <InfoCard
            title={t("pocketWifi.howToConnect.steps.0.title")}
            description={t("pocketWifi.howToConnect.steps.0.description")}
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              1
            </span>
          </InfoCard>
          <InfoCard
            title={t("pocketWifi.howToConnect.steps.1.title")}
            description={t("pocketWifi.howToConnect.steps.1.description")}
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              2
            </span>
          </InfoCard>
          <InfoCard
            title={t("pocketWifi.howToConnect.steps.2.title")}
            description={t("pocketWifi.howToConnect.steps.2.description")}
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              3
            </span>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default HowToConnect;
