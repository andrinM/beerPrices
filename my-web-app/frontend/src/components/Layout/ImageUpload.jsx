import React, { useState } from 'react';

const ImageUpload = () => {
    const [title, setTitle] = useState('');

    const openWidget = () => {
        // 'window.cloudinary' comes from the script we added to index.html
        window.cloudinary.openUploadWidget(
            {
                cloudName: 'dpgnmyelz',
                uploadPreset: 'ml_default', // You MUST create this in Cloudinary settings
                sources: ['local', 'url', 'camera'],
                multiple: false, // Start with one at a time
            },
            async (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);

                    // Now, send the public_id to your MySQL database via your backend
                    try {
                        const response = await fetch('http://localhost:5000/api/images', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                public_id: result.info.public_id,
                                title: title || 'New Beer Image'
                            })
                        });

                        if (response.ok) {
                            alert("Image linked to database successfully!");
                            window.location.reload(); // Refresh to see the new image in the grid
                        }
                    } catch (err) {
                        console.error("Backend error:", err);
                    }
                }
            }
        );
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg mb-8 text-center border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Add New Image to Grid</h3>
            <input
                type="text"
                placeholder="Enter image title..."
                className="border p-2 rounded mr-2 w-64"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={openWidget}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition"
            >
                Upload Image
            </button>
        </div>
    );
};

export default ImageUpload;