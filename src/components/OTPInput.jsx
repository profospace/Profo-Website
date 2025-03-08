import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OTPInput = ({ setOtp }) => {
    const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const inputRefs = useRef([]);

    // Register refs for each input
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, otpValues.length);
    }, [otpValues.length]);

    // Update parent component's OTP state when our values change
    useEffect(() => {
        const combinedOtp = otpValues.join('');
        setOtp(combinedOtp);
    }, [otpValues, setOtp]);

    // Focus first input on mount
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, value) => {
        // Only allow numeric input
        if (!/^\d*$/.test(value)) return;

        // Create a copy of current OTP array
        const newOtpValues = [...otpValues];

        // Update the value at current index (only take first digit)
        newOtpValues[index] = value.substring(0, 1);
        setOtpValues(newOtpValues);

        // Auto-focus to next input if current field is filled
        if (value && index < otpValues.length - 1) {
            inputRefs.current[index + 1].focus();
            setFocusedIndex(index + 1);
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            if (!otpValues[index] && index > 0) {
                // If current field is empty and backspace is pressed, 
                // focus previous field and clear its value
                const newOtpValues = [...otpValues];
                newOtpValues[index - 1] = '';
                setOtpValues(newOtpValues);
                inputRefs.current[index - 1].focus();
                setFocusedIndex(index - 1);
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');

        // Filter only numeric characters
        const pastedOtp = pastedData.replace(/\D/g, '').substring(0, otpValues.length);

        if (pastedOtp) {
            const newOtpValues = [...otpValues];

            // Fill OTP fields with pasted data
            for (let i = 0; i < pastedOtp.length; i++) {
                newOtpValues[i] = pastedOtp[i];
            }

            setOtpValues(newOtpValues);

            // Focus last filled field or first empty field
            const focusIndex = Math.min(pastedOtp.length, otpValues.length - 1);
            inputRefs.current[focusIndex].focus();
            setFocusedIndex(focusIndex);
        }
    };

    // Check if all inputs are filled
    const isComplete = otpValues.every(val => val !== '');

    // Container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Input box variants
    const inputVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center mb-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="flex justify-center space-x-2 mb-2">
                {otpValues.map((digit, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        variants={inputVariants}
                    >
                        <motion.div
                            className="absolute inset-0 rounded-lg"
                            animate={{
                                boxShadow: focusedIndex === index ? "0 0 0 2px rgba(239, 68, 68, 0.5), 0 4px 12px rgba(239, 68, 68, 0.2)" : "none",
                                scale: focusedIndex === index ? 1.05 : 1
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                        <motion.input
                            ref={el => inputRefs.current[index] = el}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : null}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            className="relative w-12 h-12 text-center text-xl font-bold rounded-lg bg-gray-100 focus:outline-none transition-all"
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                        />
                        <motion.div
                            className="w-full h-0.5 bg-red-500 rounded-full mt-1"
                            initial={{ scaleX: 0 }}
                            animate={{
                                scaleX: digit ? 1 : 0,
                                backgroundColor: isComplete ? "#10B981" : "#EF4444"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="text-center text-xs text-gray-500 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Enter 6-digit verification code
            </motion.div>

            {isComplete && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="text-green-500 text-sm mt-2 font-medium"
                >
                    Code complete! ✓
                </motion.div>
            )}
        </motion.div>
    );
};

export default OTPInput;