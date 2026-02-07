import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <nav className="border-b border-gray-100 py-6">
        <div className="container mx-auto px-6">
          <a href="/" className="text-xl font-bold font-display">Revanx</a>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 font-display">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last Updated: February 2026</p>
        
        <div className="prose prose-lg text-gray-600">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using Revanx ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Revanx's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display;</li>
              <li>Attempt to decompile or reverse engineer any software contained on Revanx's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials;</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Disclaimer</h2>
            <p>
              The materials on Revanx's website are provided on an 'as is' basis. Revanx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
            <h3 className="font-bold text-black mb-2">Contact Us</h3>
            <p className="text-sm">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@revanx.com" className="text-blue-600 underline">legal@revanx.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
