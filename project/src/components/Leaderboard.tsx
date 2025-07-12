import React, { useState } from 'react';
import { Trophy, Award, Star, TrendingUp, Search, Medal } from 'lucide-react';
import { Vendor } from '../types';
import { formatTimeAgo } from '../utils/scoring';

interface LeaderboardProps {
  vendors: Vendor[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ vendors }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeIcon = (badge: Vendor['badge']) => {
    switch (badge) {
      case 'platinum':
        return { icon: Star, color: 'text-purple-600', bg: 'bg-purple-100', label: 'Platinum' };
      case 'gold':
        return { icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Gold' };
      case 'silver':
        return { icon: Award, color: 'text-gray-600', bg: 'bg-gray-100', label: 'Silver' };
      case 'bronze':
        return { icon: Medal, color: 'text-orange-600', bg: 'bg-orange-100', label: 'Bronze' };
      default:
        return { icon: Award, color: 'text-gray-400', bg: 'bg-gray-50', label: 'No Badge' };
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-purple-600 bg-purple-50 border-purple-200';
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 70) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">HoneyPhish Vendor Security Leaderboard</h1>
        <p className="text-gray-600 mt-2">Track your security awareness performance and earn badges</p>
      </div>

      {/* Badge Requirements */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Trophy className="h-6 w-6 text-amber-500 mr-2" />
          Badge System Requirements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
            <Star className="h-10 w-10 text-purple-600 mx-auto mb-2" />
            <div className="font-bold text-purple-900 text-lg">Platinum</div>
            <div className="text-sm text-purple-700">Score ≥ 90</div>
            <div className="text-xs text-purple-600 mt-1">Elite Security Expert</div>
          </div>
          <div className="text-center p-4 bg-yellow-100 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow">
            <Trophy className="h-10 w-10 text-yellow-600 mx-auto mb-2" />
            <div className="font-bold text-yellow-900 text-lg">Gold</div>
            <div className="text-sm text-yellow-700">Score ≥ 80</div>
            <div className="text-xs text-yellow-600 mt-1">Advanced Security</div>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <Award className="h-10 w-10 text-gray-600 mx-auto mb-2" />
            <div className="font-bold text-gray-900 text-lg">Silver</div>
            <div className="text-sm text-gray-700">Score ≥ 70</div>
            <div className="text-xs text-gray-600 mt-1">Good Security</div>
          </div>
          <div className="text-center p-4 bg-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
            <Medal className="h-10 w-10 text-orange-600 mx-auto mb-2" />
            <div className="font-bold text-orange-900 text-lg">Bronze</div>
            <div className="text-sm text-orange-700">Score ≥ 60</div>
            <div className="text-xs text-orange-600 mt-1">Basic Security</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-lg border p-4">
        <div className="flex items-center space-x-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
          <div className="text-sm text-gray-500">
            {filteredVendors.length} of {vendors.length} vendors
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-6 w-6 text-amber-600 mr-2" />
            Current Rankings - Live Leaderboard
          </h2>
          <p className="text-sm text-gray-600 mt-1">Updated in real-time based on phishing simulation performance</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredVendors.map((vendor, index) => {
            const badgeInfo = getBadgeIcon(vendor.badge);
            const BadgeIcon = badgeInfo.icon;
            const isTopThree = vendor.rank <= 3;
            
            return (
              <div
                key={vendor.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${
                  isTopThree ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-l-amber-400' : ''
                }`}
              >
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full font-bold text-xl ${
                    vendor.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg transform scale-110' :
                    vendor.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white shadow-md transform scale-105' :
                    vendor.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md' :
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {getRankIcon(vendor.rank)}
                  </div>

                  {/* Vendor Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${badgeInfo.bg} border`}>
                        <BadgeIcon className={`h-4 w-4 ${badgeInfo.color}`} />
                        <span className={`text-sm font-medium ${badgeInfo.color}`}>
                          {badgeInfo.label}
                        </span>
                      </div>
                      {isTopThree && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                          TOP PERFORMER
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-1">{vendor.company} • {vendor.department}</p>
                    <p className="text-sm text-gray-500">
                      Last activity: {formatTimeAgo(vendor.lastActivity)} • {vendor.email}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-center">
                    <div className={`text-4xl font-bold px-6 py-3 rounded-xl border-2 ${getScoreColor(vendor.score)}`}>
                      {vendor.score}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Security Score</p>
                  </div>

                  {/* Stats */}
                  <div className="text-right space-y-2 min-w-[120px]">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-green-50 px-2 py-1 rounded text-center">
                        <div className="font-bold text-green-600">{vendor.testsPassed}</div>
                        <div className="text-xs text-green-500">Reported</div>
                      </div>
                      <div className="bg-red-50 px-2 py-1 rounded text-center">
                        <div className="font-bold text-red-600">{vendor.testsFailed}</div>
                        <div className="text-xs text-red-500">Clicked</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center">
                      {vendor.testsCompleted} total tests
                    </div>
                    <div className="text-xs text-gray-400 text-center">
                      {vendor.testsCompleted > 0 ? 
                        `${((vendor.testsPassed / vendor.testsCompleted) * 100).toFixed(0)}% success rate` : 
                        'No tests yet'
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filteredVendors.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-lg text-gray-500">No vendors found matching your search</p>
          <p className="text-sm text-gray-400">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;