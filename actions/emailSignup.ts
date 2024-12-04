"use server";

const EmailSignupServer = async (
  email: string,
  waitlistId: number,
  referralLink: string
): Promise<boolean> => {
  try {
    const response = await fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        waitlist_id: waitlistId,
        referral_link: referralLink,
        metadata: { excel_calculator_requested: true },
      }),
    });
    console.log(response);
    return response.ok;
  } catch (error) {
    console.error("Error signing up:", error);
    return false;
  }
};

export default EmailSignupServer;
