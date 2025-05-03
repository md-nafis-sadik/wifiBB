import useModal from "@/hooks/useModal";
import { images } from "@/services";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroChildSlides from "./HeroChildSlides";
import ProductRouteCard from "./ProductRouteCard";
import { useTranslation } from "react-i18next";

function HeroConnected() {
  const { products } = useSelector((state) => state.shared);
  const navigate = useNavigate();
  const { setLoginRequiredDialogOpen } = useModal();
  const { t } = useTranslation();

  const handleNavigate = (path) => {
    // if (auth?.token) {
    //   navigate(path)
    // }else{
    // setLoginRequiredDialogOpen(true);
    // }
    setLoginRequiredDialogOpen(true);
  };

  return (
    <div className="flex-full min-h-full flex items-end bg-black text-white pt-16 sm:pt-28 px-4 sm:px-10 md:px-16 overflow-hidden">
      <div className="w-full max-w-[1190px] mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl leading-[115%] xl:!leading-none font-sansPro uppercase font-extrabold text-center lg:text-left">
          {t("heroHome.heroConnected.stayConnected")} <br />{" "}
          {t("heroHome.heroConnected.anyTimeAnyWhere")}
        </h1>

        <div className="mt-4 sm:mt-6 md:mt-7 ">
          <div className="flex flex-col gap-6 sm:gap-12 md:gap-14 w-full">
            <p className="text-sm sm:text-lg md:text-2xl text-black-200 text-center lg:text-left hidden sm:block">
              {t("heroHome.heroConnected.seamlessConnectivity")},{" "}
              {t("heroHome.heroConnected.anyTimeAnyWhere")}
            </p>
            <div className="grid grid-cols-3 w-full max-w-[460px] mx-auto lg:mx-0 gap-2 sm:gap-3">
              {products?.map((item, index) => (
                <ProductRouteCard
                  key={index}
                  index={index}
                  item={item}
                  onClick={() => handleNavigate(item?.path)}
                />
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end">
            <HeroChildSlides wrapperClass="pt-6 sm:pt-10 lg:pt-16" />
            <div className="w-full max-w-[210px] sm:max-w-[420px] lg:max-w-[620px] mx-auto lg:mx-0 lg:mr-16 mt-6 sm:mt-10 lg:-mt-[314px] relative">
              <img src={images.heroConnected} alt="" className="w-full" />

              <img
                src={images.discount}
                alt=""
                className="w-12 sm:w-28 lg:w-32 absolute top-6 sm:top-10 left-14 sm:left-12 md:left-auto md:-right-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroConnected;
