import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Mailbox from './components/Mailbox';
import TestFailed from './components/TestFailed';
import { mockVendors, mockDashboardStats } from './data/mockData';
import { updateVendorScore } from './utils/scoring';
import { Vendor } from './types';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [vendors, setVendors] = useState<Vendor[]>(mockVendors);
  const [showTestFailed, setShowTestFailed] = useState(false);

  const handlePhishingClick = (emailId: string) => {
    // Simulate clicking on a phishing link - reduce score
    setVendors(prevVendors => {
      const updated = prevVendors.map(vendor => {
        if (vendor.id === '6') { // Simulate James Wilson clicking the link
          return updateVendorScore(vendor, 'fail');
        }
        return vendor;
      });
      
      // Sort by score for ranking
      return updated.sort((a, b) => b.score - a.score).map((vendor, index) => ({
        ...vendor,
        rank: index + 1
      }));
    });
    
    setShowTestFailed(true);
  };

  const handleReportPhishing = (emailId: string) => {
    // Simulate reporting a phishing email - increase score
    setVendors(prevVendors => {
      const updated = prevVendors.map(vendor => {
        if (vendor.id === '1') { // Simulate Sarah Johnson reporting the email
          return updateVendorScore(vendor, 'pass');
        }
        return vendor;
      });
      
      // Sort by score for ranking
      return updated.sort((a, b) => b.score - a.score).map((vendor, index) => ({
        ...vendor,
        rank: index + 1
      }));
    });

    alert('Thank you for reporting this suspicious email! Your security score has been increased.');
  };

  const handleBackToMailbox = () => {
    setShowTestFailed(false);
    setCurrentView('mailbox');
  };

  if (showTestFailed) {
    return <TestFailed onBackToMailbox={handleBackToMailbox} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main>
        {currentView === 'dashboard' && (
          <Dashboard stats={mockDashboardStats} vendors={vendors} />
        )}
        {currentView === 'leaderboard' && (
          <Leaderboard vendors={vendors} />
        )}
        {currentView === 'mailbox' && (
          <Mailbox
            onPhishingClick={handlePhishingClick}
            onReportPhishing={handleReportPhishing}
          />
        )}
      </main>
    </div>
  );
}

export default App;