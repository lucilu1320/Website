import React from 'react';
import { FileText, CreditCard, Clock, BookOpen, HelpCircle } from 'lucide-react';

const guidelines = {
  payment: [
    {
      icon: CreditCard,
      title: 'Payment Methods',
      items: [
        'Fees can be paid through Cash, Cheque, or Online Transfer',
        'Cheques should be drawn in favor of "Kharagpur Vision Academy"',
        'Online payment facility available through school portal',
        'Payment receipts must be preserved for future reference'
      ]
    },
    {
      icon: Clock,
      title: 'Payment Schedule',
      items: [
        'Monthly fees must be paid by the 10th of each month',
        'Quarterly fees to be paid in April, July, October, and January',
        'Late payment attracts a fine of ₹50 per day',
        'Fees for the entire year can be paid in advance'
      ]
    },
    {
      icon: BookOpen,
      title: 'Academic Guidelines',
      items: [
        'Age calculation is as of April 1st of the academic year',
        'Transfer Certificate is mandatory for admission to classes II and above',
        'Original documents must be presented for verification',
        'Admission is subject to availability of seats'
      ]
    },
    {
      icon: HelpCircle,
      title: 'Additional Information',
      items: [
        'Sibling discount of 10% on tuition fees for second child',
        'Staff ward concession as per school policy',
        'Special provisions for merit students',
        'Scholarships available for deserving candidates'
      ]
    }
  ],
  general: [
    'Fee structure is subject to annual revision',
    'All fees are non-refundable and non-transferable',
    'One month\'s notice required for withdrawal',
    'School reserves the right to deny admission',
    'Admission process must be completed within specified timeline',
    'Parents must attend orientation program',
    'Regular attendance is mandatory as per school policy',
    'School uniform and books must be purchased from authorized vendors'
  ]
};

export function Guidelines() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Guidelines"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Guidelines</h1>
              <p className="text-xl opacity-90">Important Information for Parents and Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FileText className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Guidelines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important information regarding fee payment and admission process
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Detailed Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {guidelines.payment.map((section) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#2A8C4A]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#90C95F] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* General Guidelines */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#2A8C4A] mb-6">General Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guidelines.general.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-2 h-2 bg-[#90C95F] rounded-full mt-2 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-150" />
                    <span className="text-gray-600 group-hover:text-[#2A8C4A] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join KVA?</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Take the first step towards excellence in education. Join Kharagpur Vision Academy.
          </p>
        </div>
      </section>
    </div>
  );
}