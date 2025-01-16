import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, disabled, className = "" }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
        {children}
    </button>
);

const SliderInput = ({ label, value, setValue, min, max, step, format, leftLabel, rightLabel }) => {
    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <label className="text-sm font-medium">{label}</label>
                <span className="text-sm font-medium">{format ? format(value) : value}</span>
            </div>
            <div className="relative w-full h-2">
                <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
                <div
                    className="absolute h-2 bg-blue-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="absolute w-full h-2 opacity-0 cursor-pointer"
                    style={{
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                />
                <div
                    className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md transform -translate-y-1"
                    style={{ left: `calc(${percentage}% - 8px)`, top: '0' }}
                />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
            </div>
        </div>
    );
};

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(2000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [loading, setLoading] = useState(false);

    const calculateEMI = () => {
        const principal = loanAmount;
        const ratePerMonth = interestRate / (12 * 100);
        const numberOfPayments = tenure * 12;

        const emi = principal *
            ratePerMonth *
            Math.pow(1 + ratePerMonth, numberOfPayments) /
            (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

        return Math.round(emi);
    };

    const totalPayment = calculateEMI() * tenure * 12;
    const totalInterest = totalPayment - loanAmount;

    const saveCalculation = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/user/emi-calculations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    propertyId: 'current-property',
                    loanAmount,
                    interestRate,
                    tenure,
                    monthlyEMI: calculateEMI()
                }),
            });

            if (!response.ok) throw new Error('Failed to save calculation');
        } catch (error) {
            console.error('Error saving EMI calculation:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatIndianCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <Card className="w-full max-w-4xl">
            <CardHeader>
                <CardTitle className="text-center">Home Loan EMI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <SliderInput
                    label="Loan Amount"
                    value={loanAmount}
                    setValue={setLoanAmount}
                    min={100000}
                    max={10000000}
                    step={100000}
                    format={formatIndianCurrency}
                    leftLabel="₹1 Lakh"
                    rightLabel="₹1 Crore"
                />

                <SliderInput
                    label="Interest Rate (%)"
                    value={interestRate}
                    setValue={setInterestRate}
                    min={5}
                    max={20}
                    step={0.1}
                    format={(val) => `${val}%`}
                    leftLabel="5%"
                    rightLabel="20%"
                />

                <SliderInput
                    label="Loan Tenure (Years)"
                    value={tenure}
                    setValue={setTenure}
                    min={1}
                    max={30}
                    step={1}
                    format={(val) => `${val} years`}
                    leftLabel="1 year"
                    rightLabel="30 years"
                />

                <div className="mt-8 p-4 bg-gray-50 rounded-lg space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-600">Monthly EMI</p>
                            <p className="text-xl font-bold">{formatIndianCurrency(calculateEMI())}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">Total Interest</p>
                            <p className="text-xl font-bold">{formatIndianCurrency(totalInterest)}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">Total Payment</p>
                            <p className="text-xl font-bold">{formatIndianCurrency(totalPayment)}</p>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={saveCalculation}
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? 'Saving...' : 'Save Calculation'}
                </Button>

                <div className="flex items-start gap-2 text-sm text-gray-500">
                    <AlertCircle className="w-4 h-4 mt-0.5" />
                    <p>This is only an approximate EMI calculation. Actual EMI may vary based on bank's processing fees, additional charges, and exact interest computation method.</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default EMICalculator;