import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ViewSwitcher = ({ view, children }) => {
    // Slide variants for different views
    const slideVariants = {
        listEnter: {
            x: '100%',
            opacity: 0
        },
        listVisible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        listExit: {
            x: '-100%',
            opacity: 0
        },
        mapEnter: {
            x: '-100%',
            opacity: 0
        },
        mapVisible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        mapExit: {
            x: '100%',
            opacity: 0
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={view}
                    initial={view === 'list' ? 'listEnter' : 'mapEnter'}
                    animate={view === 'list' ? 'listVisible' : 'mapVisible'}
                    exit={view === 'list' ? 'listExit' : 'mapExit'}
                    variants={slideVariants}
                    className="w-full h-full absolute"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ViewSwitcher;