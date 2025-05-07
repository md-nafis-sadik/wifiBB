import SplitText from "@/components/commercial/home/SplitText";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SectionHeader = ({
  heading,
  subHeading,
  containerClassName,
  headingClassName,
  subHeadingClassName,
  midHeading,
}) => {
  return (
    <div className={cn(containerClassName, "flex flex-col gap-4 cursor-default")}>

      <div>
        <SplitText text={heading} className={cn(headingClassName, "title")} />

        {midHeading && (
          <h2 className={cn("text-black-900 text-sm leading-[140%] md:text-2xl text-center")}>{midHeading}</h2>
        )}
      </div>
      <motion.p
        className={cn(
          subHeadingClassName, "text-xs md:text-lg !leading-[1.4] text-center text-black-600 max-w-6xl mx-auto")}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >{subHeading}</motion.p>
    </div>
  );
};

export default SectionHeader;
