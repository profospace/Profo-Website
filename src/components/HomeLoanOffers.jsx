import React from 'react';

const HomeLoanOffers = () => {
    const banks = [
        {
            name: "LIC Housing Finance",
            image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/177_Logo.png"
        },
        {
            name: "PNB Housing Finance Limited",
            image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/53_Logo.png"
        },
        {
            name: "Piramal Capital & Housing Finance",
            image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/31_Logo.png"
        },
        {
            name: "Bandhan Bank",
            image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/89_Logo.png"
        },
        {
            name: "Bank of Maharashtra",
            image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/93_Logo.png"
        },
        // {
        //     name: "Indian Bank",
        //     image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/51_Logo.png"
        // },
        // {
        //     name: "Reliance",
        //     image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/205_Logo.png"
        // },
        // {
        //     name: "Edelweiss Housing Finance",
        //     image: "https://mbprodimages.s3.ap-south-1.amazonaws.com/images/homeloanData/bankLogo/123_Logo.png"
        // }
    ];

    return (
        <div className="mt-8 p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Home Loan Offers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {banks.map((bank, index) => (
                    <div
                        key={index}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center cursor-pointer bg-white"
                    >
                        <div className="w-full h-20 flex items-center justify-center mb-2">
                            <img
                                src={bank.image}
                                alt={bank.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <p className="text-xs text-gray-700 font-medium line-clamp-2">
                            {bank.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeLoanOffers;