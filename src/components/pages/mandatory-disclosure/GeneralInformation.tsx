import React from 'react';

const generalInfo = [
  { label: 'Name of the School', value: 'KHARAGPUR VISION ACADEMY' },
  { label: 'Affiliation No.', value: '2430236' },
  { label: 'School Code ', value: '15653' },
  { 
    label: 'Complete Address with Pin Code',
    value: 'Mumbai - Kolkata Highway, Sadatpur, Kharagpur, 721301, West Bengal, India'
  },
  { 
    label: 'Principal Name & Qualification',
    value: 'Mr. Saptarshi Chakraborty, M.Sc., B.Ed'
  },
  { label: 'School Email ID', value: 'kvaschool2016@gmail.com' },
  { 
    label: 'Contact Details (Landline/Mobile)',
    value: '+91 7479005656, +91 9474898844'
  }
];

export function GeneralInformation() {
  return (
    <section id="general" className="scroll-mt-24">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#2A8C4A] px-6 py-4">
          <h2 className="text-xl font-bold text-white">A. General Information</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {generalInfo.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-gray-700">{item.label}</div>
                <div className="md:col-span-2 text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}