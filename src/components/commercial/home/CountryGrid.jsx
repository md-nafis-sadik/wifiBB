import { FranceFlag, SpainFlag } from "@/services";
import React from "react";

const CountryGrid = () => {
  const countries = [
    { name: "France", flag: <FranceFlag />, price: 49 },
    { name: "Spain", flag: <SpainFlag />, price: 49 },
    { name: "Italy", flag: <FranceFlag />, price: 49 },
    { name: "Germany", flag: <FranceFlag />, price: 49 },
    { name: "Greece", flag: <FranceFlag />, price: 49 },
    { name: "Belgium", flag: <FranceFlag />, price: 49 },
    { name: "Croatia", flag: <FranceFlag />, price: 49 },
    { name: "Ireland", flag: <FranceFlag />, price: 49 },
    { name: "Sweden", flag: <FranceFlag />, price: 49 },
    { name: "Switzerland", flag: <FranceFlag />, price: 49 },
    { name: "Australia", flag: <FranceFlag />, price: 49 },
    { name: "UAE", flag: <FranceFlag />, price: 49 },
    { name: "Vietnam", flag: <FranceFlag />, price: 49 },
    { name: "Maldives", flag: <FranceFlag />, price: 49 },
    { name: "Nepal", flag: <FranceFlag />, price: 49 },
    { name: "Tuvalu", flag: <FranceFlag />, price: 49 },
  ];

  return (
    <div className="bg-[#F0F9FF] py-12 lg:py-28 px-4 sm:px-8">
      <div className="mb-8">
        <div className="text-black text-5xl font-semibold text-center mb-4">Top Destinations</div>
        <div className="text-black-600 text-center">Discover the most sought-after locations for unforgettable experiences.</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {countries.map((country, index) => {
          const totalCols = 4;
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
                <p className="text-sm font-semibold text-gray-800">{country.name}</p>
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
