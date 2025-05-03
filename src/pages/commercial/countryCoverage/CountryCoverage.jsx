import CountryList from '@/components/commercial/countryCoverage/CountryList';
import Products from '@/components/commercial/home/Products';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryCoverage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Get the value of the "region" query parameter
    const regionQuery = searchParams.get('region');

    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                isShowBannerBottom={false}
            />
            <CountryList query={regionQuery} />
            <Products />
            <CustomerTestimonial />
        </div>
    );
};

export default CountryCoverage;