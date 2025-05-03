import { images, VectorSvg } from "@/services";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroChildSlides from "./HeroChildSlides";
import ProductRouteCard from "./ProductRouteCard";
import useModal from "@/hooks/useModal";
import { useTranslation } from "react-i18next";

function HeroTravel() {
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
    <div className="flex-full flex items-end min-h-0 bg-main-600 text-white pt-20 sm:pt-28 px-4 sm:px-10 md:px-16 overflow-hidden relative pb-6 sm:pb-12 ">
      <div className="w-full max-w-[1312px] mx-auto">
        <h1 className="w-full max-w-[1000px] mx-auto text-3xl sm:text-5xl md:text-7xl xl:text-8xl leading-[115%] xl:!leading-none font-sansPro uppercase font-extrabold text-center relative z-20">
          {t("heroHome.heroTravel.travelCompanion")}
        </h1>

        <div className="flex flex-col-reverse lg:flex-col gap-20 lg:gap-0">
          <div className="w-[320px] sm:w-[520px] lg:max-w-[620px] -mt-10 mx-auto relative duration-300 z-20">
            <img
              src={images.heroTravel}
              alt=""
              className="w-full bg-center duration-300"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between relative gap-6 z-50 mt-10 md:mt-12 lg:-mt-44">
            <div className="grid grid-cols-3 w-full max-w-[460px]  mx-auto lg:mx-0 gap-2 sm:gap-3">
              {products?.map((item, index) => (
                <ProductRouteCard
                  key={index}
                  item={item}
                  index={index}
                  onClick={() => handleNavigate(item?.path)}
                  wrapperClass="bg-white-rgb text-black-900"
                  simColor="#000"
                  routerColor="#000"
                  pocketWifiColor="#000"
                />
              ))}
            </div>
            <div className="hidden lg:flex justify-center lg:justify-start ">
              <HeroChildSlides
                selectedClass="bg-black"
                defaultClass="bg-white"
                wrapperClass="!p-0"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-center lg:justify-start relative z-40 -mt-28">
          <HeroChildSlides
            selectedClass="bg-black"
            defaultClass="bg-white"
            wrapperClass="!p-0"
          />
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 h-[320px] bg-mainGradient z-30"></div>
      <VectorSvg className="w-[320px] sm:w-[540px] lg:w-[766px] h-[380px] sm:h-[540px] lg:h-[766px] absolute right-0 bottom-0 z-10" />
    </div>
  );
}

export default HeroTravel;
