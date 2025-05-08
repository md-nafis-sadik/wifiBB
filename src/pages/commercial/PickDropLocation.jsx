import CountryWiseLocation from "@/components/commercial/pickDropLocation/CountryWiseLocation";
import ReturnDevice from "@/components/commercial/pickDropLocation/ReturnDevice";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { images } from "@/services";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const PickDropLocation = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      {/* <HeroCommon title={t("pickDropLocation.heroTitle")} /> */}
      <ReturnDevice />
      <CountryWiseLocation />
      <div className="w-full"><img src={images.selectBuildings} className="rounded-sm max-w-7xl mx-auto"/></div>
    </Fragment>
  );
};

export default PickDropLocation;
