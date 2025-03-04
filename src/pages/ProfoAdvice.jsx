import React, { useState , useRef} from 'react';
import { motion } from 'framer-motion';
import PropertyValuationSection from '../components/PropertyValuationSection';
import KnowRightPrice from '../components/KnowRightPrice';
import PropertyValuationForm from '../components/PropertyValuationForm';
import PropertyValuationFromProfo from '../components/PropertyValuationFromProfo';
import PropertyValuerSection from '../components/PropertyValuerSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PropertyValuationFAQ from '../components/PropertyValuationFAQ';
import PropertyDealBanner from '../components/PropertyDealBanner';
import ProfoAdviceFAQAccordion from '../components/ProfoAdviceFAQAccordion';

const ProfoAdvice = () => {
    // Create refs for each section
    const knowRightPriceRef = useRef(null);
    const faqRef = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    // // Scroll to the selected section
    // const scrollToSection = (ref) => {
    //     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // };
    const scrollToSection = (ref) => {
        if (ref.current) {
            const offset = 56; // 1rem in pixels
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };

    

    return (
        <div className="max-w-7xl mx-auto">
            {/* first Section - property valuation */}
            <PropertyValuationSection scrollToSection={scrollToSection} knowRightPriceRef={knowRightPriceRef} faqRef={faqRef}/>

            {/* second section - kknow right price of property */}
                <KnowRightPrice knowRightPriceRef={knowRightPriceRef}/>



            <PropertyValuationForm />


            <PropertyValuationFromProfo />

            <PropertyValuerSection />

            <HowItWorksSection />

            <PropertyValuationFAQ />

            <PropertyDealBanner />

            <ProfoAdviceFAQAccordion faqRef={faqRef} />


        </div>
    );
};

export default ProfoAdvice;