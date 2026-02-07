import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <nav className="border-b border-gray-100 py-6">
        <div className="container mx-auto px-6">
          <a href="/" className="text-xl font-bold font-display">Revanx</a>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last Updated: February 2026</p>
        
        <div className="prose prose-lg text-gray-600">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Data Collection</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include name, email, phone number, and brokerage affiliation.
            </p>
            <p>
              <strong>Automated Collection:</strong> When you access Revanx, we automatically record certain information about your device and usage, including IP address, browser type, and interaction data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Use of Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our services.</li>
              <li>To process transactions and send related information.</li>
              <li>To monitor and analyze trends, usage, and activities.</li>
              <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Data Sharing</h2>
            <p>
              We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>
          </section>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
            <h3 className="font-bold text-black mb-2">Contact Us</h3>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@revanx.com" className="text-blue-600 underline">privacy@revanx.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
