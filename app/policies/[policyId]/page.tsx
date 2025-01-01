import { policies } from "@/data/policies";
import { notFound } from "next/navigation";

interface PolicyPageProps {
  params: {
    policyId: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(policies).map((policyId) => ({
    policyId,
  }));
}

export default function PolicyPage({ params }: PolicyPageProps) {
  const policy = policies[params.policyId];

  if (!policy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{policy.title}</h1>
      <div className="prose prose-lg">{policy.content}</div>
      <p className="text-sm text-gray-500 mt-8">
        Last updated: {policy.lastUpdated}
      </p>
    </div>
  );
}
