import PackageFilterList from '@/components/commercial/countryCoverage/PackageFilterList';
import StayConnectedEverywhere from '@/components/commercial/countryCoverage/StayConnectedEverywhere';
import HowItWorks from '@/components/commercial/home/HowItWorks';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryCoverageFilter = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the value of the "region" query parameter
    const regionQuery = searchParams.get('region');
    const countryQuery = searchParams.get('country');

    return (
        <div className="overflow-hidden w-full">
            <PackageFilterList params={{ regionQuery, countryQuery }} />
            <CustomerTestimonial />
            <StayConnectedEverywhere />
            <HowItWorks />
        </div>
    );
};

export default CountryCoverageFilter;
