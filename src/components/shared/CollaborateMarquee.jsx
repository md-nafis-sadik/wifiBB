import { images } from "@/services";
import Marquee from "@/components/ui/marquee";
import { useTranslation } from "react-i18next";

const CollaborateMarquee = () => {
  const { t } = useTranslation();

  const collaboarators = [
    { _id: 1, image: images.collaborator1, alt: "collaborator 1" },
    { _id: 2, image: images.collaborator2, alt: "collaborator 2" },
    { _id: 3, image: images.collaborator3, alt: "collaborator 3" },
    { _id: 4, image: images.collaborator4, alt: "collaborator 4" },
    { _id: 5, image: images.collaborator5, alt: "collaborator 5" },
    { _id: 6, image: images.collaborator6, alt: "collaborator 6" },
    { _id: 7, image: images.collaborator7, alt: "collaborator 7" },
  ];

  return (
    <div
      className="w-full bg-[#FFFBEC] pb-6 pt-6 md:pb-[60px] md:pt-10"
      id={"companies"}
    >
      <p className="text-center text-black-600 md:text-black-700 text-base md:text-2xl !leading-[1.4]">
        {t("collaborateMarquee.sectionHeading")}
      </p>

      <Marquee pauseOnHover className="[--duration:20s] mt-6 md:mt-7 lg:mt-8">
        {collaboarators.map(({ image, alt }, index) => (
          <img
            src={image}
            alt={alt}
            height={200}
            width={400}
            className="h-[18px] md:h-6 lg:h-10 w-auto object-contain grayscale mx-6 md:mx-8 lg:mx-[60px]"
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CollaborateMarquee;
