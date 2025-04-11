import React from 'react';

export function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including when you create an account,
          update your profile, or communicate with us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to develop
          new ones, and to protect our users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Sharing and Security</h2>
        <p className="mb-4">
          We do not share personal information with companies, organizations, or individuals outside
          of our organization except in the following cases: with your consent, for legal reasons, or
          as part of a business transfer.
        </p>
      </div>
    </div>
  );
}