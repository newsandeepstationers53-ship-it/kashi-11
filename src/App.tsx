/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { RepairEstimator } from './components/RepairEstimator.tsx';
import { JobTracker } from './components/JobTracker.tsx';
import { ServicesBento } from './components/ServicesBento.tsx';
import { SymptomTroubleshooter } from './components/SymptomTroubleshooter.tsx';
import { PricingTable } from './components/PricingTable.tsx';
import { ShopLocation } from './components/ShopLocation.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { QuickActionFooterBar } from './components/QuickActionFooterBar.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [prefilledBooking, setPrefilledBooking] = useState<{
    deviceType: string;
    brand: string;
    issue: string;
    estCost: number;
  } | null>(null);

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    const el = document.getElementById('tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithEstimate = (details: { deviceType: string; brand: string; issue: string; estCost: number }) => {
    setPrefilledBooking(details);
    const el = document.getElementById('tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceTitle: string) => {
    setPrefilledBooking({
      deviceType: 'General',
      brand: 'Selected Brand',
      issue: serviceTitle,
      estCost: 500
    });
    const el = document.getElementById('tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onScrollToEstimator={scrollToEstimator}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Repair Cost & Time Estimator */}
        <RepairEstimator
          language={language}
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Live Job Sheet Tracker & Booking */}
        <JobTracker
          language={language}
          prefilledBooking={prefilledBooking}
          onClearPrefilled={() => setPrefilledBooking(null)}
        />

        {/* Services Showcase Bento */}
        <ServicesBento
          language={language}
          onBookService={handleBookService}
        />

        {/* Smart Diagnostic Troubleshooter */}
        <SymptomTroubleshooter
          language={language}
          onBookResult={handleBookService}
        />

        {/* Standard Rates & Pricing Schedule */}
        <PricingTable
          language={language}
          onBookItem={handleBookService}
        />

        {/* Workshop Location, Landmarks & Google Map */}
        <ShopLocation
          language={language}
        />

        {/* Local Raebareli Reviews */}
        <ReviewsSection
          language={language}
        />

        {/* Frequently Asked Questions */}
        <FAQSection
          language={language}
        />
      </main>

      {/* Mobile Sticky Quick Contact Bar (<15% viewport height) */}
      <QuickActionFooterBar
        language={language}
        onScrollToEstimator={scrollToEstimator}
      />

      {/* Quiet Footer */}
      <Footer
        language={language}
      />
    </div>
  );
}
