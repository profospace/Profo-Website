// import React from 'react';

// const TermsAndConditions = () => {
//     return (
//         <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white">
//             <h1 className="text-2xl font-bold text-red-600 mb-6">profo</h1>

//             <div className="space-y-6 text-sm md:text-base">
//                 <div className="bg-[#FDF7F1] p-4 md:p-6 rounded-lg">
//                     <h2 className="font-semibold mb-4">Terms of Use</h2>

//                     <div className="space-y-4">
//                         <p>
//                             These terms of use constitute a legally binding agreement between you and Profo Real Estate Services Limited ("the Company", "We", "Profo", or "Us") regarding the use of the web application/website www.profo.com (the "Site") and any service offered or deemed to be offered by the Company including but not limited to delivery of content via the Site.
//                         </p>

//                         <p>
//                             Your use of the Site and services provided are governed by the following Terms & Conditions which are incorporated herein. By mere use of the Site, you shall be contracting with Profo Real Estate Services Limited, the owner of the Platform.
//                         </p>

//                         <div className="mt-8">
//                             <h3 className="font-semibold mb-3">I. Defined Terms:</h3>
//                             <p className="mb-2">Unless otherwise specified, the capitalized words shall have the meanings as defined below:</p>

//                             <ol className="list-decimal pl-6 space-y-2">
//                                 <li>"Agreement" shall mean and include the completed application form and the terms and conditions stated herein.</li>
//                                 <li>"Company" is defined as Profo Real Estate Services Limited, having its corporate office at Tech Hub, Level 5, Silicon Valley, CA-94025.</li>
//                                 <li>"Date of Commencement" is the date indicating the acceptance of the application by the User to the service.</li>
//                                 <li>"Profo.com" is defined as the internet website or mobile application of the Company at www.profo.com</li>
//                             </ol>
//                         </div>

//                         <div className="mt-8">
//                             <h3 className="font-semibold mb-3">II. Services:</h3>
//                             <p className="mb-2">Company provides a number of internet-based services through its platform and shall include:</p>

//                             <ol className="list-decimal pl-6 space-y-2">
//                                 <li>Listing properties for sale, rent, or lease</li>
//                                 <li>Property search and discovery services</li>
//                                 <li>Digital real estate marketing solutions</li>
//                                 <li>Property valuation tools and analytics</li>
//                                 <li>Real estate market insights and reports</li>
//                             </ol>
//                         </div>

//                         <div className="mt-8">
//                             <h3 className="font-semibold mb-3">III. Eligibility:</h3>
//                             <p>
//                                 You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are competent to enter into a valid and binding contract. While individuals under the age of 18 may use the Service of the site, they shall do so only with the involvement & guidance of their parents and/or legal guardians.
//                             </p>
//                         </div>

//                         <div className="mt-8">
//                             <h3 className="font-semibold mb-3">IV. Platform Usage:</h3>
//                             <ol className="list-decimal pl-6 space-y-2">
//                                 <li>Users are solely responsible for the accuracy and authenticity of their listings and profiles.</li>
//                                 <li>The Company reserves the right to remove any content that violates our community guidelines.</li>
//                                 <li>All users must complete necessary verification processes as required by local regulations.</li>
//                                 <li>Professional real estate agents must maintain valid licenses and credentials.</li>
//                             </ol>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TermsAndConditions;
import React from 'react';
import { Scroll, Shield, Users } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
                {/* Header */}
                <div className="text-center pb-8 border-b border-gray-200">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms and Conditions</h1>
                    <p className="mt-4 text-gray-600">Last updated: February 2025</p>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <Scroll className="w-6 h-6 text-blue-600" />
                        <div>
                            <h3 className="font-medium">Terms of Use</h3>
                            <p className="text-sm text-gray-600">General usage guidelines</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <Shield className="w-6 h-6 text-blue-600" />
                        <div>
                            <h3 className="font-medium">Privacy & Security</h3>
                            <p className="text-sm text-gray-600">Data protection</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <Users className="w-6 h-6 text-blue-600" />
                        <div>
                            <h3 className="font-medium">User Guidelines</h3>
                            <p className="text-sm text-gray-600">Community standards</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-6 md:p-8 space-y-8">
                        {/* Introduction */}
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                These terms of use constitute a legally binding agreement between you and Profo Real Estate Services Limited ("the Company", "We", "Profo", or "Us") regarding the use of the web application/website www.profo.com (the "Site") and any service offered or deemed to be offered by the Company including but not limited to delivery of content via the Site.
                            </p>
                        </div>

                        {/* Defined Terms */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">I. Defined Terms</h2>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                {['Agreement', 'Company', 'Date of Commencement', 'Profo.com'].map((term, index) => (
                                    <div key={index} className="flex gap-4">
                                        <span className="text-blue-600 font-medium min-w-[120px]">{term}</span>
                                        <p className="text-gray-700 flex-1">
                                            {getDefinition(term)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">II. Services</h2>
                            <div className="space-y-3">
                                <p className="text-gray-700">Company provides a number of internet-based services through its platform and shall include:</p>
                                <ul className="grid gap-2 mt-4">
                                    {[
                                        'Listing properties for sale, rent, or lease',
                                        'Property search and discovery services',
                                        'Digital real estate marketing solutions',
                                        'Property valuation tools and analytics',
                                        'Real estate market insights and reports'
                                    ].map((service, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            <span className="text-gray-700">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Eligibility */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">III. Eligibility</h2>
                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                <p className="text-gray-700 leading-relaxed">
                                    You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are competent to enter into a valid and binding contract. While individuals under the age of 18 may use the Service of the site, they shall do so only with the involvement & guidance of their parents and/or legal guardians.
                                </p>
                            </div>
                        </section>

                        {/* Platform Usage */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">IV. Platform Usage</h2>
                            <div className="space-y-3">
                                {[
                                    'Users are solely responsible for the accuracy and authenticity of their listings and profiles.',
                                    'The Company reserves the right to remove any content that violates our community guidelines.',
                                    'All users must complete necessary verification processes as required by local regulations.',
                                    'Professional real estate agents must maintain valid licenses and credentials.'
                                ].map((rule, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="text-blue-600 font-medium">{index + 1}.</span>
                                        <p className="text-gray-700">{rule}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to get definitions
const getDefinition = (term) => {
    const definitions = {
        'Agreement': 'The completed application form and the terms and conditions stated herein.',
        'Company': 'Profo Real Estate Services Limited, having its corporate office at Tech Hub, Level 5, Silicon Valley, CA-94025.',
        'Date of Commencement': 'The date indicating the acceptance of the application by the User to the service.',
        'Profo.com': 'The internet website or mobile application of the Company at www.profo.com'
    };
    return definitions[term];
};

export default TermsAndConditions;