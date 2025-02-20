import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import HeadingCommon from './HeadingCommon';

const BuildingViewer2 = ({ id, viewer, configAvailable, setConfigAvailable }) => {
    const [hoveredBuilding, setHoveredBuilding] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const popupRef = useRef(null);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const [config, setConfig] = useState([]);


    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(`https://propertify.onrender.com/api/export-config/${id}`);
                console.log("response", response?.status)
                console.log("BuildingViewer", response)
                if (response?.status != 404) {
                    setConfigAvailable(true)
                    const data = await response.json();
                    console.log(data?.status)
                    setConfig(data?.data);
                } else {

                    setConfigAvailable(false)
                }
                // if (!response.ok) {
                //     throw new Error(`Error: ${response.status} - ${response.statusText}`);
                // }
            } catch (error) {
                setConfigAvailable(false)
                console.log("Error fetching configuration:", error);
            }
        };
        fetchConfig();
    }, [id]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setHoveredBuilding(null);
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isFullscreen]);

    useEffect(() => {
        if (imageRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = imageRef.current.width;
            canvas.height = imageRef.current.height;
            drawHighlight();
        }
    }, [hoveredBuilding, config]);

    useEffect(() => {
        if (isFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else if (document.fullscreenElement) {
            document.exitFullscreen().catch((err) => {
                console.error(`Error attempting to exit fullscreen: ${err.message}`);
            });
        }
    }, [isFullscreen]);

    const isPointInPath = (x, y, path, canvasWidth, canvasHeight) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        path.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x * canvasWidth, point.y * canvasHeight);
            } else {
                ctx.lineTo(point.x * canvasWidth, point.y * canvasHeight);
            }
        });
        ctx.closePath();
        return ctx.isPointInPath(x, y);
    };

    const handleCanvasHover = (event) => {
        if (!canvasRef.current || !config?.buildings) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const hoveredArea = config.buildings.find(building =>
            building.path && isPointInPath(x, y, building.path, canvasRef.current.width, canvasRef.current.height)
        );

        if (hoveredArea) {
            setHoveredBuilding(hoveredArea);
        } else if (!hoveredBuilding?.isHoveringMarker) {
            setHoveredBuilding(null);
        }
    };

    const drawHighlight = () => {
        if (!canvasRef.current || !config?.buildings) return;
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        if (hoveredBuilding?.path) {
            ctx.fillStyle = 'rgba(228, 228, 228, 0.5)';
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.lineWidth = 0;

            ctx.beginPath();
            hoveredBuilding.path.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(
                        point.x * canvasRef.current.width,
                        point.y * canvasRef.current.height
                    );
                } else {
                    ctx.lineTo(
                        point.x * canvasRef.current.width,
                        point.y * canvasRef.current.height
                    );
                }
            });
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // if (!config || !config.image) {
    //     return (
    //         <div className="p-8 text-center text-gray-500">
    //             No building configuration available
    //         </div>
    //     );
    // }

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };



    return (
        configAvailable && <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'w-full'}`} ref={containerRef}>
            {!isFullscreen && (
                <div className="">
                    {/* <h1 className="text-3xl font-semibold text-balck mb-2">{viewer} 3D View</h1> */}
                    <p className='pl-[2.5rem]'><HeadingCommon textColor="black" title={`${viewer} 3D View`} /></p>
                    <p className="text-gray-600">
                        {/* <HeadingCommon title='3D View' textColor="#000" /> */}
                        {/* Last updated: {formatDate(config.exportedAt)} */}
                    </p>
                    {/* <div className="mt-2 text-sm text-gray-500">
                        Total Areas: {config.buildings?.length || 0}
                    </div> */}
                </div>

            )}

            <div className={`relative ${isFullscreen ? 'h-screen' : ''}`}>
                <img
                    ref={imageRef}
                    src={config?.image?.src}
                    alt="Property Map"
                    className={` ${isFullscreen ? 'h-screen w-screen object-contain' : 'w-full h-full object-contain'}`}
                />
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                    onMouseMove={handleCanvasHover}
                    onMouseLeave={() => !hoveredBuilding?.isHoveringMarker && setHoveredBuilding(null)}
                />

                {config.buildings?.map((building) => (
                    <div
                        key={building.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            top: building.position.top,
                            left: building.position.left,
                        }}
                    >
                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredBuilding({ ...building, isHoveringMarker: true })}
                            onMouseLeave={() => setHoveredBuilding(null)}
                        >
                            <div className="relative flex justify-center items-center w-8 h-8 cursor-pointer">
                                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C7D5EF80] opacity-75"></div>
                                <div className={`relative inline-flex w-4 h-4 rounded-full transition-all duration-300
                                    ${hoveredBuilding?.id === building.id
                                        ? 'bg-white border-2 border-black'
                                        : 'bg-white border-4 border-black'}`}
                                />
                            </div>

                            {hoveredBuilding?.id === building.id && (
                                <div className="absolute z-10 bg-white rounded-lg shadow-xl p-4 w-52 -translate-x-1/2 mt-2">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 bg-white rotate-45 transform"></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {building.heading}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {building.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                <button
                    onClick={toggleFullscreen}
                    className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                    {isFullscreen ? (
                        <Minimize2 className="w-6 h-6 text-gray-600" />
                    ) : (
                        <Maximize2 className="w-6 h-6 text-gray-600" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default BuildingViewer2;