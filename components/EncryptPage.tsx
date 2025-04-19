"use client";
import { useState } from "react";

export default function EncryptPage() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [hiddenMessage, setHiddenMessage] = useState("");

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setSelectedImage(file);
    };

    const handleEncrypt = () => {
        if (!selectedImage || !hiddenMessage.trim()) {
            alert("Please upload an image and enter a message.");
            return;
        }
        alert("🔐 Stego image generated (dummy action)");
    };

    return (
        <div className="flex flex-col gap-4 mt-6">
            <h2 className="text-xl font-bold text-center">Encrypt Message in Image</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />

            {selectedImage && (
                <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="rounded-xl shadow-md w-full h-48 object-cover"
                />
            )}

            <textarea
                rows={4}
                value={hiddenMessage}
                onChange={(e) => setHiddenMessage(e.target.value)}
                placeholder="Type your secret message..."
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
                onClick={handleEncrypt}
                className="bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition"
            >
                Generate Stego Image
            </button>
        </div>
    );
}
