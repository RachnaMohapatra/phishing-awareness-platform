import React, { useState } from 'react';
import { Mail, AlertTriangle, Trash2, Archive, Flag, ExternalLink, Calendar, Clock } from 'lucide-react';

interface MailboxProps {
  onPhishingClick: (emailId: string) => void;
  onReportPhishing: (emailId: string) => void;
}

const Mailbox: React.FC<MailboxProps> = ({ onPhishingClick, onReportPhishing }) => {
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [emails, setEmails] = useState([
    {
      id: 'phishing-1',
      sender: 'HoneyPhish@company.com',
      subject: 'URGENT: Verify Your Vendor Account Information',
      preview: 'Your vendor account has been flagged for suspicious activity. Immediate verification required...',
      time: '2 hours ago',
      isPhishing: true,
      priority: 'high',
      attachment: false,
      read: false
    },
    {
      id: 'legitimate-1',
      sender: 'noreply@company.com',
      subject: 'Weekly Security Training Reminder',
      preview: 'Don\'t forget to complete your security awareness training module this week...',
      time: '1 day ago',
      isPhishing: false,
      priority: 'normal',
      attachment: true,
      read: true
    },
    {
      id: 'phishing-2',
      sender: 'security-alert@company-vendor.net',
      subject: 'Action Required: Update Payment Details Immediately',
      preview: 'We need to update your payment information within 24 hours to avoid account suspension...',
      time: '3 hours ago',
      isPhishing: true,
      priority: 'high',
      attachment: false,
      read: false
    },
    {
      id: 'legitimate-2',
      sender: 'hr@company.com',
      subject: 'New Security Policy Updates - January 2025',
      preview: 'Please review the updated security policies in the vendor portal. Effective immediately...',
      time: '2 days ago',
      isPhishing: false,
      priority: 'normal',
      attachment: true,
      read: true
    },
    {
      id: 'legitimate-3',
      sender: 'procurement@company.com',
      subject: 'Q1 2025 Vendor Meeting Schedule',
      preview: 'Please find attached the schedule for Q1 vendor meetings and compliance reviews...',
      time: '3 days ago',
      isPhishing: false,
      priority: 'normal',
      attachment: true,
      read: true
    },
    {
      id: 'phishing-3',
      sender: 'alerts@company-secure.org',
      subject: 'Security Alert: Suspicious Login Detected on Your Account',
      preview: 'We detected a suspicious login attempt from an unknown device. Secure your account now...',
      time: '5 hours ago',
      isPhishing: true,
      priority: 'high',
      attachment: false,
      read: false
    },
    {
      id: 'legitimate-4',
      sender: 'support@comapny.com',
      subject: 'System Maintenance Notification',
      preview: 'Scheduled maintenance on vendor portal this weekend. Expected downtime: 2 hours...',
      time: '1 week ago',
      isPhishing: false,
      priority: 'low',
      attachment: false,
      read: true
    }
  ]);

  const selectedEmailData = emails.find(email => email.id === selectedEmail);

  const handleEmailClick = (emailId: string) => {
    setSelectedEmail(emailId);
  };

  const handleClickLink = (emailId: string) => {
    const email = emails.find(e => e.id === emailId);
    if (email?.isPhishing) {
      onPhishingClick(emailId);
    } else {
      // For legitimate emails, just show a normal response
      alert('This link is safe and would normally take you to the official Walmart vendor portal.');
    }
  };

  const handleReportSuspicious = (emailId: string) => {
    const reportedEmail = emails.find(e => e.id === emailId);
    
    if (reportedEmail?.isPhishing) {
      // Create reward email for correctly reporting phishing
      const rewardEmail = {
        id: `reward-${Date.now()}`,
        sender: 'VendorShield Security Team',
        subject: '✅ Successfully Reported Suspicious Email',
        preview: 'Congratulations! You correctly reported a suspicious email. Your cybersecurity awareness score has been increased. As a security-aware vendor, you\'re now eligible for exclusive benefits...',
        time: 'Just now',
        isPhishing: false,
        priority: 'normal' as const,
        attachment: false,
        read: false,
        isReward: true
      };

      setEmails(prevEmails => [rewardEmail, ...prevEmails]);
      
      onReportPhishing(emailId);
    } else {
      // Create misreport email for incorrectly reporting safe emails
      const misreportEmail = {
        id: `misreport-${Date.now()}`,
        sender: 'VendorShield Notification',
        subject: '⚠️ Misreport Notice',
        preview: 'The email you reported was safe and not considered phishing. Repeated misreports may impact your awareness score...',
        time: 'Just now',
        isPhishing: false,
        priority: 'normal' as const,
        attachment: false,
        read: false,
        isMisreport: true
      };

      setEmails(prevEmails => [misreportEmail, ...prevEmails]);
    }
    
    setEmails(prevEmails => 
      prevEmails.map(email => 
        email.id === emailId ? { ...email, read: true } : email
      )
    );

    setSelectedEmail(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Fake Mailbox UI - Phishing Simulation Inbox</h1>
        <p className="text-gray-600 mt-2">Test your phishing detection skills in a realistic email environment</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <div>
            <h3 className="font-medium text-amber-800">Training Environment - HoneyPhish Simulation</h3>
            <p className="text-sm text-amber-700">
              This is a simulated mailbox for security training. Some emails may be phishing attempts from HoneyPhish@company.com - report suspicious emails instead of clicking links.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
        {/* Email List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="font-bold text-gray-900 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Inbox ({emails.length})
            </h2>
          </div>
          <div className="overflow-y-auto h-full">
            {emails.map((email) => (
              <div
                key={email.id}
                onClick={() => handleEmailClick(email.id)}
                className={`p-4 border-b cursor-pointer transition-colors ${
                  selectedEmail === email.id ? 'bg-amber-50 border-l-4 border-l-amber-500' : 
                  email.read ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'
                } ${email.isPhishing && !email.read ? 'hover:bg-red-25' : ''} ${
                  (email as any).isReward ? 'bg-green-50 border-l-4 border-l-green-500' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    email.priority === 'high' ? 'bg-red-500' : 
                    email.priority === 'normal' ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm truncate ${
                        email.read ? 'text-gray-600' : 'font-semibold text-gray-900'
                      }`}>{email.sender}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-gray-500">{email.time}</p>
                        {!email.read && <div className="w-2 h-2 bg-amber-500 rounded-full"></div>}
                      </div>
                    </div>
                    <p className={`text-sm mt-1 ${
                      email.read ? 'text-gray-600' : 'font-medium text-gray-800'
                    }`}>{email.subject}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">{email.preview}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      {email.attachment && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          📎 Attachment
                        </span>
                      )}
                      {email.isPhishing && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded animate-pulse">
                          ⚠️ Phishing Test
                        </span>
                      )}
                      {(email as any).isReward && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded animate-pulse">
                          🎉 Reward Email
                        </span>
                      )}
                      {(email as any).isMisreport && (
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded animate-pulse">
                          ⚠️ Misreport Notice
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Content */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border">
          {selectedEmailData ? (
            <div className="h-full flex flex-col">
              {/* Email Header */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{selectedEmailData.subject}</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleReportSuspicious(selectedEmailData.id)}
                      className="flex items-center space-x-1 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors font-medium"
                    >
                      <Flag className="h-4 w-4" />
                      <span>Report as Suspicious</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                      <Archive className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>From: <strong>{selectedEmailData.sender}</strong></span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedEmailData.time}</span>
                  </span>
                  {selectedEmailData.isPhishing && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                      🎯 Phishing Simulation
                    </span>
                  )}
                  {(selectedEmailData as any).isReward && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      🎉 Security Reward
                    </span>
                  )}
                  {(selectedEmailData as any).isMisreport && (
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                      ⚠️ Training Notice
                    </span>
                  )}
                </div>
              </div>

              {/* Email Body */}
              <div className="flex-1 p-6 overflow-y-auto">
                {(selectedEmailData as any).isReward ? (
                  <div className="space-y-6">
                    <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="text-6xl mb-4">🎉</div>
                      <h2 className="text-2xl font-bold text-green-800 mb-2">Congratulations!</h2>
                      <p className="text-green-700 text-lg">
                        You correctly reported a suspicious email. Your cybersecurity awareness score has been increased.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">🎁 As a security-aware vendor, you're now eligible for:</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-green-700 mb-3">🟢 Trust & Visibility Benefits</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 rounded-lg">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Benefit</th>
                                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">🛡️ "Security-Aware Vendor" Badge</td>
                                  <td className="px-4 py-3">Visible on product listings to build trust with customers</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">🔝 Priority Listing Boost</td>
                                  <td className="px-4 py-3">Featured higher in customer search results</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">✅ Verified Vendor Label</td>
                                  <td className="px-4 py-3">Marked as a secure vendor in Walmart's partner portal</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 font-medium">🌟 Customer Trust Boost</td>
                                  <td className="px-4 py-3">Highlighted in "Trusted by Walmart" category</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-green-700 mb-3">💸 Financial or Partnership Perks</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 rounded-lg">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Benefit</th>
                                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">💰 Lower Commission Fees</td>
                                  <td className="px-4 py-3">1–2% reduction in vendor fees for top-tier performers</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">🚚 Logistics Priority</td>
                                  <td className="px-4 py-3">Preferred access to Walmart's fulfillment centers</td>
                                </tr>
                                <tr className="border-b">
                                  <td className="px-4 py-3 font-medium">🎯 Ad Credit Bonus</td>
                                  <td className="px-4 py-3">Free or discounted ad campaign slots on Walmart marketplace</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 font-medium">🧾 Early Access to Partnership Programs</td>
                                  <td className="px-4 py-3">Invitations to beta test new seller tools, dashboards, or pilot programs</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 font-medium">
                        Keep up the excellent security awareness! Your vigilance helps protect the entire Walmart vendor ecosystem.
                      </p>
                    </div>

                    <p className="text-gray-700">
                      Best regards,<br />
                      <strong>VendorShield Security Team</strong><br />
                      Walmart Vendor Security Division
                    </p>
                  </div>
                ) : selectedEmailData.isPhishing ? (
                  <div className="space-y-4">
                    <p className="text-gray-700">Dear Valued Vendor,</p>
                    <p className="text-gray-700">
                      We have detected unusual activity on your vendor account and need to verify your information immediately.
                      This is a critical security measure to protect your account from unauthorized access and potential data breaches.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-bold text-lg">⚠️ URGENT ACTION REQUIRED</p>
                      <p className="text-red-700 mt-2">
                        Your vendor account will be suspended within 24 hours if you do not verify your information immediately.
                        Failure to act may result in loss of vendor privileges and contract termination.
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Please click the verification link below to secure your account and maintain your vendor status:
                    </p>
                    <div className="my-6 text-center">
                      <button
                        onClick={() => handleClickLink(selectedEmailData.id)}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-bold text-lg"
                      >
                        <ExternalLink className="h-6 w-6" />
                        <span>CLICK LINK - VERIFY ACCOUNT NOW</span>
                      </button>
                    </div>
                    <p className="text-gray-700">
                      If you have any questions about this security verification, please contact our support team immediately at the number provided in your vendor agreement.
                    </p>
                    <p className="text-gray-700">
                      Best regards,<br />
                      <strong>HoneyPhish Security Team</strong><br />
                      Walmart Vendor Security Division
                    </p>
                    <div className="text-xs text-gray-500 mt-6 border-t pt-4">
                      <p>This email was sent from: vendorshield@company.com</p>
                      <p>If you believe this email is suspicious, please report it immediately.</p>
                    </div>
                  </div>
                ) : (selectedEmailData as any).isMisreport ? (
                  <div className="space-y-4">
                    <p className="text-gray-700">Dear Vendor,</p>
                    <p className="text-gray-700">
                      The email you reported was safe and not considered phishing.
                      Repeated misreports may impact your awareness score.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-orange-800 font-medium">📚 Training Reminder</p>
                      <p className="text-orange-700 mt-2">
                        Please revisit your phishing training resources to stay sharp. Recognizing threats accurately is key to maintaining your Security-Aware Vendor status.
                      </p>
                    </div>
                    <p className="text-gray-700">
                      We encourage you to continue reporting suspicious emails, but please ensure you're familiar with the key indicators of phishing attempts versus legitimate communications.
                    </p>
                    <p className="text-gray-700">
                      Best regards,<br />
                      <strong>VendorShield Notification Team</strong><br />
                      Walmart Vendor Security Division
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-700">Hello,</p>
                    <p className="text-gray-700">
                      This is a reminder about your upcoming security awareness training module that needs to be completed by the end of this week.
                    </p>
                    <p className="text-gray-700">
                      Please log into the official vendor portal to access your training materials and complete the required modules.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 font-medium">📚 Training Information</p>
                      <p className="text-blue-700 mt-2">
                        Module: Advanced Phishing Detection<br />
                        Due Date: Friday, January 19, 2025<br />
                        Duration: 30 minutes<br />
                        Completion Status: Pending
                      </p>
                    </div>
                    <div className="my-6">
                      <button
                        onClick={() => handleClickLink(selectedEmailData.id)}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Access Training Portal</span>
                      </button>
                    </div>
                    <p className="text-gray-700">
                      Thank you for your continued commitment to security awareness and compliance.
                    </p>
                    <p className="text-gray-700">
                      Best regards,<br />
                      <strong>Walmart Vendor Relations Team</strong><br />
                      Human Resources Department
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Mail className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Select an email to view its contents</p>
                <p className="text-sm">Click on any email in the inbox to start reading</p>
                <div className="mt-4 text-xs text-gray-400">
                  <p>🎯 Look for phishing emails from VendorShield@company.com</p>
                  <p>📧 Report suspicious emails instead of clicking links</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mailbox;