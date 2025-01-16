import React, { useState } from 'react';

// Simple Card component implementation since @/components/ui/card is not available
const Card = ({ children, className, style }) => (
    <div
        className={`bg-white rounded-lg shadow-lg ${className}`}
        style={style}
    >
        {children}
    </div>
);

const BuildingSelector = () => {
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Building data matching the image
    const buildingData = {
        towerLeft: {
            name: "Tower West",
            details: {
                studios: "from 15,745,068 ₽",
                oneRoom: "from 23,486,056 ₽",
                twoRoom: "from 30,890,212 ₽",
                threeRoom: "from 49,336,220 ₽"
            }
        },
        towerCenter: {
            name: "Tower Anna",
            details: {
                studios: "from 15,745,068 ₽",
                oneRoom: "from 23,486,056 ₽",
                twoRoom: "from 30,890,212 ₽",
                threeRoom: "from 49,336,220 ₽"
            }
        },
        towerRight: {
            name: "Tower East",
            details: {
                studios: "from 16,245,068 ₽",
                oneRoom: "from 24,486,056 ₽",
                twoRoom: "from 31,890,212 ₽",
                threeRoom: "from 50,336,220 ₽"
            }
        }
    };

    // Polygon coordinates for each building
    const buildings = {
        towerLeft: {
            points: "50,100 200,100 200,500 50,500"
        },
        towerCenter: {
            points: "350,150 450,150 450,450 350,450"
        },
        towerRight: {
            points: "600,100 750,100 750,500 600,500"
        }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleBuildingClick = (buildingId, e) => {
        e.preventDefault();
        setSelectedBuilding(selectedBuilding?.name === buildingData[buildingId].name ? null : buildingData[buildingId]);
    };

    return (
        <div className="relative max-w-6xl mx-auto">
            <div className="relative">
                {/* Using a placeholder image since external URLs aren't allowed */}
                <img
                    src="https://avatars.mds.yandex.net/get-verba/216201/2a0000018bcdd8b1bafaa49d5b7f5268d570/realty_genplan"
                    alt="Building Complex"
                    className="w-full h-auto"
                    onMouseMove={handleMouseMove}
                />

                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 800 600"
                >
                    {Object.entries(buildings).map(([id, building]) => (
                        <g key={id}>
                            <polygon
                                points={building.points}
                                fill={selectedBuilding?.name === buildingData[id].name ? 'rgba(255,215,0,0.2)' : 'transparent'}
                                stroke={selectedBuilding?.name === buildingData[id].name ? 'rgba(255,215,0,0.8)' : 'transparent'}
                                strokeWidth="2"
                                className="transition-all duration-300 hover:fill-yellow-400 hover:fill-opacity-20 cursor-pointer"
                                onClick={(e) => handleBuildingClick(id, e)}
                            />
                        </g>
                    ))}
                </svg>

                {selectedBuilding && (
                    <Card
                        className="absolute z-10 p-4 bg-white bg-opacity-90 backdrop-blur-sm border border-yellow-400"
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            width: '300px',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div className="relative">
                            <h3 className="text-lg font-bold mb-3 text-gray-800">{selectedBuilding.name}</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex justify-between">
                                    <span>Studios:</span>
                                    <span className="font-medium">{selectedBuilding.details.studios}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>1 Room:</span>
                                    <span className="font-medium">{selectedBuilding.details.oneRoom}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>2 Room:</span>
                                    <span className="font-medium">{selectedBuilding.details.twoRoom}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>3 Room:</span>
                                    <span className="font-medium">{selectedBuilding.details.threeRoom}</span>
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedBuilding(null)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
                            >
                                ×
                            </button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default BuildingSelector;