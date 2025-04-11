import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          We are dedicated to connecting talented professionals with outstanding career opportunities.
          Our platform brings together job seekers and employers, creating meaningful connections that
          drive success.
        </p>
        <p className="text-lg mb-4">
          With years of experience in the recruitment industry, we understand the challenges both
          employers and job seekers face in today's competitive market.
        </p>
      </div>
    </div>
  );
}