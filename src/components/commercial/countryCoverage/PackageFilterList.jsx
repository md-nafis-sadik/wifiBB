import InternetPackageCard from "@/components/shared/cards/InternetPackageCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { CloseIcon, FilterIcon, HorizontalLineIcon } from "@/services";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PackageFilterList = ({ params }) => {
  const { packages } = useSelector((state) => state.country);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { t } = useTranslation();

  // Set the selected regions and countries based on the query parameters
  useEffect(() => {
    if (params.regionQuery) {
      setSelectedRegions([params.regionQuery]);
    }
    if (params.countryQuery) {
      setSelectedCountries([params.countryQuery]);
    }
  }, [params.regionQuery, params.countryQuery]);

  // Reset the current page whenever the filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedRegions,
    selectedCountries,
    selectedProduct,
    selectedPlan,
    searchText,
  ]);

  // Filter packages based on searchText, selectedRegions, selectedCountries, selectedProduct, and selectedPlan
  const filteredPackages = packages.filter((pkg) => {
    // Check if any filter is active
    const isAnyFilterActive =
      selectedRegions.length > 0 ||
      selectedCountries.length > 0 ||
      selectedProduct.length > 0 ||
      selectedPlan.length > 0 ||
      searchText !== "";
    if (!isAnyFilterActive) return true;

    // At least one filter is active, apply all filters
    const matchesSearchText =
      searchText === "" ||
      pkg.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesRegion =
      selectedRegions.length === 0 || selectedRegions.includes(pkg.region);
    const matchesCountry =
      selectedCountries.length === 0 || selectedCountries.includes(pkg.country);
    const matchesProduct =
      selectedProduct.length === 0 || selectedProduct.includes(pkg.type);
    const matchesPlan =
      selectedPlan.length === 0 || selectedPlan.includes(pkg.plan);

    // Return true only if all active filter conditions are met
    return (
      matchesSearchText &&
      matchesRegion &&
      matchesCountry &&
      matchesProduct &&
      matchesPlan
    );
  });

  // Paginate the packages
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
  const paginatedPackages = filteredPackages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const toggleFilterDrawer = () => setIsFilterOpen(!isFilterOpen);

  return (
    <section className="containerX">
      <div className="sec_common_80 xl:!px-0">
        <SectionHeader
          heading={t("countryCoverage.sectionHeader.heading")}
          subHeading={t("countryCoverage.sectionHeader.subHeading")}
        />

        {/* mobile searbox & filter active menu */}
        <div className="my-4 flex gap-2 lg:hidden">
          <SearchBox searchText={searchText} setSearchText={setSearchText} />

          <button
            className="shrink-0 w-11 h-11 flex justify-center items-center border boder-[#E0E0E0] rounded-lg"
            onClick={toggleFilterDrawer}
          >
            <FilterIcon />
          </button>
        </div>
        <div
          className={cn(
            isFilterOpen ? "translate-x-0" : "translate-x-full",
            "fixed top-0 right-0 w-full max-w-[250px] lg:max-w-[350px] bg-white shadow z-50 transform transition-transform duration-500 ease-in-out h-full overflow-y-auto lg:hidden"
          )}
        >
          <FilterSidebar
            selectedRegions={selectedRegions}
            setSelectedRegions={setSelectedRegions}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <button
            onClick={toggleFilterDrawer}
            className="absolute top-4 right-4 text-black"
          >
            <CloseIcon color="#191919" className="w-5 h-5" />
          </button>
        </div>

        {/* end mobile sidebar */}

        {/* main part */}
        <div className="flex lg:gap-4 xl:gap-8 lg:mt-10">
          <FilterSidebar
            className="hidden lg:block w-[260px] xl:w-[304px]"
            selectedRegions={selectedRegions}
            setSelectedRegions={setSelectedRegions}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <div className="flex-1 ">
            <div className="grid grid-cols-2 gap-2 md:gap-3 xl:gap-x-5 xl:gap-y-4 h-max">
              {paginatedPackages.map((data, index) => (
                <InternetPackageCard key={index} data={data} type={2} />
              ))}
            </div>

            {packages.length > itemsPerPage && totalPages > 1 && (
              <div className="mt-8 w-full">
                <Pagination className="flex justify-end">
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="mx-2"
                    disabled={currentPage === 1}
                  />
                  <PaginationContent>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="mx-2"
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageFilterList;

// filter sidebar component
const FilterSidebar = ({
  className,
  selectedRegions,
  setSelectedRegions,
  selectedCountries,
  setSelectedCountries,
  selectedProduct,
  setSelectedProduct,
  selectedPlan,
  setSelectedPlan,
  searchText,
  setSearchText,
}) => {
  const { regionList, countries } = useSelector((state) => state.country);

  const [isRegionListOpen, setIsRegionListOpen] = useState(true);
  const [isCountryListOpen, setIsCountryListOpen] = useState(true);
  const [isProductListOpen, setIsProductListOpen] = useState(true);
  const [isPlanTypeListOpen, setIsPlanTypeListOpen] = useState(true);

  const [totalCountryShow, setTotalCountryShow] = useState(5);

  const handleClear = () => {
    setSelectedRegions([]);
    setSelectedCountries([]);
    setSelectedProduct([]);
    setSelectedPlan([]);
    setSearchText("");
  };

  return (
    <div
      className={cn(
        "p-3 lg:p-6 border border-neutral-200 lg:rounded-2xl h-max",
        className
      )}
    >
      <h4 className="text-black-900 text-xl lg:text-[28px] font-extrabold leading-[120%]">
        {t("extraText.filters")}
      </h4>

      <div className="my-4 xl:my-8">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 h-max overflow-y-auto">
        <FilterList
          title="Region"
          isOpen={isRegionListOpen}
          setIsOpen={setIsRegionListOpen}
          datas={regionList}
          selected={selectedRegions}
          setSelected={setSelectedRegions}
        />

        <FilterList
          title="Country"
          isOpen={isCountryListOpen}
          setIsOpen={setIsCountryListOpen}
          datas={countries}
          selected={selectedCountries}
          setSelected={setSelectedCountries}
          activeIsMoreButton={true}
          totalDataShow={totalCountryShow}
          setTotalDataShow={setTotalCountryShow}
        />

        <FilterList
          title="Products"
          isOpen={isProductListOpen}
          setIsOpen={setIsProductListOpen}
          datas={[
            { _id: 1, name: "Pocket Wifi", value: "pocket-wifi" },
            { _id: 2, name: "Sim", value: "sim" },
            { _id: 3, name: "eSim", value: "esim" },
          ]}
          selected={selectedProduct}
          setSelected={setSelectedProduct}
        />

        <FilterList
          title="Plan Type"
          isOpen={isPlanTypeListOpen}
          setIsOpen={setIsPlanTypeListOpen}
          datas={[
            { _id: 1, name: "5GB 7 days", value: "5gb-7days" },
            { _id: 2, name: "10GB 10 days", value: "10gb-10days" },
            { _id: 3, name: "15GB 15 days", value: "15gb-15days" },
            { _id: 4, name: "20GB 20 days", value: "20gb-20days" },
            { _id: 5, name: "BASIC Daypass", value: "basic-daypass" },
          ]}
          selected={selectedPlan}
          setSelected={setSelectedPlan}
        />
      </div>

      <div className="mt-4 lg:mt-5">
        <Button
          variant="secondary"
          className="!text-sm lg:!text-base !py-2 lg:!py-4 w-full !font-semibold rounded lg:rounded-xl"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

// FilterList component for re-using
const FilterList = ({
  isOpen,
  setIsOpen,
  datas,
  title,
  selected,
  setSelected,
  key = "value",
  activeIsMoreButton = false,
  totalDataShow,
  setTotalDataShow,
}) => {
  // Toggle list
  const toggle = (paramName, setSelected) => {
    setSelected((prevSelected) =>
      prevSelected.includes(paramName)
        ? prevSelected.filter((name) => name !== paramName)
        : [...prevSelected, paramName]
    );
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <div className="flex justify-between gap-x-4">
        <p className="text-black-900 text-sm lg:text-[18px] font-semibold">
          {title}:
        </p>

        <button onClick={() => setIsOpen(!isOpen)}>
          <HorizontalLineIcon />
        </button>
      </div>

      <div className="border-b border-[#EEE]"></div>

      <ul
        className={cn(
          "space-y-2 lg:space-y-4 transition-all duration-300 ",
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {datas.slice(0, totalDataShow).map((data, index) => (
          <li
            key={index}
            className="text-black-700 flex gap-2 items-center text-xs lg:text-base"
          >
            <Checkbox
              type="checkbox"
              checked={selected.includes(data[key])}
              onCheckedChange={() => toggle(data[key], setSelected)}
            />
            <span
              onClick={() => toggle(data[key], setSelected)}
              className="cursor-pointer "
            >
              {data.name}
            </span>
          </li>
        ))}
      </ul>

      {/* more button */}
      {activeIsMoreButton && datas.length > totalDataShow && isOpen && (
        <button
          className={cn(
            "px-4 lg:px-6 py-2 lg:py-3 border border-black-900 rounded lg:rounded-xl w-max text-xs lg:text-sm font-medium",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setTotalDataShow((prev) => prev + 5)}
        >
          More
        </button>
      )}
    </div>
  );
};

const SearchBox = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder={t(`extraText.searchAnything`)}
      className="w-full h-11 lg:h-[52px] px-4 rounded-xl border border-neutral-300 outline-none bg-neutral-100 placeholder:text-black-600 text-black-900"
    />
  );
};
