"use client";

import { useState } from "react";
import { EyeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DecryptPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [decryptedText, setDecryptedText] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setDecryptedText(null); // Reset if already decrypted
    }
  };

  const handleDecrypt = () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    // Dummy decryption simulation
    setTimeout(() => {
      setDecryptedText("🔓 This is your hidden message.");
    }, 1000);
  };

  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-xl font-bold text-center">Decrypt Hidden Message</h2>

      <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-purple-500 transition">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
          <ArrowDownTrayIcon className="h-6 w-6" />
          <span>Click to upload image</span>
        </div>
      </label>

      {selectedImage && (
        <div className="w-full">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />
        </div>
      )}

      <button
        onClick={handleDecrypt}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
      >
        <EyeIcon className="w-5 h-5 inline-block mr-2" />
        Reveal Hidden Text
      </button>

      {decryptedText && (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow text-sm">
          <p className="text-gray-700 whitespace-pre-wrap">{decryptedText}</p>
        </div>
      )}
    </div>
  );
}
