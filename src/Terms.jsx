import React from 'react';

export default function Terms() {
  return (
    <div className="bg-dark-bg text-white min-h-screen py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-4">Last Updated: February 2026</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            By accessing or using Revanx ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Revanx's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on Revanx's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials;</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
          <p className="text-gray-400 leading-relaxed">
            The materials on Revanx's website are provided on an 'as is' basis. Revanx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
          <p className="text-gray-400 leading-relaxed">
            In no event shall Revanx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Revanx's website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">5. Governing Law</h2>
          <p className="text-gray-400 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of Delaware and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="text-gray-500 text-sm">
            Contact us at <a href="mailto:legal@revanx.com" className="text-neon-green hover:underline">legal@revanx.com</a> if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
}
