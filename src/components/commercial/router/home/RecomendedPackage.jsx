import PackageCard from "@/components/shared/cards/PackageCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { RefreshIcon } from "@/services";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function RecomendedPackage() {
  const { recomandedPackages } = useSelector((state) => state.router);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [packages, setPackages] = useState(
    recomandedPackages?.slice(0, currentIndex) || []
  );
  const { t } = useTranslation();

  const handleLoadMore = () => {
    if (currentIndex < recomandedPackages?.length) {
      setIsLoadMore(true);
      const newIndex = currentIndex + 4;
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setPackages(recomandedPackages?.slice(0, newIndex) || []);
        setIsLoadMore(false);
      }, 300);
    }
  };
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading={t("recommendedPackages.heading")}
          subHeading={t("recommendedPackages.subHeading")}
          containerClassName="gap-4"
        />
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-15 text-8xl">
          {packages?.map((item, index) => (
            <PackageCard key={index} index={index} item={item} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={isLoadMore}
            variant="alert"
            type="button"
          >
            <span>{t("buttonText.loadMore")}</span>
            <RefreshIcon className={isLoadMore ? "animate-spin" : ""} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RecomendedPackage;
