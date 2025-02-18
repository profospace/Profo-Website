function ProjectDetailPage() {
  const { projectDetail } = useSelector(state => state.projects);
  const [activeSection, setActiveSection] = useState(null);
  const [isBuildingViewerInView, setIsBuildingViewerInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const dispatch = useDispatch();
  const { post_id } = useParams();

  console.log("projectDetail", projectDetail)

  // Create an object to store only valid section refs
  const [validSectionRefs, setValidSectionRefs] = useState({});

  // Create initial section refs
  const sectionRefs = {
    'Description': useRef(null),
    'FloorPlans': useRef(null),
    'ProjectOverview': useRef(null),
    'Map': useRef(null),
    'Specifications': useRef(null),
    'Amenities': useRef(null),
    'highlights': useRef(null),
    'NearBy': useRef(null),
    'Gallery': useRef(null),
    'ConnectedProperties': useRef(null),
    'AskTheDeveloper': useRef(null),
  };

  // Fetch project data
  useEffect(() => {
    dispatch(getSingleProject(post_id));
  }, [post_id, dispatch]);

  // Update valid section refs when project data changes
  useEffect(() => {
    if (projectDetail) {
      const newValidSectionRefs = {
        'Description': sectionRefs['Description'], // Description is always shown
        'ProjectOverview': sectionRefs['ProjectOverview'], // Building Viewer is always shown
      };

      // Add conditional sections based on data availability
      if (projectDetail?.floorPlans?.length > 0) {
        newValidSectionRefs['FloorPlans'] = sectionRefs['FloorPlans'];
      }

      if (projectDetail?.location?.coordinates?.coordinates?.length > 0) {
        newValidSectionRefs['Map'] = sectionRefs['Map'];
      }

      if (projectDetail?.specification?.length > 0) {
        newValidSectionRefs['Specifications'] = sectionRefs['Specifications'];
      }

      if (projectDetail?.amenities?.length > 0) {
        newValidSectionRefs['Amenities'] = sectionRefs['Amenities'];
      }

      if (projectDetail?.highlights?.length > 0) {
        newValidSectionRefs['highlights'] = sectionRefs['highlights'];
      }

      if (projectDetail?.nearbyLocations?.length > 0) {
        newValidSectionRefs['NearBy'] = sectionRefs['NearBy'];
      }

      if (projectDetail?.gallery?.length > 0) {
        newValidSectionRefs['Gallery'] = sectionRefs['Gallery'];
      }

      if (projectDetail?.connectedProperties?.length > 0) {
        newValidSectionRefs['ConnectedProperties'] = sectionRefs['ConnectedProperties'];
      }

      if (projectDetail?.contacts?.[0]) {
        newValidSectionRefs['AskTheDeveloper'] = sectionRefs['AskTheDeveloper'];
      }

      setValidSectionRefs(newValidSectionRefs);
    }
  }, [projectDetail]);

  // Scroll and intersection detection
  useEffect(() => {
    let isThrottled = false;
    const throttleTime = 50; // ms

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      setIsScrolling(true);

      // Check if user has scrolled by a significant amount
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      if (scrollDelta > 50) { // Minimum scroll threshold
        const projectOverviewEl = validSectionRefs['ProjectOverview']?.current;
        if (projectOverviewEl) {
          const rect = projectOverviewEl.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const threshold = viewportHeight * 0.4; // 40% threshold

          setIsBuildingViewerInView(
            rect.top < threshold &&
            rect.bottom > threshold
          );
        }
        lastScrollY.current = currentScrollY;
      }

      // Reset scroll state after delay
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust this value to change how quickly after stopping scroll the animation can occur

      // Reset throttle
      setTimeout(() => {
        isThrottled = false;
      }, throttleTime);
    };

    // Track active section
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 200;
      let activeFound = false;

      for (const [section, ref] of Object.entries(validSectionRefs)) {
        if (!ref?.current) continue;

        const element = ref.current;
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(section);
          activeFound = true;
          break;
        }
      }

      if (!activeFound) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [validSectionRefs]);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <HeaderSection
          details={projectDetail}
          sectionRefs={validSectionRefs}
          activeSection={activeSection}
        />
      </div>

      <div className="mx-auto px-4">
        <div className="grid grid-cols-12 gap-2">
          {/* Main Content */}
          <motion.div
            className={`${isBuildingViewerInView ? 'col-span-12' : 'col-span-12 lg:col-span-8'}`}
            layout
            transition={{
              duration: isScrolling ? 0.3 : 0,
              ease: "easeInOut"
            }}
          >
            {/* Project Info Section */}

            <div className="max-w-4xl mx-auto p-4 py-12" ref={sectionRefs['Description']}>
              {/* Header Section */}
              <div className="mb-6">
                {/* New Launch Badge - Only show if availabilityStatus is COMING_SOON */}
                {projectDetail?.availabilityStatus === "COMING_SOON" && (
                  <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
                    <div className="bg-yellow-500 rounded-full p-1">
                      <div className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">NEW LAUNCH</span>
                    <span>Project</span>
                  </div>
                )}
                <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
                {projectDetail?.location?.address && (
                  <p className="text-gray-500">{projectDetail.location.address}</p>
                )}
              </div>

              {/* Status Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projectDetail?.reraNumber && projectDetail.reraNumber !== "undefined" && (
                  <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    RERA {projectDetail.reraNumber}
                  </div>
                )}
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                  No Brokerage
                </div>
                {(projectDetail?.overview?.totalTowers || projectDetail?.overview?.totalUnits) && (
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                    {projectDetail?.overview?.totalTowers && `${projectDetail.overview.totalTowers} Towers`}
                    {projectDetail?.overview?.totalTowers && projectDetail?.overview?.totalUnits && ' | '}
                    {projectDetail?.overview?.totalUnits && `${projectDetail.overview.totalUnits} Units`}
                  </div>
                )}
              </div>

              {/* Project Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {projectDetail?.overview?.priceRange?.pricePerSqFt && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-semibold">₹{projectDetail.overview.priceRange.pricePerSqFt}/sq.ft.</p>
                  </div>
                )}
                {projectDetail?.overview?.launchDate && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Launch Date</p>
                    <p className="font-semibold">
                      {new Date(projectDetail.overview.launchDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                {projectDetail?.overview?.possessionDate && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Possession</p>
                    <p className="font-semibold">
                      {new Date(projectDetail.overview.possessionDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                {projectDetail?.status && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Status</p>
                    <p className="font-semibold">
                      {projectDetail.status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                    </p>
                  </div>
                )}
              </div>

              {/* Property Types - Only show if floorPlans exist */}
              {projectDetail?.floorPlans && projectDetail.floorPlans.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Available Configurations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectDetail.floorPlans.map((plan, index) => (
                      plan.isActive && (
                        <div key={index} className="border border-gray-200 rounded-md p-4">
                          <h3 className="font-semibold mb-1">{plan.name}</h3>
                          {plan.superArea && <p className="text-gray-500 mb-2">{plan.superArea} sq.ft.</p>}
                          {plan.price && (
                            <p className="font-bold">
                              ₹{(plan.price >= 10000000)
                                ? `${(plan.price / 10000000).toFixed(2)} Cr`
                                : `${Math.round(plan.price / 100000)} Lacs`}
                            </p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="bg-black text-white rounded-xl p-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-yellow-500" />
                    <span>High price appreciation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-yellow-500" />
                    <span>Units of choice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={20} className="text-yellow-500" />
                    <span>Easy Payment plans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floor Plans - conditionally render */}
            {projectDetail?.floorPlans?.length > 0 && (
              <motion.div className="" ref={sectionRefs['FloorPlans']}>
                <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
                <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
              </motion.div>
            )}

            {/* Project overview - always render */}
            <motion.div
              className="w-full"
              ref={sectionRefs['ProjectOverview']}
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BuildingViewer id={projectDetail?.projectId} viewer="Project" />
            </motion.div>

            {/* Location Map - conditionally render */}
              <div className="mb-8 mt-20" ref={sectionRefs['Map']}>
                <LocationLatLngMap
                  latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
                  longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
                />
              </div>

            {/* Specifications - conditionally render */}
            {projectDetail?.specification?.length > 0 && (
              <div className="mb-8" ref={sectionRefs['Specifications']}>
                <ProjectSpecificationCard specifications={projectDetail?.specification} />
              </div>
            )}

            {/* Amenities - conditionally render */}
            {projectDetail?.amenities?.length > 0 && (
              <div className="mb-2" ref={sectionRefs['Amenities']}>
                <AmenitiesDisplay amenities={projectDetail?.amenities} />
              </div>
            )}

            {/* highlights - conditionally render */}
            {projectDetail?.highlights?.length > 0 && (
              <div className="mb-2" ref={sectionRefs['highlights']}>
                <ProjectHighlights highlights={projectDetail?.highlights} />
              </div>
            )}

            {/* nearbyLocations - conditionally render */}
            {projectDetail?.nearbyLocations?.length > 0 && (
              <div className="mb-2" ref={sectionRefs['NearBy']}>
                <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
              </div>
            )}

            {/* Gallery - conditionally render */}
            {projectDetail?.gallery?.length > 0 && (
              <div className="my-8" ref={sectionRefs['Gallery']}>
                <GalleryGrid gallery={projectDetail?.gallery} />
              </div>
            )}



            {/* Ask Developer Section - conditionally render */}
            {projectDetail?.contacts?.[0] && (
              <div className="mb-8"
                ref={sectionRefs['AskTheDeveloper']}
                contact={projectDetail?.contacts?.[0]}>
                <AskDeveloper />
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <AnimatePresence mode="wait">
            {!isBuildingViewerInView && (
              <motion.div
                className="hidden lg:block col-span-4"
                initial={isScrolling ? { opacity: 0, x: 20 } : false}
                animate={isScrolling ? { opacity: 1, x: 0 } : false}
                exit={isScrolling ? { opacity: 0, x: 20 } : false}
                transition={{
                  duration: isScrolling ? 0.3 : 0,
                  ease: "easeInOut"
                }}
              >
                <div className="sticky top-32">
                  <ProjectContactCard info={projectDetail?.builder} connectedProperties={projectDetail?.connectedProperties} />
                  <DownloadBrochures />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Connected Properties - conditionally render */}
        {projectDetail?.connectedProperties?.length > 0 && (
          <div className="" ref={sectionRefs['ConnectedProperties']}>
            <HeadingCommon title='Properties Under The Project' />
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {projectDetail?.connectedProperties?.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;