import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function KnowRightPrice({ knowRightPriceRef }) {
  return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-[#F5F5F5]" ref={knowRightPriceRef}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
          >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Know the right price of your property
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                  Get the most accurate estimate of properties in any project, society or locality
              </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-md border border-teal-200 overflow-hidden p-6 md:p-8"
          >
              <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Left Side - Feature List */}
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                      <ul className="space-y-6">
                          <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                              className="flex items-start"
                          >
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </div>
                              <span className="text-lg font-medium text-gray-800">Onsite Verification</span>
                          </motion.li>

                          <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 }}
                              className="flex items-start"
                          >
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </div>
                              <div>
                                  <span className="text-lg font-medium text-gray-800">100% unbiased valuation by govt. registered</span>
                                  <br />
                                  <span className="text-lg font-medium text-gray-800">valuation partners</span>
                              </div>
                          </motion.li>

                          <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 }}
                              className="flex items-start"
                          >
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </div>
                              <span className="text-lg font-medium text-gray-800">34 Checks by Expert Valuers</span>
                          </motion.li>
                      </ul>
                  </div>

                  {/* Middle - Image */}
                  <div className="w-full md:w-1/3 flex justify-center">
                      <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="relative"
                      >
                          <img
                              src="/assets/profoAdvice/legal-home.png"
                              alt="House valuation illustration"
                              className="h-40 md:h-auto"
                          />
                          <div className="absolute top-0 right-0 -mr-16 -mt-4">
                              <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-md">
                                  <span className="text-sm text-gray-700 font-medium">Data-backed</span>
                                  <br />
                                  <span className="text-sm text-gray-700 font-medium">repository</span>
                              </div>
                          </div>
                      </motion.div>
                  </div>

                  {/* Right Side - CTA */}
                  <div className="w-full md:w-1/4 flex flex-col items-center md:items-end ">
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="text-center md:text-right mb-4"
                      >
                          <p className="text-gray-800 font-medium">
                              Insights derived from over
                              <br />
                              <span className="font-bold">10 lakh listings</span>
                          </p>
                      </motion.div>

                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full w-full md:w-auto"
                      >
                          Check Price
                      </motion.button>

                      <p className="mt-2 text-sm text-gray-600">*Get a 20% Discount</p>
                  </div>
              </div>
          </motion.div>

          <div className="mt-2 text-sm text-gray-600">
              * For detailed T&Cs <a href="#" className="text-red-600 hover:underline">Click here</a>
          </div>
      </div>
  )
}

export default KnowRightPrice