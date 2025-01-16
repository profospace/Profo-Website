const ShareableCard = ({ title, description, image, link }) => (
    <div className="border rounded-md p-4 shadow-md bg-[rgba(255,255,255,0.1)] ">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 inline-block"
        >
            View Details
        </a>
    </div>
);

export default ShareableCard