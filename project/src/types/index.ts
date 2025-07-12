export interface Vendor {
  id: string;
  name: string;
  email: string;
  score: number;
  rank: number;
  testsCompleted: number;
  testsPassed: number;
  testsFailed: number;
  lastActivity: string;
  badge: 'bronze' | 'silver' | 'gold' | 'platinum' | null;
  company: string;
  department: string;
}

export interface PhishingTest {
  id: string;
  vendorId: string;
  emailSubject: string;
  sentAt: string;
  clickedAt?: string;
  reportedAt?: string;
  status: 'sent' | 'clicked' | 'reported';
  scored: boolean;
}

export interface DashboardStats {
  totalVendors: number;
  totalTests: number;
  passRate: number;
  activeThreats: number;
  averageScore: number;
  recentActivity: Array<{
    id: string;
    vendorName: string;
    action: string;
    timestamp: string;
    result: 'pass' | 'fail';
  }>;
}