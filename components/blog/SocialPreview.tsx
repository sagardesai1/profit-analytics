"use client";

interface SocialPreviewProps {
  url: string;
  title: string;
}

export default function SocialPreview({ url, title }: SocialPreviewProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  return (
    <div className="flex space-x-4 my-6">
      <button
        onClick={() => window.open(shareUrls.twitter, "_blank")}
        className="text-blue-400"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => window.open(shareUrls.facebook, "_blank")}
        className="text-blue-600"
      >
        Share on Facebook
      </button>
      <button
        onClick={() => window.open(shareUrls.linkedin, "_blank")}
        className="text-blue-800"
      >
        Share on LinkedIn
      </button>
    </div>
  );
}
