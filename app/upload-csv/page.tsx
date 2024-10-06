"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { handleCsvUpload } from "@/actions/handleCsvUpload";

const UploadForm = ({
  handleUpload,
}: {
  handleUpload: (
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setIsUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await handleUpload(formData);
      if (result.success) {
        setMessage("File uploaded successfully and dashboard updated!");
        setFile(null);
      } else {
        setMessage("Failed to upload file. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
      <div className="mb-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      <button
        type="submit"
        disabled={isUploading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isUploading ? "Uploading..." : "Upload CSV & Create Report"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default function UploadCsvPage() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <div>Please sign in to upload a CSV.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload CSV</h1>
      <UploadForm handleUpload={handleCsvUpload} />
    </div>
  );
}
