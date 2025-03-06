import React from 'react';

const academicInfo = [
  {
    title: 'Fee Structure of the School',
    filename: 'FEES.pdf'
  },
  {
    title: 'Annual Academic Calendar',
    filename: 'ACADEMIC CALENDAR.pdf'
  },
  {
    title: 'List of School Management Committee (SMC)',
    filename: 'SMC.pdf'
  },
  {
    title: 'List of Parents Teachers Association (PTA) Members',
    filename: 'PTA.pdf'
  }
];

const resultData = {
  X: [
    { year: '2024', registered: 54, passed: 54, percentage: '100%', remarks: 'Outstanding' },
    { year: '2023', registered: 74, passed: 71, percentage: '95.94%', remarks: 'Excellent' },
    { year: '2022', registered: 79, passed: 77, percentage: '97.46%', remarks: 'Excellent' }
  ],
  XII: [
    { year: '2024', registered: 91, passed: 74, percentage: '81.31%', remarks: 'Good' },
    { year: '2023', registered: 104, passed: 92, percentage: '88.46%', remarks: 'Good' }, 
    { year: '2022', registered: 84, passed: 77, percentage: '91.66%', remarks: 'Excellent' }
  ]
};

export function ResultAcademics() {
  return (
    <section id="results" className="scroll-mt-24">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#2A8C4A] px-6 py-4">
          <h2 className="text-xl font-bold text-white">C. Result and Academics</h2>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Academic Information */}
          <div className="space-y-4">
            {academicInfo.map((info, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-700">{info.title}</span>
                <a
                  href={`/Mandatory-Results/${info.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-[#2A8C4A] border border-[#2A8C4A] rounded-lg hover:bg-[#2A8C4A] hover:text-white transition-colors"
                >
                  View
                </a>
              </div>
            ))}
          </div>

          {/* Results Tables */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-800">Last three-year Result of the Board examination</h3>
            {['X', 'XII'].map((grade) => (
              <div key={grade} className="space-y-4">
                <h4 className="text-base font-medium text-[#2A8C4A]">Class {grade}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. of Registered Students</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. of Students Passed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Percentage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {resultData[grade as keyof typeof resultData].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">{row.year}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.registered}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.passed}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.percentage}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}