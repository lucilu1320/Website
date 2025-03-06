import React from 'react';
import { FileText } from 'lucide-react';

const documents = [
  {
    title: 'Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation',
    filename: 'AFF-EXTENSION.pdf'
  },
  {
    title: 'Copies of Societies/Trust/Company Registration/Renewal Certificate',
    filename: 'TRUST.pdf'
  },
  {
    title: 'Copy of No Objection Certificate (NOC) issued, if applicable by the State Govt./UT',
    filename: 'NOC.pdf'
  },
  {
    title: 'Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable',
    filename: 'NOC.pdf'
  },
  {
    title: 'Copy of Valid Building Safety Certificate as per the National Building Code',
    filename: 'BUILDING SAFETY.pdf'
  },
  {
    title: 'Copy of Valid Fire Safety Certificate issued by the Competent Authority',
    filename: 'FIRE.pdf'
  },
  {
    title: 'Copy of the DEO Certificate submitted by the School for Affiliation/Upgradation/Extension of Affiliationor Self Certification by School',
    filename: 'DEO.pdf'
  },
  {
    title: 'Copies of Valid Water, Health and Sanitation Certificates',
    filename: 'CERTIFICATE.pdf'
  }
];

export function DocumentsInformation() {
  return (
    <section id="documents" className="scroll-mt-24">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#2A8C4A] px-6 py-4">
          <h2 className="text-xl font-bold text-white">B. Documents and Information</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-[#2A8C4A]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">{doc.title}</p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={doc.filename ? `/Mandatory-Documents/${doc.filename}` : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                      !doc.filename
                        ? 'text-gray-400 border-gray-400 cursor-not-allowed'
                        : 'text-[#2A8C4A] border-[#2A8C4A] hover:bg-[#2A8C4A] hover:text-white'
                    }`}
                    onClick={e => !doc.filename && e.preventDefault()}
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}