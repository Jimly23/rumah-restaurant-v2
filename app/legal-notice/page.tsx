import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-3xl text-center md:text-4xl font-semibold text-gray-900 mb-6">
          Legal Notice
        </h1>

        <p className="text-gray-500 mb-10 text-center font-playfair">
          Last Updated: 25th November 2025
        </p>

        {/* Section */}
        <Section title="Website Terms & Conditions">
          By visiting and using www.rumahrestaurant.com, you consent to the collection and use of information as outlined below.
        </Section>

        <Section title="Acceptance of Terms">
          By accessing and using www.rumahrestaurant.com, you agree to comply with and be bound by the following terms and conditions ("Terms"). If you disagree with these Terms, please do not use this website.
        </Section>

        <Section title="Types of Data Collected">
          <ul className="list-disc pl-6 space-y-2">
            <li>IP addresses</li>
            <li>Browser types</li>
            <li>Device identifiers</li>
            <li>Location data</li>
          </ul>
        </Section>

        <Section title="Purpose of Data Collection">
          <ul className="list-disc pl-6 space-y-2">
            <li>Consumer and performance analytics</li>
            <li>Service and quality improvement</li>
            <li>Targeted marketing</li>
          </ul>
        </Section>

        <Section title="Use of Cookies and Trackers">
          www.rumahrestaurant.com may use cookies, web beacons, and other tracking technologies to collect data and enhance your experience on our site.
        </Section>

        <Section title="Data Sharing">
          We may share your data with third-party services for marketing and analytics.
        </Section>

        <Section title="Opt Out">
          If you wish to opt out of data collection, you may do so by disabling cookies in your browser settings.
        </Section>

        <Section title="Changes to Terms">
          We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and your continued use of www.rumahrestaurant.com after any changes have been made constitutes acceptance of those changes.
        </Section>

        <Section title="Governing Law">
          These Terms are governed by the laws of the United Arab Emirates.
        </Section>

      </div>
    </main>
  );
}

/* Reusable Section Component */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed font-playfair">
        {children}
      </div>
    </section>
  );
}