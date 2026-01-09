// src/components/ImageGrid.jsx
import React, { useEffect, useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dpgnmyelz'
    }
});

const ImageGrid = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 2. Fetch image data from your backend
        // In a real CMS, your backend would query your database
        // for image public_ids or URLs.
        const fetchImages = async () => {
            try {
                // --- IMPORTANT ---
                // Replace this URL with the actual endpoint on your backend
                // that serves a list of image public_ids or URLs.
                // For local development with Docker, 'http://localhost:5000'
                // assumes your backend is mapped to port 5000.
                const response = await fetch('http://localhost:5000/api/images');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setImages(data); // Assuming 'data' is an array of objects like { public_id: 'sample_image' }
            } catch (err) {
                setError("Failed to fetch images: " + err.message);
                console.error("Error fetching images:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return <div className="text-center p-4">Loading images...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">Error: {error}</div>;
    }

    if (images.length === 0) {
        return <div className="text-center p-4">No images to display. Upload some!</div>;
    }

    // Helper function to create a Cloudinary image instance
    const generateCldImage = (publicId) => {
        return cld.image(publicId).resize(fill().width(300).height(300));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">My Cloudinary Image Grid</h2>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {/* Slice to ensure we only display up to 9 images for a 3x3 grid */}
                {images.slice(0, 9).map((image, index) => (
                    <div key={image.public_id || index} className="border p-2 rounded-lg shadow-sm">
                        {image.public_id ? (
                            <AdvancedImage cldImg={generateCldImage(image.public_id)} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded" />
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                Invalid Image Data
                            </div>
                        )}
                        {/* Optional: Display image details */}
                        {/* <p className="text-sm mt-2">ID: {image.public_id}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;