import React from 'react';

const ServiceCard = ({ icon, title, count, isActive }) => (
    <div className={`flex-shrink-0 w-44 p-3 rounded-2xl ${isActive ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors cursor-pointer`}>
        <div className="flex flex-col items-start space-y-2">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
            <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-gray-900">{title}</span>
                {count && (
                    <>
                        <span className="text-gray-400 mx-1">·</span>
                        <span className="text-sm text-gray-400">{count}</span>
                    </>
                )}
            </div>
        </div>
    </div>
);

const ServicesRow = () => {
    const services = [
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "New buildings",
            count: "507"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "Buy",
            count: "82 213"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "Take off",
            count: "12 678"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "We will find an apartment"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "We will help you pass"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "We will evaluate the apartment"
        },
        {
            icon: "https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png",
            title: "Apartments from Samolet"
        }
    ];

    return (
        <div className="w-full bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex overflow-x-auto space-x-3 py-4 no-scrollbar">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            // count={service.count}
                            isActive={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Add this CSS to your global styles to hide scrollbar
const style = `
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;

export default ServicesRow;