import InternetPackageCard from "@/components/shared/cards/InternetPackageCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function InternetPackage() {
  const { packages } = useSelector((state) => state.country);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [dropdownSuggestions, setDropdownSuggestions] = useState([]);

  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input) {
      // Show dropdown suggestions with country names and images
      const suggestions = packages
        .filter((pkg) =>
          pkg.country.toLowerCase().includes(input.toLowerCase())
        )
        .map((pkg) => ({ country: pkg.country, image: pkg.image }));

      setDropdownSuggestions(suggestions);
    } else {
      setDropdownSuggestions([]);
    }
  };

  const handleDropdownSelect = (country) => {
    // Set searchTerm to selected country and clear dropdown suggestions
    setSearchTerm(country);
    setDropdownSuggestions([]);
  };

  const handleSearch = () => {
    // Filter packages based on search term
    const results = packages.filter((pkg) =>
      pkg.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPackages(results);
    setDropdownSuggestions([]);
  };

  return (
    <div className="sec_common_80 px-4 min-[1176px]:px-0 bg-neutral-50">
      <SectionHeader
        heading={t("internetPackages.sectionHeading")}
        subHeading={t("internetPackages.sectionSubHeading")}
      />
      <div className="containerX flex_center flex-col">
        <div className="w-full max-w-[420px] bg-neutral-100 rounded-xl mt-6 lg:mt-10 mb-6 md:mb-8 ring-1 ring-neutral-300 relative">
          <label
            htmlFor="searchCountry"
            className="flex items-center gap-[10px] w-full py-2 pl-4 sm:pl-6 pr-2 bg-transparent rounded-xl"
          >
            <input
              id="searchCountry"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={t("internetPackages.searchPlaceholder")}
              className="flex-1 h-full w-[100px] bg-transparent border-none outline-none text-sm md:text-base text-black placeholder:text-black-600"
            />
            <Button
              onClick={() => handleSearch()}
              className={"font-medium text-sm max-h-8 md:max-h-9"}
              size={"sm"}
            >
              {t("buttonText.search")}
            </Button>
          </label>

          {dropdownSuggestions.length > 0 && (
            <div className="absolute w-full max-w-[420px] bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto z-10">
              {dropdownSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleDropdownSelect(suggestion.country)}
                  className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  <span>{suggestion.country}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {filteredPackages.length > 0 ? (
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
            {filteredPackages.slice(0, 6).map((data, index) => (
              <InternetPackageCard key={index} data={data} />
            ))}
          </div>
        ) : (
          <p className="p_common text-center w-full">
            {t("notFound.noPackage")}
          </p>
        )}
      </div>
    </div>
  );
}

export default InternetPackage;
