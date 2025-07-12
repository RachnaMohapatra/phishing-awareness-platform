import { Vendor } from '../types';

export const calculateBadge = (score: number): Vendor['badge'] => {
  if (score >= 90) return 'platinum';
  if (score >= 80) return 'gold';
  if (score >= 70) return 'silver';
  if (score >= 60) return 'bronze';
  return null;
};

export const updateVendorScore = (vendor: Vendor, action: 'pass' | 'fail'): Vendor => {
  const scoreChange = action === 'pass' ? 5 : -10;
  const newScore = Math.max(0, Math.min(100, vendor.score + scoreChange));
  
  return {
    ...vendor,
    score: newScore,
    badge: calculateBadge(newScore),
    testsCompleted: vendor.testsCompleted + 1,
    testsPassed: action === 'pass' ? vendor.testsPassed + 1 : vendor.testsPassed,
    testsFailed: action === 'fail' ? vendor.testsFailed + 1 : vendor.testsFailed,
    lastActivity: new Date().toISOString()
  };
};

export const formatTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMinutes = Math.floor((now.getTime() - past.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
};