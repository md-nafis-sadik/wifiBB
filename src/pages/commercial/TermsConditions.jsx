import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/shared/others/SectionHeader";

export default function TermsConditions() {
    const { t } = useTranslation();
    const termsData = t("termsModal", { returnObjects: true });

    // Make sure termsOfUse and privacyPolicy exist and are arrays
    const termsOfUse = termsData.termsOfUse || [];
    const privacyPolicy = termsData.privacyPolicy || [];

    return (
        <div className="overflow-hidden w-full containerX mx-auto px-4 md:px-6">
            <div className="py-14 md:py-20">
                <SectionHeader
                    heading={termsData.header}
                    subHeading={termsData.subheader}
                    containerClassName={"gap-4 md:gap-[18px] mb-12"}
                />

                <div className="rounded-2xl space-y-6 text-gray-800 text-base leading-relaxed">
                    {/* Terms of Use Section */}
                    <h3 className="font-semibold text-lg mb-4">
                        {termsData.section1Header?.heading}
                    </h3>
                    {termsOfUse.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold mb-2">{section.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
                            {section.ul && section.ul.map((item, i) => (
                                <ul key={i} className="list-disc pl-6 space-y-1 mt-2">
                                    <li>{item.li}</li>
                                    {item.ul && item.ul.map((subitem, j) => (
                                        <ul key={j} className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                                            {Object.values(subitem).map((val, k) => (
                                                <li key={k}>{val}</li>
                                            ))}
                                        </ul>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    ))}

                    {/* Privacy Policy Section */}
                    <h3 className="font-semibold text-lg mt-6 mb-4">
                        {termsData.section2Header?.heading}
                    </h3>
                    {privacyPolicy.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold mb-2">{section.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
                            {section.ul && section.ul.map((item, i) => (
                                <ul key={i} className="list-disc pl-6 space-y-1 mt-2">
                                    <li>{item.li}</li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
