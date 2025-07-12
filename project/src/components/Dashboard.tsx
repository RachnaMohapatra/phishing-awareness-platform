import React, { useState } from 'react';
import {
  Users, AlertTriangle, TrendingUp, CheckCircle, Clock, XCircle,
  Download, Activity, BarChart3
} from 'lucide-react';
import { DashboardStats, Vendor } from '../types';
import { formatTimeAgo } from '../utils/scoring';

interface DashboardProps {
  stats: DashboardStats;
  vendors: Vendor[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats, vendors }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statCards = [
    { title: 'Total Vendors', value: stats.totalVendors.toString(), icon: Users, color: 'blue', change: '+12%' },
    { title: 'Tests Conducted', value: stats.totalTests.toString(), icon: CheckCircle, color: 'green', change: '+8%' },
    { title: 'Pass Rate', value: `${stats.passRate}%`, icon: TrendingUp, color: 'emerald', change: '+5.2%' },
    { title: 'Active Threats', value: stats.activeThreats.toString(), icon: AlertTriangle, color: 'red', change: '-2' }
  ];

  const getStatusColor = (result: string) => result === 'pass' ? 'text-green-600' : 'text-red-600';
  const getStatusIcon = (result: string) => result === 'pass' ? CheckCircle : XCircle;

  const calculateClickedReportedRatio = (vendor: Vendor) => {
    const total = vendor.testsCompleted;
    if (total === 0) return <span className="text-gray-400">No tests</span>;

    const clickedRatio = ((vendor.testsFailed / total) * 100).toFixed(1);
    const reportedRatio = ((vendor.testsPassed / total) * 100).toFixed(1);

    return (
      <div className="space-x-1">
        <span className="text-red-600 font-semibold">{clickedRatio}% clicked</span>
        <span className="text-gray-400">/</span>
        <span className="text-green-600 font-semibold">{reportedRatio}% reported</span>
      </div>
    );
  };

  const downloadReport = () => {
    const csvContent = [
      ['Name', 'Email', 'Company', 'Score', 'Tests Completed', 'Tests Passed', 'Tests Failed', 'Click Rate', 'Report Rate', 'Last Activity'].join(','),
      ...vendors.map(vendor => [
        vendor.name,
        vendor.email,
        vendor.company,
        vendor.score,
        vendor.testsCompleted,
        vendor.testsPassed,
        vendor.testsFailed,
        `${((vendor.testsFailed / vendor.testsCompleted) * 100).toFixed(1)}%`,
        `${((vendor.testsPassed / vendor.testsCompleted) * 100).toFixed(1)}%`,
        formatTimeAgo(vendor.lastActivity)
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `honeyphish-vendor-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">HoneyPhish Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor vendor security awareness and phishing simulation performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
            <div className="text-sm text-amber-600 font-medium">Average Score</div>
            <div className="text-2xl font-bold text-amber-700">{stats.averageScore}</div>
          </div>
          <button
            onClick={downloadReport}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Report (CSV)</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          const colorClasses = {
            blue: 'bg-blue-500 text-blue-100',
            green: 'bg-green-500 text-green-100',
            emerald: 'bg-emerald-500 text-emerald-100',
            red: 'bg-red-500 text-red-100'
          };
          return (
            <div key={card.title} className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                  <p className="text-sm text-green-600 mt-2 font-medium">{card.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[card.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vendor Table & Activity Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vendor Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <BarChart3 className="h-6 w-6 text-amber-600 mr-2" />
                All Vendors Performance
              </h2>
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click/Report Ratio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Test</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                        <div className="text-sm text-gray-500">{vendor.email}</div>
                        <div className="text-xs text-gray-400">{vendor.company}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        vendor.score >= 90 ? 'bg-purple-100 text-purple-800' :
                        vendor.score >= 80 ? 'bg-green-100 text-green-800' :
                        vendor.score >= 70 ? 'bg-blue-100 text-blue-800' :
                        vendor.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {vendor.score}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {calculateClickedReportedRatio(vendor)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatTimeAgo(vendor.lastActivity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl font-bold text-gray-900">Live Activity Log</h2>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {stats.recentActivity.map((activity) => {
              const StatusIcon = getStatusIcon(activity.result);
              return (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <StatusIcon className={`h-5 w-5 mt-0.5 ${getStatusColor(activity.result)}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{activity.vendorName}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{formatTimeAgo(activity.timestamp)}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        activity.result === 'pass'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.result === 'pass' ? 'Reported' : 'Clicked Link'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
