// import React, { useEffect, useState } from 'react';
// import { AlertCircle } from 'lucide-react';

// const Card = ({ children, className = "" }) => (
//     <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
// );

// const CardHeader = ({ children }) => (
//     <div className="px-6 py-4 border-b border-gray-200">{children}</div>
// );

// const CardTitle = ({ children, className = "" }) => (
//     <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
// );

// const CardContent = ({ children, className = "" }) => (
//     <div className={`p-6 ${className}`}>{children}</div>
// );

// const Button = ({ children, onClick, disabled, className = "" }) => (
//     <button
//         onClick={onClick}
//         disabled={disabled}
//         className={`px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
//     >
//         {children}
//     </button>
// );

// const SliderInput = ({ label, title, value, setValue, min, max, step, format, leftLabel, rightLabel }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const percentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="">
//             <div className='flex gap-1 flex-col'>
//                 <div className="flex justify-between items-center">
//                     <label className="text-sm font-medium">{label}</label>
//                     <div className='flex gap-4 items-center'>
//                         {title && <span className='px-1 border-[0.5px] rounded-sm font-semibold text-xs bg-yellow-100 border-yellow-800'>{title && title}</span>}
//                         <span className="text-sm font-medium"> {format ? format(value) : value}</span>
//                     </div>
//                 </div>
//                 <div className="relative w-full h-2">
//                     <div className="absolute w-full h-[2px] bg-gray-200 rounded-full" />
//                     <div
//                         className="absolute h-[2px] bg-black rounded-full"
//                         style={{ width: `${percentage}%` }}
//                     />
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         step={step}
//                         value={value}
//                         onChange={handleChange}
//                         className="absolute w-full h-2 opacity-0 cursor-pointer"
//                         style={{
//                             WebkitAppearance: 'none',
//                             appearance: 'none',
//                             background: 'transparent',
//                             cursor: 'pointer',
//                             zIndex: 10
//                         }}
//                     />
//                     <div
//                         className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-[7px]"
//                         style={{ left: `calc(${percentage}% - 8px)`, top: '0' }}
//                     />
//                 </div>
//             </div>
//             <div className="flex justify-between text-xs text-gray-500">
//                 <span>{leftLabel}</span>
//                 <span>{rightLabel}</span>
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price }) => {
//     const [loanAmount, setLoanAmount] = useState(0);
//     const [interestRate, setInterestRate] = useState(8.5);
//     const [tenure, setTenure] = useState(20);
//     const [loading, setLoading] = useState(false);

//     useEffect(
//         () => {
//             setLoanAmount(price)
//         }, [price]
//     )

//     const calculateEMI = () => {
//         const principal = loanAmount;
//         const ratePerMonth = interestRate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const totalPayment = calculateEMI() * tenure * 12;
//     const totalInterest = totalPayment - loanAmount;

//     const saveCalculation = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('/api/user/emi-calculations', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     propertyId: 'current-property',
//                     loanAmount,
//                     interestRate,
//                     tenure,
//                     monthlyEMI: calculateEMI()
//                 }),
//             });

//             if (!response.ok) throw new Error('Failed to save calculation');
//         } catch (error) {
//             console.error('Error saving EMI calculation:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatIndianCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     return (
//         <Card className="w-full max-w-4xl">
//             <CardHeader>
//                 <CardTitle className="text-center">Home Loan EMI Calculator</CardTitle>
//             </CardHeader>
//             <CardContent className="">
//               <div className='flex justify-between'>
//                     <div>
//                         <SliderInput
//                             label="Loan Amount"
//                             title="Property Price"
//                             value={loanAmount}
//                             setValue={setLoanAmount}
//                             min={100000}
//                             max={40000000}
//                             step={100000}
//                             format={formatIndianCurrency}
//                             leftLabel="₹1 Lakh"
//                             rightLabel="₹4 Crore"
//                         />

//                         <SliderInput
//                             label="Interest Rate (%)"
//                             value={interestRate}
//                             setValue={setInterestRate}
//                             min={5}
//                             max={20}
//                             step={0.1}
//                             format={(val) => `${val}%`}
//                             leftLabel="5%"
//                             rightLabel="20%"
//                         />

//                         <SliderInput
//                             label="Loan Tenure (Years)"
//                             value={tenure}
//                             setValue={setTenure}
//                             min={1}
//                             max={30}
//                             step={1}
//                             format={(val) => `${val} years`}
//                             leftLabel="1 year"
//                             rightLabel="30 years"
//                         />

//                     </div>

//                     <div className='bg-[#F3F3F6] px-5 py-6 rounded-md flex flex-col gap-6'>
//                         <div className="rounded-lg">
//                             <div className="grid grid-cols-3 gap-4">
//                                 <div className="text-center">
//                                     <p className="text-sm text-gray-600">Monthly EMI</p>
//                                     <p className="text-xl font-bold">{formatIndianCurrency(calculateEMI())}</p>
//                                 </div>
//                                 <div className="text-center">
//                                     <p className="text-sm text-gray-600">Total Interest</p>
//                                     <p className="text-xl font-bold">{formatIndianCurrency(totalInterest)}</p>
//                                 </div>
//                                 <div className="text-center">
//                                     <p className="text-sm text-gray-600">Total Payment</p>
//                                     <p className="text-xl font-bold">{formatIndianCurrency(totalPayment)}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <Button
//                             onClick={saveCalculation}
//                             disabled={loading}
//                             className="w-full"
//                         >
//                             {loading ? 'Saving...' : 'Save Calculation'}
//                         </Button>
//                     </div>
//               </div>

//                 <div className="flex items-start gap-2 text-sm text-gray-500">
//                     <AlertCircle className="w-4 h-4 mt-0.5" />
//                     <p>This is only an approximate EMI calculation. Actual EMI may vary based on bank's processing fees, additional charges, and exact interest computation method.</p>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// export default EMICalculator;


// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-8">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const sliderPercentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <div className="relative w-full h-2">
//                 <div className="absolute w-full h-[2.5px] bg-gray-200 rounded-full" />
//                 <div
//                     className="absolute h-[2.5px] bg-black rounded-full"
//                     style={{ width: `${sliderPercentage}%` }}
//                 />
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={handleChange}
//                     className="absolute w-full h-2 opacity-0 cursor-pointer"
//                 />
//                 <div
//                     className="absolute w-5 h-5 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-1/2"
//                     style={{ left: `calc(${sliderPercentage}% - 10px)`, top: '50%' }}
//                 />
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price }) => {
//     const [loanAmount, setLoanAmount] = useState(0);
//     const [downPayment, setDownPayment] = useState(0);
//     const [tenure, setTenure] = useState(20);
//     const [loading, setLoading] = useState(false);
//     const [percentage, setPercentage] = useState(5)

//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3); // 30% default down payment
//     }, [price]);

//     // Calculate down payment percentage
//     const downPaymentPercentage = ((downPayment / loanAmount) * 100).toFixed(0);

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const secondaryEMI = calculateEMI(loanAmount - downPayment, percentage);
//     // const newBuildingEMI = calculateEMI(loanAmount - downPayment, 5.1);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={setLoanAmount}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={setDownPayment}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                         <div className='p-5'>
//                             <div className="flex justify-between items-center mb-1">
//                                 <h3 className="text-xl">Estimated Monthly EMI</h3>
//                                 <span className="text-xl font-bold">{formatCurrency(secondaryEMI)}</span>
//                             </div>
//                             <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                             <p className="text-gray-600 text-sm">payment per month</p>
//                         </div>

//                         <SliderInput
//                             label="Loan Percentage"
//                             value={percentage}
//                             setValue={setPercentage}
//                             min={1}
//                             max={30}
//                             step={1}
//                             format={(val) => `${val} %`}
//                         />

//                         {/* <div>
//                             <div className="flex justify-between items-center mb-1">
//                                 <h3 className="text-xl">New building</h3>
//                                 <span className="text-xl font-bold text-green-500">{formatCurrency(newBuildingEMI)}</span>
//                             </div>
//                             <p className="text-gray-600 text-sm">Preferential mortgage from 5.1%</p>
//                             <p className="text-gray-600 text-sm">payment per month</p>
//                         </div> */}

//                         {/* <button className="w-full bg-gray-900 text-white rounded-xl py-4 text-lg font-medium hover:bg-black transition-colors">
//                             Find me a new building
//                         </button> */}

//                         <p className="text-center text-sm text-gray-500 px-2">
//                             The calculation is for informational purposes only and is not a public offer.
//                         </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;


// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-8">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const sliderPercentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <div className="relative w-full h-2">
//                 <div className="absolute w-full h-[2.5px] bg-gray-200 rounded-full" />
//                 <div
//                     className="absolute h-[2.5px] bg-black rounded-full"
//                     style={{ width: `${sliderPercentage}%` }}
//                 />
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={handleChange}
//                     className="absolute w-full h-2 opacity-0 cursor-pointer"
//                 />
//                 <div
//                     className="absolute w-5 h-5 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-1/2"
//                     style={{ left: `calc(${sliderPercentage}% - 10px)`, top: '50%' }}
//                 />
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price = 10000000 }) => {
//     const [loanAmount, setLoanAmount] = useState(price);
//     const [downPayment, setDownPayment] = useState(price * 0.3);
//     const [tenure, setTenure] = useState(20);
//     const [percentage, setPercentage] = useState(5);

//     // Update loan amount and down payment when price changes
//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3);
//     }, [price]);

//     // Handler for loan amount changes
//     const handleLoanAmountChange = (newAmount) => {
//         setLoanAmount(newAmount);
//         // Maintain the same down payment percentage when loan amount changes
//         const currentDownPaymentPercent = (downPayment / loanAmount);
//         setDownPayment(Math.round(newAmount * currentDownPaymentPercent));
//     };

//     // Handler for down payment changes
//     const handleDownPaymentChange = (newDownPayment) => {
//         // Ensure down payment stays within 10-90% of loan amount
//         const minDownPayment = loanAmount * 0.1;
//         const maxDownPayment = loanAmount * 0.9;
//         const clampedDownPayment = Math.min(Math.max(newDownPayment, minDownPayment), maxDownPayment);
//         setDownPayment(clampedDownPayment);
//     };

//     // Calculate down payment percentage
//     const downPaymentPercentage = ((downPayment / loanAmount) * 100).toFixed(0);

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={handleLoanAmountChange}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={handleDownPaymentChange}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                             <h3 className="text-xl">Estimated Monthly EMI</h3>
//                             <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
//                         </div>
//                         <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                         <p className="text-gray-600 text-sm">payment per month</p>
//                     </div>

//                     <SliderInput
//                         label="Loan Percentage"
//                         value={percentage}
//                         setValue={setPercentage}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val}%`}
//                     />

//                     <p className="text-center text-sm text-gray-500 px-2 mt-4">
//                         The calculation is for informational purposes only and is not a public offer.
//                     </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;


// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-8">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const sliderPercentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <div className="relative w-full h-2">
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={handleChange}
//                     className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer z-20"
//                     style={{
//                         WebkitAppearance: 'none',
//                         MozAppearance: 'none'
//                     }}
//                 />
//                 <div className="absolute w-full h-[2.5px] bg-gray-200 rounded-full z-10" />
//                 <div
//                     className="absolute h-[2.5px] bg-black rounded-full z-10"
//                     style={{ width: `${sliderPercentage}%` }}
//                 />
//                 <div
//                     className="absolute w-5 h-5 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-1/2 pointer-events-none z-10"
//                     style={{ left: `calc(${sliderPercentage}% - 10px)`, top: '50%' }}
//                 />
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price = 10000000 }) => {
//     const [loanAmount, setLoanAmount] = useState(price);
//     const [downPayment, setDownPayment] = useState(price * 0.3);
//     const [tenure, setTenure] = useState(20);
//     const [percentage, setPercentage] = useState(5);

//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3);
//     }, [price]);

//     const handleLoanAmountChange = (newAmount) => {
//         setLoanAmount(newAmount);
//         const currentDownPaymentPercent = (downPayment / loanAmount);
//         setDownPayment(Math.round(newAmount * currentDownPaymentPercent));
//     };

//     const handleDownPaymentChange = (newDownPayment) => {
//         const minDownPayment = loanAmount * 0.1;
//         const maxDownPayment = loanAmount * 0.9;
//         const clampedDownPayment = Math.min(Math.max(newDownPayment, minDownPayment), maxDownPayment);
//         setDownPayment(clampedDownPayment);
//     };

//     const downPaymentPercentage = ((downPayment / loanAmount) * 100).toFixed(0);

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={handleLoanAmountChange}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={handleDownPaymentChange}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                             <h3 className="text-xl">Estimated Monthly EMI</h3>
//                             <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
//                         </div>
//                         <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                         <p className="text-gray-600 text-sm">payment per month</p>
//                     </div>

//                     <SliderInput
//                         label="Loan Percentage"
//                         value={percentage}
//                         setValue={setPercentage}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val}%`}
//                     />

//                     <p className="text-center text-sm text-gray-500 px-2 mt-4">
//                         The calculation is for informational purposes only and is not a public offer.
//                     </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;

// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-8">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const sliderPercentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <div className="relative w-full h-2">
//                 <div className="absolute w-full h-[2.5px] bg-gray-200 rounded-full" />
//                 <div
//                     className="absolute h-[2.5px] bg-black rounded-full"
//                     style={{ width: `${sliderPercentage}%` }}
//                 />
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={handleChange}
//                     className="absolute w-full h-2 opacity-0 cursor-pointer"
//                     style={{
//                         WebkitAppearance: 'none',
//                         appearance: 'none'
//                     }}
//                 />
//                 <div
//                     className="absolute w-5 h-5 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-1/2 cursor-pointer"
//                     style={{ left: `calc(${sliderPercentage}% - 10px)`, top: '50%' }}
//                 />
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price = 10000000 }) => {
//     const [loanAmount, setLoanAmount] = useState(price);
//     const [downPayment, setDownPayment] = useState(price * 0.3);
//     const [tenure, setTenure] = useState(20);
//     const [percentage, setPercentage] = useState(5);

//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3);
//     }, [price]);

//     const handleLoanAmountChange = (newAmount) => {
//         setLoanAmount(newAmount);
//         // Maintain the same down payment percentage when loan amount changes
//         const currentDownPaymentPercent = (downPayment / loanAmount);
//         setDownPayment(Math.round(newAmount * currentDownPaymentPercent));
//     };

//     const handleDownPaymentChange = (newDownPayment) => {
//         // Allow down payment changes regardless of loan amount changes
//         setDownPayment(newDownPayment);
//     };

//     const downPaymentPercentage = ((downPayment / loanAmount) * 100).toFixed(0);

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={handleLoanAmountChange}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={handleDownPaymentChange}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                             <h3 className="text-xl">Estimated Monthly EMI</h3>
//                             <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
//                         </div>
//                         <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                         <p className="text-gray-600 text-sm">payment per month</p>
//                     </div>

//                     <SliderInput
//                         label="Loan Percentage"
//                         value={percentage}
//                         setValue={setPercentage}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val}%`}
//                     />

//                     <p className="text-center text-sm text-gray-500 px-2 mt-4">
//                         The calculation is for informational purposes only and is not a public offer.
//                     </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;

// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-8">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (e) => {
//         const newValue = Number(e.target.value);
//         setValue(newValue);
//     };

//     const sliderPercentage = ((value - min) / (max - min)) * 100;

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <div className="relative w-full h-2">
//                 <div className="absolute w-full h-[2.5px] bg-gray-200 rounded-full pointer-events-none" />
//                 <div
//                     className="absolute h-[2.5px] bg-black rounded-full pointer-events-none"
//                     style={{ width: `${sliderPercentage}%` }}
//                 />
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     step={step}
//                     value={value}
//                     onChange={handleChange}
//                     className="absolute w-full h-2  cursor-pointer z-10"
//                     style={{
//                         WebkitAppearance: 'none',
//                         appearance: 'none'
//                     }}
//                 />
//                 <div
//                     className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow-md transform -translate-y-1/2 pointer-events-none"
//                     style={{ left: `calc(${sliderPercentage}% - 20px)`, top: '50%' }}
//                 />
//             </div>
//         </div>
//     );
// };

// const EMICalculator = ({ price = 10000000 }) => {
//     const [loanAmount, setLoanAmount] = useState(price);
//     const [downPayment, setDownPayment] = useState(price * 0.3);
//     const [tenure, setTenure] = useState(20);
//     const [percentage, setPercentage] = useState(5);

//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3);
//     }, [price]);

//     const handleLoanAmountChange = (newAmount) => {
//         setLoanAmount(newAmount);
//         // Maintain the same down payment percentage when loan amount changes
//         const currentDownPaymentPercent = (downPayment / loanAmount);
//         setDownPayment(Math.round(newAmount * currentDownPaymentPercent));
//     };

//     const handleDownPaymentChange = (newDownPayment) => {
//         // Allow down payment changes regardless of loan amount changes
//         setDownPayment(newDownPayment);
//     };

//     const downPaymentPercentage = ((downPayment / loanAmount) * 100).toFixed(0);

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={handleLoanAmountChange}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={handleDownPaymentChange}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                             <h3 className="text-xl">Estimated Monthly EMI</h3>
//                             <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
//                         </div>
//                         <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                         <p className="text-gray-600 text-sm">payment per month</p>
//                     </div>

//                     <SliderInput
//                         label="Loan Percentage"
//                         value={percentage}
//                         setValue={setPercentage}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val}%`}
//                     />

//                     <p className="text-center text-sm text-gray-500 px-2 mt-4">
//                         The calculation is for informational purposes only and is not a public offer.
//                     </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;

// import React, { useEffect, useState } from 'react';
// import { AlertCircle, Lock } from 'lucide-react';
// import { Slider } from 'antd';

// const Card = ({ children, className = "container" }) => (
//     <div className={`w-full ${className}`}>{children}</div>
// );

// const CardTitle = ({ children }) => (
//     <h1 className="text-3xl font-bold mb-2">{children}</h1>
// );

// const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
//     const handleChange = (newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className="bg-gray-50 rounded-xl p-4 mb-4">
//             <div className="flex justify-between items-center mb-2">
//                 <label className="text-gray-600">{label}</label>
//                 <div className="flex items-center gap-2">
//                     {showLock && <Lock className="w-4 h-4 text-gray-400" />}
//                     <span className="text-xl font-semibold">
//                         {format ? format(value) : value}
//                     </span>
//                     {percentage && <span className="text-gray-500">{percentage}</span>}
//                 </div>
//             </div>
//             <Slider
//                 value={value}
//                 onChange={handleChange}
//                 min={min}
//                 max={max}
//                 step={step}
//                 className="custom-slider"
//                 styles={{
//                     track: {
//                         backgroundColor: 'black',
//                         height: '2.5px'
//                     },
//                     rail: {
//                         backgroundColor: '#e5e7eb',
//                         height: '2.5px'
//                     },
//                     handle: {
//                         borderColor: 'black',
//                         height: '16px',
//                         width: '16px',
//                         marginTop: '-7px',
//                         backgroundColor: 'white',
//                         boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                     }
//                 }}
//             />
//         </div>
//     );
// };

// const EMICalculator = ({ price = 10000000 }) => {
//     const [loanAmount, setLoanAmount] = useState(price);
//     const [downPayment, setDownPayment] = useState(price * 0.3);
//     const [downPaymentPercentage, setDownPaymentPercentage] = useState(30);
//     const [tenure, setTenure] = useState(20);
//     const [percentage, setPercentage] = useState(5);

//     useEffect(() => {
//         setLoanAmount(price);
//         setDownPayment(price * 0.3);
//         setDownPaymentPercentage(30);
//     }, [price]);

//     const handleLoanAmountChange = (newAmount) => {
//         setLoanAmount(newAmount);
//         const newDownPayment = (downPaymentPercentage / 100) * newAmount;
//         setDownPayment(Math.round(newDownPayment));
//     };

//     const handleDownPaymentChange = (newDownPayment) => {
//         setDownPayment(newDownPayment);
//         const newPercentage = (newDownPayment / loanAmount) * 100;
//         setDownPaymentPercentage(newPercentage);
//     };

//     const calculateEMI = (amount, rate) => {
//         const principal = amount;
//         const ratePerMonth = rate / (12 * 100);
//         const numberOfPayments = tenure * 12;

//         const emi = principal *
//             ratePerMonth *
//             Math.pow(1 + ratePerMonth, numberOfPayments) /
//             (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

//         return Math.round(emi);
//     };

//     const formatCurrency = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

//     return (
//         <Card>
//             <CardTitle>Mortgage calculator</CardTitle>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                     <SliderInput
//                         label="Apartment price, ₹"
//                         value={loanAmount}
//                         setValue={handleLoanAmountChange}
//                         min={1000000}
//                         max={40000000}
//                         step={100000}
//                         format={formatCurrency}
//                         showLock={true}
//                     />

//                     <SliderInput
//                         label="First installment, ₹"
//                         value={downPayment}
//                         setValue={handleDownPaymentChange}
//                         min={loanAmount * 0.1}
//                         max={loanAmount * 0.9}
//                         step={100000}
//                         format={formatCurrency}
//                         percentage={`${downPaymentPercentage.toFixed(0)}%`}
//                     />

//                     <SliderInput
//                         label="Loan term"
//                         value={tenure}
//                         setValue={setTenure}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val} years`}
//                     />
//                 </div>

//                 <div className="bg-gray-50 rounded-xl">
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                             <h3 className="text-xl">Estimated Monthly EMI</h3>
//                             <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
//                         </div>
//                         <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
//                         <p className="text-gray-600 text-sm">payment per month</p>
//                     </div>

//                     <SliderInput
//                         label="Loan Percentage"
//                         value={percentage}
//                         setValue={setPercentage}
//                         min={1}
//                         max={30}
//                         step={1}
//                         format={(val) => `${val}%`}
//                     />

//                     <p className="text-center text-sm text-gray-500 px-2 mt-4">
//                         The calculation is for informational purposes only and is not a public offer.
//                     </p>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default EMICalculator;

import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, Lock } from 'lucide-react';

const Card = ({ children, className = "" }) => (
    <div className={`w-full ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
    <h1 className="text-3xl font-bold mb-2">{children}</h1>
);

const RangeSlider = ({ value, onChange, min, max, step }) => {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const getPercentage = (value) => {
        return ((value - min) / (max - min)) * 100;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleMouseMove(e);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1);
        const newValue = Math.round((percentage * (max - min) + min) / step) * step;
        onChange(Math.min(Math.max(min, newValue), max));
    };

    return (
        <div className="relative w-full h-6 cursor-pointer" ref={sliderRef} onMouseDown={handleMouseDown}>
            <div className="absolute top-[11px] w-full h-[2.5px] bg-gray-200 rounded" />
            <div
                className="absolute top-[11px] h-[2.5px] bg-black rounded"
                style={{ width: `${getPercentage(value)}%` }}
            />
            <div
                className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm transform -translate-y-1/2"
                style={{
                    left: `${getPercentage(value)}%`,
                    transform: 'translateX(-50%) translateY(4px)'
                }}
            />
        </div>
    );
};

const SliderInput = ({ label, value, setValue, min, max, step, format, showLock = false, percentage }) => {
    return (
        <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
            <div className="flex justify-between items-center mb-">
                <label className="text-gray-600">{label}</label>
                <div className="flex items-center gap-2">
                    {showLock && <Lock className="w-4 h-4 text-gray-400" />}
                    <span className="text-xl font-semibold">
                        {format ? format(value) : value}
                    </span>
                    {percentage && <span className="text-gray-500">{percentage}</span>}
                </div>
            </div>
            <RangeSlider
                value={value}
                onChange={setValue}
                min={min}
                max={max}
                step={step}
            />
        </div>
    );
};

const EMICalculator = ({ price = 10000000 }) => {
    const [loanAmount, setLoanAmount] = useState(price);
    const [downPayment, setDownPayment] = useState(price * 0.3);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(30);
    const [tenure, setTenure] = useState(20);
    const [percentage, setPercentage] = useState(5);

    useEffect(() => {
        setLoanAmount(price);
        setDownPayment(price * 0.3);
        setDownPaymentPercentage(30);
    }, [price]);

    const handleLoanAmountChange = (newAmount) => {
        setLoanAmount(newAmount);
        const newDownPayment = (downPaymentPercentage / 100) * newAmount;
        setDownPayment(Math.round(newDownPayment));
    };

    const handleDownPaymentChange = (newDownPayment) => {
        setDownPayment(newDownPayment);
        const newPercentage = (newDownPayment / loanAmount) * 100;
        setDownPaymentPercentage(newPercentage);
    };

    const calculateEMI = (amount, rate) => {
        const principal = amount;
        const ratePerMonth = rate / (12 * 100);
        const numberOfPayments = tenure * 12;

        const emi = principal *
            ratePerMonth *
            Math.pow(1 + ratePerMonth, numberOfPayments) /
            (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

        return Math.round(emi);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const monthlyEMI = calculateEMI(loanAmount - downPayment, percentage);

    return (
        <Card>
            <CardTitle>Mortgage calculator</CardTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <SliderInput
                        label="Apartment price, ₹"
                        value={loanAmount}
                        setValue={handleLoanAmountChange}
                        min={1000000}
                        max={500000000}
                        step={100000}
                        format={formatCurrency}
                        showLock={true}
                    />

                    <SliderInput
                        label="First installment, ₹"
                        value={downPayment}
                        setValue={handleDownPaymentChange}
                        min={loanAmount * 0.1}
                        max={loanAmount * 0.9}
                        step={100000}
                        format={formatCurrency}
                        percentage={`${downPaymentPercentage.toFixed(0)}%`}
                    />

                    <SliderInput
                        label="Loan term"
                        value={tenure}
                        setValue={setTenure}
                        min={1}
                        max={30}
                        step={1}
                        format={(val) => `${val} years`}
                    />
                </div>

                <div className="bg-gray-50 rounded-xl">
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl">Estimated Monthly EMI</h3>
                            <span className="text-xl font-bold">{formatCurrency(monthlyEMI)}</span>
                        </div>
                        <p className="text-gray-600 text-sm">Standard mortgage {percentage}%</p>
                        <p className="text-gray-600 text-sm">payment per month</p>
                    </div>

                    <SliderInput
                        label="Loan Percentage"
                        value={percentage}
                        setValue={setPercentage}
                        min={1}
                        max={30}
                        step={1}
                        format={(val) => `${val}%`}
                    />

                    <p className="text-center text-sm text-gray-500 px-2 mt-4">
                        The calculation is for informational purposes only and is not a public offer.
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default EMICalculator;