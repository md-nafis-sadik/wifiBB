import ProductCard from "@/components/shared/cards/ProductCard";
import { cn } from "@/lib/utils";
import { productsData } from "@/services";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Products = ({ showProductDeadline = false, className, ...props }) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const products = useMemo(() => productsData(), []);
  const { t } = useTranslation();

  return (
    <section className={cn("sec_common_80 bg-main-20", className)} {...props}>
      <div className="containerX overflow-visible">
        <h2 className="title text-center md:text-start">
          {t("productsData.title")}
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-[60px] trasition_common mt-6 md:mt-10 lg:mt-[60px]">
          <div className="w-full md:w-1/2 min-[950px]:w-[55%] flex flex-col justify-center items-start gap-6 md:gap-9">
            <div className="w-full flex flex-col gap-4 order-2 md:order-1">
              {products.cardData.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  index={index}
                  eventHandler={() => setSelectedCard(index)}
                  selected={selectedCard === index}
                  showCountDown={showProductDeadline}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 min-[950px]:w-[45%] overflow-visible relative h-[328px] md:h-auto">
            <LazyLoadImage
              src={products.productImages[selectedCard]}
              height={2000}
              width={2000}
              alt="why choose us"
              className="absolute_center w-auto h-full md:h-auto max-h-[431px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
