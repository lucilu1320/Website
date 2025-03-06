import React from 'react';
import { Calculator, Calendar } from 'lucide-react';

const feeStructure = {
  'NUR - UKG': {
    admissionFees: 11000,
    examinationFees: 1700,
    itFees: 800,
    sportsFees: 1000,
    diaryFees: 1000,
    tuitionFees: 1100,
    total: 16600
  },
  'I & II': {
    admissionFees: 11500,
    examinationFees: 2000,
    itFees: 1200,
    sportsFees: 1200,
    diaryFees: 1000,
    tuitionFees: 1450,
    total: 18350
  },
  'III & IV': {
    admissionFees: 14000,
    examinationFees: 2000,
    itFees: 1400,
    sportsFees: 1300,
    diaryFees: 1000,
    tuitionFees: 1650,
    total: 21350
  },
  'V & VI': {
    admissionFees: 15000,
    examinationFees: 2100,
    itFees: 1700,
    sportsFees: 1400,
    diaryFees: 1000,
    tuitionFees: 1750,
    total: 22950
  },
  'VII & VIII': {
    admissionFees: 17000,
    examinationFees: 2200,
    itFees: 2100,
    sportsFees: 1600,
    diaryFees: 1000,
    tuitionFees: 2050,
    total: 25950
  },
  'IX': {
    admissionFees: 24000,
    examinationFees: 2600,
    itFees: 3150,
    sportsFees: 2500,
    diaryFees: 1000,
    tuitionFees: 2750,
    total: 36000
  },
  'X': {
    admissionFees: 15000,
    examinationFees: 2600,
    itFees: 3150,
    sportsFees: 2500,
    diaryFees: 1000,
    tuitionFees: 2800,
    total: 27050
  },
  'XI': {
    admissionFees: 27000,
    examinationFees: 6000,
    itFees: 3800,
    sportsFees: 3200,
    diaryFees: 1000,
    tuitionFees: 3300,
    total: 44300
  },
  'XII': {
    admissionFees: 15000,
    examinationFees: 6000,
    itFees: 3900,
    sportsFees: 3200,
    diaryFees: 1000,
    tuitionFees: 3350,
    total: 32450
  }
};

const ageCriteria = [
  { class: 'Toddlers', age: '2.5+ years' },
  { class: 'Nursery', age: '3+ years' },
  { class: 'LKG', age: '4+ years' },
  { class: 'UKG', age: '5+ years' },
  { class: 'Class I', age: '6+ years' },
  { class: 'Class II', age: '7+ years' },
  { class: 'Class III', age: '8+ years' },
  { class: 'Class IV', age: '9+ years' },
  { class: 'Class V', age: '10+ years' },
  { class: 'Class VI', age: '11+ years' },
  { class: 'Class VII', age: '12+ years' },
  { class: 'Class VIII', age: '13+ years' },
  { class: 'Class IX', age: '14+ years' },
  { class: 'Class X', age: '15+ years' },
  { class: 'Class XI', age: '16+ years' },
  { class: 'Class XII', age: '17+ years' }
];

export function FeeAndAgeCriteria() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Fee Structure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee & Age Criteria</h1>
              <p className="text-xl opacity-90">Academic Session 2025-2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Calculator className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Fee Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive breakdown of fees for different classes for the academic session 2025-2026
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(feeStructure).map(([className, fees]) => (
              <div
                key={className}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="bg-[#2A8C4A] text-white py-4 px-6">
                  <h3 className="text-xl font-bold">{className}</h3>
                  {(className === 'X' || className === 'XII') && (
                    <span className="text-sm">(Upgradation Fees)</span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Admission Fees</p>
                      <p className="font-semibold">₹{fees.admissionFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Examination Fees</p>
                      <p className="font-semibold">₹{fees.examinationFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">IT Fees</p>
                      <p className="font-semibold">₹{fees.itFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Sports Fees</p>
                      <p className="font-semibold">₹{fees.sportsFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Diary & Magazine</p>
                      <p className="font-semibold">₹{fees.diaryFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Monthly Tuition</p>
                      <p className="font-semibold">₹{fees.tuitionFees}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-[#2A8C4A]">Total</p>
                      <p className="text-xl font-bold text-[#2A8C4A]">₹{fees.total}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Students Fee Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Calculator className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Upgradation Fees (Old Students)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fee structure for continuing students for the academic session 2025-2026
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-[#2A8C4A] text-white">
                  <th className="p-4 text-left">Class</th>
                  <th className="p-4 text-right">One Time Fees<br/>(Including Monthly Fees)</th>
                  <th className="p-4 text-right">Monthly Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">NUR - UKG</td>
                  <td className="p-4 text-right">₹12000</td>
                  <td className="p-4 text-right">₹1100</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">I & II</td>
                  <td className="p-4 text-right">₹13000</td>
                  <td className="p-4 text-right">₹1450</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">III & IV</td>
                  <td className="p-4 text-right">₹15000</td>
                  <td className="p-4 text-right">₹1650</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">V & VI</td>
                  <td className="p-4 text-right">₹18000</td>
                  <td className="p-4 text-right">₹1750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">VII & VIII</td>
                  <td className="p-4 text-right">₹20000</td>
                  <td className="p-4 text-right">₹2050</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">IX</td>
                  <td className="p-4 text-right">₹26000</td>
                  <td className="p-4 text-right">₹2750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">X</td>
                  <td className="p-4 text-right">₹27050</td>
                  <td className="p-4 text-right">₹2800</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">XI</td>
                  <td className="p-4 text-right">₹44300</td>
                  <td className="p-4 text-right">₹3300</td>
                </tr>
                <tr>
                  <td className="p-4">XII</td>
                  <td className="p-4 text-right">₹32450</td>
                  <td className="p-4 text-right">₹3350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Age Criteria Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Calendar className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Age Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Minimum age requirements for admission to different classes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {ageCriteria.map((item) => (
              <div
                key={item.class}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.class}</h3>
                <p className="text-[#2A8C4A] font-medium">{item.age}</p>
              </div>
            ))}
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