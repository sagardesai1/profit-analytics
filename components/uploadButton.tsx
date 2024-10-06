"use client";

import { useState } from "react";

export default function UploadButton({
  handleUpload,
}: {
  handleUpload: (
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}) {
  const [isUploading, setIsUploading] = useState(false);

  const onClick = async () => {
    setIsUploading(true);
    try {
      const result = await handleUpload(new FormData());
      alert(result.message);
    } catch (error) {
      console.error("Error uploading CSV:", error);
      alert("Failed to upload CSV data.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <button onClick={onClick} disabled={isUploading}>
      {isUploading ? "Uploading..." : "Upload CSV"}
    </button>
  );
}
