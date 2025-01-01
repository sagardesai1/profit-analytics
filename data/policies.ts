export interface Policy {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

export const policies: Record<string, Policy> = {
  "data-protection": {
    id: "data-protection",
    title: "Data Protection Policy",
    content: `1. Purpose
The purpose of this policy is to outline SkuHunt's commitment to protecting personal data and ensuring compliance with applicable data protection regulations. This policy establishes guidelines for the secure handling, processing, and storage of personal data.

2. Scope
This policy applies to all employees, contractors, and third-party service providers who handle personal data within SkuHunt's systems, specifically data related to TikTok Shop orders, such as sales, SKUs, and associated fees.

3. Data Protection Principles
SkuHunt adheres to the following principles when handling personal data:
Lawfulness, Fairness, and Transparency: We process personal data lawfully and transparently, informing users of the data we collect and how it will be used.
Data Minimization: We collect only the necessary data required for our services and avoid excessive data collection.
Accuracy: We ensure that personal data is kept accurate and up to date.
Storage Limitation: Personal data is retained only as long as necessary for its intended purpose, after which it is securely deleted.

4. Security Measures
Access Control: We enforce access controls using Firebase and Clerk, granting the minimum necessary permissions based on user roles.
Data Encryption: All personal data is encrypted in transit (via HTTPS) and at rest (via Neon's database encryption).
Regular Security Reviews: We conduct periodic security reviews of our systems to identify and mitigate potential vulnerabilities.

5. Data Subject Rights
Users have the right to:
Request access to their personal data.
Request correction or deletion of their personal data.
Object to or restrict the processing of their personal data.

6. Policy Updates
This Personal Data Protection Policy is reviewed and updated annually or whenever significant changes occur in our data handling processes, technologies, or legal requirements.

7. Contact Information
For questions or concerns regarding personal data protection, please contact our Data Protection Officer at sagar@skuhunt.com.`,
    lastUpdated: "2024-03-20",
  },
  "information-security": {
    id: "information-security",
    title: "Information Security Policy",
    content: `1. Introduction
At SkuHunt, we are committed to protecting the confidentiality, integrity, and availability of our data, particularly the sensitive information related to TikTok Shop orders, including sales, SKUs, and associated fees. This policy outlines the security measures we implement to safeguard our data and systems.

2. Scope
This policy applies to all employees, contractors, and systems involved in handling, storing, or processing TikTok Shop data within SkuHunt. It covers all aspects of data protection, including user access control, data encryption, and security monitoring.

3. User Access Controls
Authentication: We use Firebase and Clerk to enforce secure user authentication. Multi-Factor Authentication (MFA) is required for all access to critical systems.
Principle of Least Privilege: Access to data is restricted based on the principle of least privilege, ensuring that users only have access to the data and systems necessary for their role.
Role-Based Access Control (RBAC): We implement role-based access controls via Clerk, defining user permissions based on their roles (e.g., admin, analyst).

4. Data Protection
Data Encryption:
In Transit: All data transmitted between clients and servers is encrypted using HTTPS.
At Rest: Sensitive data stored in Neon databases is encrypted at rest by default.
Data Access Logging: Access to sensitive data is logged, monitored, and reviewed regularly to detect any unauthorized access.

5. System Security
Endpoint Protection: All company devices are protected with up-to-date antivirus software and operating system security patches.
Network Security: We implement network-level protections using Vercel's secure hosting infrastructure, including firewalls and DDoS protection measures.
Code Security: We use GitHub for version control, employing automated security checks like Dependabot to identify and resolve vulnerabilities in dependencies.

6. Security Monitoring and Incident Response
Monitoring: We continuously monitor our systems for potential security threats using integrated monitoring solutions within Firebase, Neon, and Vercel.
Incident Response Plan: In the event of a security incident, we have a defined process for identifying, responding to, and mitigating the impact of the incident. The primary contact for incident response is sagar@skuhunt.com.

7. Data Retention and Disposal
Data Retention: Data related to TikTok orders is retained only as long as necessary to provide our services. We periodically review and delete data that is no longer needed.
Data Disposal: At the end of a contractual relationship, we securely delete all customer data in our possession, following best practices for data destruction.

8. Policy Review
This policy is reviewed annually or when significant changes to our infrastructure or services occur to ensure continued compliance with industry best practices.

9. Contact Information
For any inquiries regarding this policy, please contact our security team at sagar@skuhunt.com.`,
    lastUpdated: "2024-03-20",
  },
  "terms-and-conditions": {
    id: "terms-and-conditions",
    title: "Terms & Conditions",
    content: `Welcome to SkuHunt! These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using SkuHunt, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.

1. Company Information
SkuHunt LLC
51-02 21st Fl 4, Suite 105, Long Island City, NY 11109
Contact: sagar@skuhunt.com or shaff@skuhunt.com

2. Eligibility
You must be a TikTok Shop seller to use our services.
There are no specific age restrictions, but users must be legally capable of entering into binding contracts.

3. Account Responsibilities
Account Security: You are responsible for maintaining the confidentiality of your login credentials.
Account Sharing: Account sharing is strictly prohibited and may result in immediate termination.
TikTok Integration: You are required to connect your TikTok account and grant permission for SkuHunt to access your shop's financial data.

4. Subscription and Payment
Subscription Fees: Our services operate on a subscription basis. Pricing details are available on our website.
Cancellation: You may cancel your subscription at any time, and access will continue until the end of the billing cycle.
Refund Policy: Refunds are generally not provided, except where required by law. If you believe you qualify for a refund, please contact us at sagar@skuhunt.com.

5. Permitted Use
Users agree to use SkuHunt services solely for lawful purposes and in accordance with these Terms. Unauthorized access, account sharing, and hacking attempts are strictly prohibited.

6. Intellectual Property
SkuHunt LLC retains all rights, titles, and interests in its services, including but not limited to software, analytics, and content. You are granted a limited, non-exclusive, and non-transferable license to use the service for its intended purpose.

7. Liability Disclaimer
SkuHunt provides data analytics and insights but does not guarantee complete accuracy. Users agree that SkuHunt is not liable for any financial losses resulting from errors or inaccuracies in the data provided.

8. Privacy
SkuHunt values your privacy. For more details, please review our Privacy Policy. By using our services, you consent to the data practices described in the policy.

9. Termination
SkuHunt reserves the right to terminate your account for any violations of these Terms, including but not limited to:
Sharing accounts
Unauthorized access or hacking attempts

10. Dispute Resolution
Any disputes arising under these Terms will be resolved through arbitration, ensuring a quicker and less formal resolution than traditional litigation. Arbitration will take place in New York, NY, under the rules of the American Arbitration Association (AAA).

11. Changes to Terms
SkuHunt reserves the right to modify these Terms at any time. We will notify users of significant changes. Continued use of the service after changes indicates acceptance.

By using SkuHunt, you acknowledge that you have read, understood, and agree to these Terms. If you have any questions, please contact us at sagar@skuhunt.com.`,
    lastUpdated: "2024-03-20",
  },
  "privacy-policy": {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: `Last Updated: 11-15-2024

1. Introduction
At SkuHunt, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard the data of our users and TikTok Shop sellers.

2. Data We Collect
We collect the following types of data:
User Data:
Personal information such as name, email address, and login credentials via Clerk for user authentication and management.
TikTok Order Data:
Information related to TikTok Shop orders, including sales, SKUs, and associated fees.

3. How We Use Your Data
The data we collect is used for the following purposes:
To generate detailed profit analytics for TikTok Shop sellers.
To improve our services and provide insights on product performance.

4. Third-Party Services
We utilize several third-party services to enhance our application and ensure data security:
Firebase for authentication and secure data handling.
Neon for encrypted database storage.
Clerk for user management and access control.
Vercel for hosting and deployment.
Google Analytics for tracking usage patterns and improving user experience.
These services may collect and process data according to their own privacy policies.

5. User Rights
You have the following rights regarding your personal data:
Access: Request a copy of the personal data we hold about you.
Update: Request updates or corrections to your personal data.
Deletion: Request the deletion of your personal data from our systems.
To exercise any of these rights, please contact us at sagar@skuhunt.com or shaff@skuhunt.com.

6. Data Retention
We retain your personal data for as long as your account is active or as needed to provide our services. Data will be deleted upon request by the user.

7. Cookies
Currently, we do not use cookies on our website or application. However, we may implement cookies in the future to enhance user experience. Any changes will be reflected in an updated version of this Privacy Policy.

8. Data Security
We implement industry-standard security measures to protect your data, including:
Encryption of data in transit (HTTPS) and at rest (Neon database encryption).
Access controls through Firebase and Clerk to ensure data is only accessible to authorized users.

9. Changes to This Privacy Policy
We may update this Privacy Policy periodically to reflect changes in our data practices. Any updates will be posted on our website, and we encourage you to review this policy regularly.

10. Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
Email: sagar@skuhunt.com or shaff@skuhunt.com`,
    lastUpdated: "11-15-2024",
  },
  "incident-response": {
    id: "incident-response",
    title: "Incident Response Policy",
    content: `1. Purpose
The purpose of this policy is to establish a framework for identifying, responding to, and mitigating the impact of security incidents at SkuHunt. This ensures minimal disruption to our services and protection of sensitive data related to TikTok Shop orders.

2. Scope
This policy applies to all employees, contractors, and third-party service providers who may be involved in identifying or responding to security incidents involving SkuHunt systems.

3. Roles and Responsibilities
Incident Response Lead: The primary contact for all incidents is the Security Lead (sagar@skuhunt.com). This person is responsible for coordinating the incident response process and communicating with stakeholders.
Engineering Team: Responsible for investigating the incident, identifying the root cause, and implementing a resolution or mitigation strategy.
Customer Support: Communicates with affected users, providing timely updates as needed.

4. Incident Reporting and Communication
Internal Reporting: Any employee who identifies a potential security incident must report it immediately to the Incident Response Lead.
External Communication: If the incident involves customer data or has a significant impact, the Incident Response Lead will notify affected users and relevant authorities as required by law.
Communication Channels: All incident-related communications will occur through secure, encrypted channels (e.g., email or Slack) to maintain confidentiality.

5. Incident Response Phases
Identification: Detect and report any unusual activity or security anomalies.
Containment: Implement immediate measures to limit the impact of the incident.
Investigation: Determine the cause and extent of the incident.
Mitigation and Recovery: Apply fixes, restore services, and verify the resolution of the issue.
Post-Incident Review: Document the incident, review the response process, and implement any improvements.

6. Policy Review
This policy is reviewed annually to ensure its effectiveness and alignment with industry best practices.

7. Contact Information
For any incident-related inquiries, please contact sagar@skuhunt.com.`,
    lastUpdated: "2024-03-20",
  },
};
