import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white">
            <h1 className="text-2xl font-bold text-red-600 mb-6">profo</h1>

            <div className="space-y-6 text-sm md:text-base">
                <div className="bg-[#FDF7F1] p-4 md:p-6 rounded-lg">
                    <h2 className="font-semibold mb-4">Terms of Use</h2>

                    <div className="space-y-4">
                        <p>
                            These terms of use constitute a legally binding agreement between you and Profo Real Estate Services Limited ("the Company", "We", "Profo", or "Us") regarding the use of the web application/website www.profo.com (the "Site") and any service offered or deemed to be offered by the Company including but not limited to delivery of content via the Site.
                        </p>

                        <p>
                            Your use of the Site and services provided are governed by the following Terms & Conditions which are incorporated herein. By mere use of the Site, you shall be contracting with Profo Real Estate Services Limited, the owner of the Platform.
                        </p>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3">I. Defined Terms:</h3>
                            <p className="mb-2">Unless otherwise specified, the capitalized words shall have the meanings as defined below:</p>

                            <ol className="list-decimal pl-6 space-y-2">
                                <li>"Agreement" shall mean and include the completed application form and the terms and conditions stated herein.</li>
                                <li>"Company" is defined as Profo Real Estate Services Limited, having its corporate office at Tech Hub, Level 5, Silicon Valley, CA-94025.</li>
                                <li>"Date of Commencement" is the date indicating the acceptance of the application by the User to the service.</li>
                                <li>"Profo.com" is defined as the internet website or mobile application of the Company at www.profo.com</li>
                            </ol>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3">II. Services:</h3>
                            <p className="mb-2">Company provides a number of internet-based services through its platform and shall include:</p>

                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Listing properties for sale, rent, or lease</li>
                                <li>Property search and discovery services</li>
                                <li>Digital real estate marketing solutions</li>
                                <li>Property valuation tools and analytics</li>
                                <li>Real estate market insights and reports</li>
                            </ol>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3">III. Eligibility:</h3>
                            <p>
                                You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are competent to enter into a valid and binding contract. While individuals under the age of 18 may use the Service of the site, they shall do so only with the involvement & guidance of their parents and/or legal guardians.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3">IV. Platform Usage:</h3>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Users are solely responsible for the accuracy and authenticity of their listings and profiles.</li>
                                <li>The Company reserves the right to remove any content that violates our community guidelines.</li>
                                <li>All users must complete necessary verification processes as required by local regulations.</li>
                                <li>Professional real estate agents must maintain valid licenses and credentials.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;