import useModal from "@/hooks/useModal";
import { images } from "@/services";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroChildSlides from "./HeroChildSlides";
import ProductRouteCard from "./ProductRouteCard";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function HeroDiscover() {
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
    <div className="flex-full flex items-end bg-yellow-400 text-black-900 pt-20 sm:pt-28 px-4 sm:px-10 md:px-16 overflow-hidden relative">
      <div className="w-full max-w-[1190px] mx-auto relative z-50">
        <h1 className="max-w-[686px] mx-auto lg:mx-0 text-3xl sm:text-5xl md:text-7xl leading-[115%] xl:!leading-none font-sansPro uppercase font-extrabold text-center lg:text-left">
          {t("heroHome.heroDiscover.discover")}
        </h1>

        <div className="mt-10 md:mt-12 ">
          <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 w-full">
            <div className="grid grid-cols-3 w-full max-w-[460px] mx-auto lg:mx-0 gap-2 sm:gap-3">
              {products?.map((item, index) => (
                <ProductRouteCard
                  key={index}
                  item={item}
                  index={index}
                  onClick={() => handleNavigate(item?.path)}
                  wrapperClass="bg-white-rgb"
                  simColor="#000"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-start mt-60 md:mt-80 lg:mt-0">
            <HeroChildSlides />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[640px] xl:max-w-[760px]  absolute -bottom-8 md:-bottom-40 lg:-bottom-64 right-0 z-30 duration-300">
        <img src={images.heroDiscover} alt="" className="w-full duration-300" />
      </div>
    </div>
  );
}

export default HeroDiscover;
