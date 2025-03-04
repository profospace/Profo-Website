import React, { useState } from 'react';
import { motion } from 'framer-motion';

function PropertyValuationSection({ scrollToSection, knowRightPriceRef, faqRef }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            buyerBenefits: [
                "Know the real going price for the property you want to buy",
                "Learn the amount of Pre- Approved Home Loan you can avail"
            ],
            sellerBenefits: [
                "Sell your Property at Maximum Price",
                "Valuation Certificate to negotiate with buyers"
            ]
        },
        {
            buyerBenefits: [
                "Make informed investment decisions",
                "Avoid overpaying for properties"
            ],
            sellerBenefits: [
                "Understand market trends",
                "Set competitive listing prices"
            ]
        },
        {
            buyerBenefits: [
                "Compare properties effectively",
                "Plan your budget accurately"
            ],
            sellerBenefits: [
                "Attract serious buyers",
                "Reduce time on market"
            ]
        },
        {
            buyerBenefits: [
                "Identify negotiation opportunities",
                "Understand neighborhood values"
            ],
            sellerBenefits: [
                "Justify your asking price",
                "Build buyer confidence"
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  return (
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8  p-4 md:p-6 mb-16">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Property Valuation</h1>
                  <h2 className="text-xl md:text-2xl text-gray-700 mb-4">Discover the real value of your property</h2>
                  <p className="text-gray-600 mb-6">
                      Get Expert to evaluate it before you <span className="text-red-600 font-medium">Buy</span> or <span className="text-red-600 font-medium">Sell</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center justify-center relative"
                      >
                          Request a Valuation
                          <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs text-black px-2 py-0.5 rounded-full">
                              Free
                          </span>
                      </motion.button>

                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-red-600 flex items-center justify-center"
                      >
                          Download Sample Report
                          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                      </motion.button>
                  </div>

                  <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                          <span className="text-gray-700">Explore</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <nav className="flex space-x-4 text-gray-500">
                              <span onClick={()=>scrollToSection(knowRightPriceRef)} className="border-b border-gray-300 hover:text-gray-800">How it Works</span>
                              <span onClick={()=>scrollToSection()} className="border-b border-gray-300 hover:text-gray-800">Packages</span>
                              <span onClick={() => scrollToSection(faqRef)} className="border-b border-gray-300 hover:text-gray-800">FAQs</span>
                              <span onClick={()=>scrollToSection()} className="border-b border-gray-300 hover:text-gray-800">Other Services</span>
                          </nav>
                      </div>
                  </div>

                  <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4"
                  >
                      <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <h3 className="text-lg font-semibold mb-4">Benefits for Buyers</h3>
                          <ul className="space-y-4">
                              {slides[currentSlide].buyerBenefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                                          <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                          </svg>
                                      </div>
                                      <span className="text-gray-700">{benefit}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <h3 className="text-lg font-semibold mb-4">Benefits for Sellers</h3>
                          <ul className="space-y-4">
                              {slides[currentSlide].sellerBenefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                                          <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                          </svg>
                                      </div>
                                      <span className="text-gray-700">{benefit}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </motion.div>

                  <div className="flex items-center justify-start mt-6 space-x-2">
                      <button onClick={prevSlide} className="p-1 rounded-full hover:bg-gray-200">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                      </button>

                      {slides.map((_, index) => (
                          <button
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-gray-500' : 'bg-gray-300'}`}
                          ></button>
                      ))}

                      <button onClick={nextSlide} className="p-1 rounded-full hover:bg-gray-200">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                      </button>
                  </div>

                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg"
                  >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.485.709.305 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.196-.571-.346m-5.448-11.132h-.004c-2.774 0-5.004 2.230-5.004 4.992 0 1.082.287 2.135.832 3.064l-.526 1.922 1.968-.527a5.004 5.004 0 002.723.795h.004c2.774 0 5.004-2.23 5.004-4.992 0-2.763-2.228-4.992-5.004-4.992m0 1.5c1.93 0 3.493 1.562 3.493 3.492 0 1.93-1.562 3.492-3.493 3.492-1.93 0-3.493-1.561-3.493-3.492 0-1.93 1.564-3.492 3.493-3.492" />
                      </svg>
                      Enquire Now for FREE
                  </motion.div>
              </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 relative"
          >
              <div className="bg-teal-200 rounded-3xl p-6 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-yellow-300 -mr-10 -mb-10"></div>

                  <div className="relative z-10 p-2">
                      <div className="bg-white p-2 rounded-3xl border-4 border-white shadow-lg">
                          <img
                              src="/assets/profoAdvice/expert-advice-banner.png"
                              alt="Expert advice"
                              className="w-full h-auto rounded-2xl"
                          />

                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <motion.div
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                              >
                                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                              </motion.div>
                          </div>
                      </div>

                      <div className="mt-4 text-center">
                          <h2 className="text-4xl font-bold text-white">Expert Advice</h2>
                          <p className="text-3xl font-bold text-black">is the Best Advice!</p>

                          <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md inline-block"
                          >
                              Watch Ad Now
                          </motion.button>
                      </div>
                  </div>
              </div>
          </motion.div>
      </div>
  )
}

export default PropertyValuationSection