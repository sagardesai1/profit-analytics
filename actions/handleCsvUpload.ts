"use server";
import { uploadCsv } from "@/utils/uploadCsv";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";

export async function handleCsvUpload(formData: FormData) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  try {
    // Insert user into Users table
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("No file uploaded");
    }

    const fileBuffer = await file.arrayBuffer();
    const fileStream = Buffer.from(fileBuffer);

    const fileContent = fileStream.toString("utf-8");

    // Generate a short, unique filename
    const shortFilename = `${randomUUID()}.csv`;

    await uploadCsv(fileContent, shortFilename, userId);

    return { success: true, message: "CSV uploaded successfully" };
  } catch (error) {
    console.error("Error uploading CSV or adding user:", error);
    return { success: false, message: "Failed to upload CSV" };
  }
}

// export default async function UploadCsvPage() {
//   const user = await currentUser();

//   if (!user) {
//     return <div>Please sign in to upload a CSV.</div>;
//   }

//   return (
//     <div>
//       <h1>Upload CSV</h1>
//       <UploadButton handleUpload={handleCsvUpload} />
//     </div>
//   );
// }
