import { Vendor, PhishingTest, DashboardStats } from '../types';

export const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@techcorp.com',
    score: 95,
    rank: 1,
    testsCompleted: 12,
    testsPassed: 11,
    testsFailed: 1,
    lastActivity: '2025-01-15T10:30:00Z',
    badge: 'platinum',
    company: 'TechCorp Solutions',
    department: 'IT Services'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@logistics.com',
    score: 88,
    rank: 2,
    testsCompleted: 10,
    testsPassed: 9,
    testsFailed: 1,
    lastActivity: '2025-01-15T09:15:00Z',
    badge: 'gold',
    company: 'Global Logistics Inc',
    department: 'Supply Chain'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'e.rodriguez@marketing.co',
    score: 82,
    rank: 3,
    testsCompleted: 8,
    testsPassed: 7,
    testsFailed: 1,
    lastActivity: '2025-01-15T08:45:00Z',
    badge: 'gold',
    company: 'Creative Marketing Co',
    department: 'Digital Marketing'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'dkim@foodservice.net',
    score: 76,
    rank: 4,
    testsCompleted: 9,
    testsPassed: 6,
    testsFailed: 3,
    lastActivity: '2025-01-14T16:20:00Z',
    badge: 'silver',
    company: 'Food Service Plus',
    department: 'Operations'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lthompson@retail.com',
    score: 68,
    rank: 5,
    testsCompleted: 7,
    testsPassed: 4,
    testsFailed: 3,
    lastActivity: '2025-01-14T14:10:00Z',
    badge: 'bronze',
    company: 'Retail Partners',
    department: 'Merchandising'
  },
  {
    id: '6',
    name: 'James Wilson',
    email: 'jwilson@construction.biz',
    score: 55,
    rank: 6,
    testsCompleted: 6,
    testsPassed: 3,
    testsFailed: 3,
    lastActivity: '2025-01-13T11:30:00Z',
    badge: null,
    company: 'Wilson Construction',
    department: 'Project Management'
  }
];

export const mockTests: PhishingTest[] = [
  {
    id: '1',
    vendorId: '1',
    emailSubject: 'Urgent: Verify Your Account Information',
    sentAt: '2025-01-15T10:00:00Z',
    reportedAt: '2025-01-15T10:05:00Z',
    status: 'reported',
    scored: true
  },
  {
    id: '2',
    vendorId: '2',
    emailSubject: 'Action Required: Update Payment Details',
    sentAt: '2025-01-15T09:00:00Z',
    reportedAt: '2025-01-15T09:03:00Z',
    status: 'reported',
    scored: true
  },
  {
    id: '3',
    vendorId: '6',
    emailSubject: 'Security Alert: Suspicious Login Detected',
    sentAt: '2025-01-13T11:00:00Z',
    clickedAt: '2025-01-13T11:02:00Z',
    status: 'clicked',
    scored: true
  }
];

export const mockDashboardStats: DashboardStats = {
  totalVendors: 6,
  totalTests: 52,
  passRate: 73.5,
  activeThreats: 3,
  averageScore: 77.3,
  recentActivity: [
    {
      id: '1',
      vendorName: 'Sarah Johnson',
      action: 'Reported suspicious email',
      timestamp: '2025-01-15T10:05:00Z',
      result: 'pass'
    },
    {
      id: '2',
      vendorName: 'Michael Chen',
      action: 'Reported phishing attempt',
      timestamp: '2025-01-15T09:03:00Z',
      result: 'pass'
    },
    {
      id: '3',
      vendorName: 'James Wilson',
      action: 'Clicked suspicious link',
      timestamp: '2025-01-13T11:02:00Z',
      result: 'fail'
    }
  ]
};