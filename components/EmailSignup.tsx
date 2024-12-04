"use client";

import React, { useState } from "react";
import EmailSignupServer from "@/actions/emailSignup";

interface EmailSignupFormProps {
  waitlistId: number;
  referralLink: string;
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({
  waitlistId,
  referralLink,
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const result = await EmailSignupServer(email, waitlistId, referralLink);
      setMessage(
        result
          ? "Successfully signed up!"
          : "Failed to sign up. Please try again."
      );
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className="flex-1 p-2 border rounded-l"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Start Calculating"}
      </button>
      {message && <p className="mt-2 text-center">{message}</p>}
    </form>
  );
};

export default EmailSignupForm;
