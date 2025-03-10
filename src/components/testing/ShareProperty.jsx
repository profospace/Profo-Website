import React, { useState, useEffect } from 'react';
import { Modal, Button, Tabs, message } from 'antd';
import { Share, Copy, Mail, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';

const ShareProperty = ({ onClose, property, isVisible }) => {
    const [activeTab, setActiveTab] = useState('1');
    const [shareUrl, setShareUrl] = useState('');

    // Generate the share URL when component mounts
    useEffect(() => {
        if (property) {
            // Create a full URL for sharing
            const baseUrl = window.location.origin;
            const propertyUrl = `${baseUrl}/api/details/${property.post_id}`;
            setShareUrl(propertyUrl);
        }
    }, [property]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                message.success('Link copied to clipboard!');
            })
            .catch(err => {
                message.error('Failed to copy link');
                console.error('Failed to copy link: ', err);
            });
    };

    const generateShareText = () => {
        const price = property?.price ? `INR ${property.price}` : 'Price on request';
        const beds = property?.bedrooms ? `${property.bedrooms} Bed` : '';
        const baths = property?.bathrooms ? `${property.bathrooms} Bath` : '';
        const area = property?.area ? `${property.area} sqft` : '';
        const specs = [beds, baths, area].filter(Boolean).join(', ');

        return `Check out this ${property?.type_name || 'property'}: ${property?.post_title || ''} - ${price}${specs ? ` (${specs})` : ''} at ${property?.address || ''}`;
    };

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(generateShareText() + ' ' + shareUrl)}`,
        email: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(`Property Listing: ${property?.post_title || 'Check out this property'}`)}
                &body=${encodeURIComponent(generateShareText() + '\n\n' + shareUrl)}${property?.galleryList && property.galleryList.length > 0 ? `&attach=${encodeURIComponent(property.galleryList[0])}` : ''}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(generateShareText())}&url=${encodeURIComponent(shareUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    // const handleSocialShare = (platform) => {
    //     if (shareLinks[platform]) {
    //         window.open(shareLinks[platform], '_blank');
    //     }
    // };

    const handleSocialShare = (platform) => {
        if (shareLinks[platform]) {
            if (platform === 'email') {
                // For email, create a custom email with image
                const emailWindow = window.open(shareLinks[platform], '_blank');
                // Add a small timeout to ensure the window opens properly
                setTimeout(() => {
                    if (emailWindow) {
                        emailWindow.focus();
                    } else {
                        message.info('Please allow pop-ups to open the email client');
                    }
                }, 500);
            } else {
                window.open(shareLinks[platform], '_blank');
            }
        }
    };

    return (
        <Modal
            title={
                <div className="flex items-center gap-2">
                    <Share size={20} />
                    <span>Share Property</span>
                </div>
            }
            open={isVisible}
            onCancel={onClose}
            footer={null}
            width={500}
            className="share-property-modal"
        >
            <div className="property-preview mb-4 p-3 border rounded-md bg-gray-50">
                <div className="flex items-start gap-3">
                    {property?.galleryList && property.galleryList.length > 0 && (
                        <img
                            src={property.galleryList[0]}
                            alt={property.post_title}
                            className="w-24 h-24 object-cover rounded-md"
                        />
                    )}
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{property?.post_title || 'Property Details'}</h3>
                        <p className="text-sm text-gray-500 mb-1">{property?.address || 'Location unavailable'}</p>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-md font-bold text-gray-800">INR {property?.price || 'Price on request'}</span>
                            <span className="text-xs text-gray-600">
                                {[
                                    property?.bedrooms ? `${property.bedrooms} Bed` : null,
                                    property?.bathrooms ? `${property.bathrooms} Bath` : null,
                                    property?.area ? `${property.area} sqft` : null
                                ].filter(Boolean).join(' • ')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-link-section mb-4">
                <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-md">
                    <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="flex-1 bg-transparent border-none outline-none text-sm"
                    />
                    <Button
                        type="primary"
                        icon={<Copy size={16} />}
                        onClick={handleCopyLink}
                        className="bg-[#FED42B] text-black hover:bg-yellow-400"
                    >
                        Copy
                    </Button>
                </div>
            </div>

            <div className="share-options">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Share via</h4>
                <div className="grid grid-cols-5 gap-3">
                    <button
                        onClick={() => handleSocialShare('whatsapp')}
                        className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-gray-100"
                    >
                        <MessageCircle size={24} className="text-green-600 mb-1" />
                        <span className="text-xs">WhatsApp</span>
                    </button>
                    <button
                        onClick={() => handleSocialShare('email')}
                        className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-gray-100"
                    >
                        <Mail size={24} className="text-blue-500 mb-1" />
                        <span className="text-xs">Email</span>
                    </button>
                    <button
                        onClick={() => handleSocialShare('facebook')}
                        className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-gray-100"
                    >
                        <Facebook size={24} className="text-blue-600 mb-1" />
                        <span className="text-xs">Facebook</span>
                    </button>
                    <button
                        onClick={() => handleSocialShare('twitter')}
                        className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-gray-100"
                    >
                        <Twitter size={24} className="text-blue-400 mb-1" />
                        <span className="text-xs">Twitter</span>
                    </button>
                    <button
                        onClick={() => handleSocialShare('linkedin')}
                        className="flex flex-col items-center justify-center p-3 rounded-md hover:bg-gray-100"
                    >
                        <Linkedin size={24} className="text-blue-700 mb-1" />
                        <span className="text-xs">LinkedIn</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ShareProperty;