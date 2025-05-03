import CountryWiseLocation from "@/components/commercial/pickDropLocation/CountryWiseLocation";
import ReturnDevice from "@/components/commercial/pickDropLocation/ReturnDevice";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const PickDropLocation = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <HeroCommon title={t("pickDropLocation.heroTitle")} />
      <ReturnDevice />
      <CountryWiseLocation />
    </Fragment>
  );
};

export default PickDropLocation;
