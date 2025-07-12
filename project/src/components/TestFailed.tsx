import React from 'react';
import { XCircle, AlertTriangle, BookOpen, ArrowLeft, TrendingDown } from 'lucide-react';

interface TestFailedProps {
  onBackToMailbox: () => void;
}

const TestFailed: React.FC<TestFailedProps> = ({ onBackToMailbox }) => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
            <XCircle className="h-24 w-24 text-white mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold text-white mb-2">You Failed the Phishing Simulation!</h1>
            <p className="text-red-100 text-lg">HoneyPhish Security Test - Unsuccessful</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Score Impact */}
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 text-center">
              <TrendingDown className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-red-800 mb-2">Score Reduction</h3>
              <p className="text-red-700 text-lg">
                <strong>Your score decreased by 10 points</strong>
              </p>
              <p className="text-sm text-red-600 mt-2">
                This will affect your ranking on the leaderboard
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-3">What Happened?</h3>
                  <p className="text-red-700 mb-3">
                    You clicked on a malicious link in a simulated phishing email from <strong>vendorshield@company.com</strong>. 
                    In a real attack, this could have resulted in:
                  </p>
                  <ul className="list-disc list-inside text-red-700 space-y-2">
                    <li><strong>Compromised login credentials</strong> - Attackers could steal your username and password</li>
                    <li><strong>Malware installation</strong> - Malicious software could be installed on your device</li>
                    <li><strong>Unauthorized access to sensitive data</strong> - Company and personal information at risk</li>
                    <li><strong>Financial theft</strong> - Banking and payment information could be stolen</li>
                    <li><strong>Identity theft</strong> - Personal information used for fraudulent activities</li>
                    <li><strong>Network compromise</strong> - Entire company network could be at risk</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <BookOpen className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">How to Identify Phishing Emails</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">🔍 Red Flags to Watch For:</h4>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li><strong>Urgent language:</strong> "URGENT", "IMMEDIATE ACTION REQUIRED"</li>
                        <li><strong>Threats:</strong> Account suspension, legal action</li>
                        <li><strong>Suspicious sender:</strong> Check email domain carefully</li>
                        <li><strong>Generic greetings:</strong> "Dear Customer" instead of your name</li>
                        <li><strong>Grammar errors:</strong> Poor spelling and grammar</li>
                        <li><strong>Suspicious links:</strong> Hover to see actual URL</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">✅ Verification Steps:</h4>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li><strong>Verify sender:</strong> Contact through official channels</li>
                        <li><strong>Check URLs:</strong> Look for misspellings in domains</li>
                        <li><strong>Don't rush:</strong> Legitimate companies give time</li>
                        <li><strong>Use official websites:</strong> Type URLs manually</li>
                        <li><strong>Ask IT:</strong> When in doubt, consult security team</li>
                        <li><strong>Report suspicious emails:</strong> Help protect others</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-800 mb-3">What You Should Do Instead</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold text-amber-800">Don't Click Suspicious Links</p>
                      <p className="text-amber-700 text-sm">Always verify through official channels first</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-amber-800">Report the Email</p>
                      <p className="text-amber-700 text-sm">Use the "Report as Suspicious" button</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-amber-800">Contact IT Support</p>
                      <p className="text-amber-700 text-sm">When in doubt, ask for help immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-semibold text-amber-800">Verify Independently</p>
                      <p className="text-amber-700 text-sm">Call or visit official websites directly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Learning Opportunity</h3>
                <p className="text-gray-600 mb-2">
                  This simulation helps you recognize real phishing attempts in the future.
                </p>
                <p className="text-sm text-gray-500">
                  Complete additional training modules to improve your security awareness score.
                </p>
              </div>

              <button
                onClick={onBackToMailbox}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium text-lg"
              >
                <ArrowLeft className="h-6 w-6" />
                <span>Back to Mailbox</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestFailed;