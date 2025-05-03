import PackageAccordion from '@/components/commercial/packageDetails/PackageAccordion';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {

    const { packageId } = useParams();
    const { packages } = useSelector(state => state.country);

    const findData = packages.find(item => item._id.toString() === packageId.toString());

    return (
        <div className="overflow-hidden w-full">
            <PackageAccordion data={findData} />
            <CustomerTestimonial />
        </div>
    );
};

export default PackageDetails;