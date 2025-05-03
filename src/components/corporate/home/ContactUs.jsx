import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const { aboutUs } = useSelector((state) => state.pocketWifi);
  const { t } = useTranslation();

  return (
    <section className="sec_common_60 ">
      <div className="container2X ">
        <div className="grid md:grid-cols-3 gap-3 lg:gap-10">
          {aboutUs.map((item, index) => (
            <article
              key={index}
              className="lg:py-10 lg:px-6 p-3 border-2 border-neutral-200 rounded-xl lg:rounded-3xl"
            >
              <div className="p-3 lg:p-[10px] bg-main-50 w-max rounded-[21.33px]">
                {item.icon()}
              </div>

              <h4 className="mt-6 mb-2 md:mb-3 text-black-900 text-[18px] lg:text-[28px] font-semibold lg:font-bold leading-[140%] lg:leading-[110%]">
                {t(`pocketWifi.aboutUs.${index}.title`)}
              </h4>

              <p className="text-black-600 text-sm lg:text-[18px] leading-[140%]">
                {t(`pocketWifi.aboutUs.${index}.content`)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 lg:mt-10 flex justify-center">
          <Button size="lg" onClick={() => navigate(`/contact`)}>
            {t("buttonText.contactUs")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
