import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-dark-bg text-white min-h-screen py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Last Updated: February 2026</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">1. Data Collection</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include name, email, phone number, and brokerage affiliation.
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong>Automated Collection:</strong> When you access Revanx, we automatically record certain information about your device and usage, including IP address, browser type, and interaction data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">2. Use of Information</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>To provide, maintain, and improve our services.</li>
            <li>To process transactions and send related information.</li>
            <li>To monitor and analyze trends, usage, and activities.</li>
            <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">3. Data Sharing</h2>
          <p className="text-gray-400 leading-relaxed">
            We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">4. Security</h2>
          <p className="text-gray-400 leading-relaxed">
            Revanx takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </section>

        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="text-gray-500 text-sm">
            Contact us at <a href="mailto:privacy@revanx.com" className="text-neon-green hover:underline">privacy@revanx.com</a> if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
}
