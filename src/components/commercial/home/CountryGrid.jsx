import { AustraliaFlag, BelgiumFlag, CroatiaFlag, FranceFlag, GermanyFlag, GreeceFlag, IrelandFlag, ItalyFlag, MaldivesFlag, NepalFlag, SpainFlag, SwedenFlag, SwitzerlandFlag, TuvaluFlag, UaeFlag, VietnamFlag } from "@/services";
import React, { useState, useEffect } from "react";
import SplitText from "./SplitText";

const CountryGrid = () => {
  const countries = [
    { name: "France", flag: <FranceFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Spain", flag: <SpainFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Italy", flag: <ItalyFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Germany", flag: <GermanyFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Greece", flag: <GreeceFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Belgium", flag: <BelgiumFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Croatia", flag: <CroatiaFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Ireland", flag: <IrelandFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Sweden", flag: <SwedenFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Switzerland", flag: <SwitzerlandFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Australia", flag: <AustraliaFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "UAE", flag: <UaeFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Vietnam", flag: <VietnamFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Maldives", flag: <MaldivesFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Nepal", flag: <NepalFlag  className="w-9 md:w-12" />, price: 49 },
    { name: "Tuvalu", flag: <TuvaluFlag  className="w-9 md:w-12" />, price: 49 },
  ];

  const [totalCols, setTotalCols] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newTotalCols = 4;
      if (width < 640) newTotalCols = 1;
      else if (width < 768) newTotalCols = 2;
      else if (width < 1024) newTotalCols = 3;
      setTotalCols(newTotalCols);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#F0F9FF] py-12 lg:py-28 px-4 sm:px-8">
      <div className="mb-8">

        <SplitText text="Worldwide Destinations" className="text-3xl md:text-5xl font-bold text-black mb-4 px-4 text-center" />
                <div className="text-black-600 text-center text-sm lg:text-base">Uncover top travel spots around the world, from iconic landmarks to hidden gems.</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
        {countries.map((country, index) => {
          const totalRows = Math.ceil(countries.length / totalCols);
          const currentRow = Math.floor(index / totalCols);
          const isLastRow = currentRow === totalRows - 1;
          const isLastCol = (index + 1) % totalCols === 0;

          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-8 border-blue-200 
                ${!isLastRow ? "border-b" : ""} 
                ${!isLastCol ? "border-r" : ""}`}
            >
              {country.flag}
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {country.name}
                </p>
                <p className="text-sm text-gray-500">HKD {country.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryGrid;