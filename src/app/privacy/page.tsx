'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Privacy Policy
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection and Use</h2>
              <p className="text-gray-600">
                We collect information to provide better services to our customers and improve their experience.
                The types of information we collect include contact information, usage data, and technical data
                about how you interact with our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your personal
                data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure,
                or access.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to track activity on our website and hold
                certain information. Cookies are files with small amount of data which may include an
                anonymous unique identifier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li className="mb-2">Right to access your personal data</li>
                <li className="mb-2">Right to rectification of inaccurate personal data</li>
                <li className="mb-2">Right to erasure of your personal data</li>
                <li className="mb-2">Right to restrict processing of your personal data</li>
                <li className="mb-2">Right to data portability</li>
                <li>Right to object to processing of your personal data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us through our contact page
                or by email at privacy@example.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 