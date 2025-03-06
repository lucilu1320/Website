import React from 'react';
import { FileText, Building, Users, BookOpen, Layout } from 'lucide-react';
import { GeneralInformation } from './mandatory-disclosure/GeneralInformation';
import { DocumentsInformation } from './mandatory-disclosure/DocumentsInformation';
import { ResultAcademics } from './mandatory-disclosure/ResultAcademics';
import { StaffTeaching } from './mandatory-disclosure/StaffTeaching';
import { SchoolInfrastructure } from './mandatory-disclosure/SchoolInfrastructure';


const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-[#2A8C4A]">
    {children}
  </th>
);

const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-900 border-b">
    {children}
  </td>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-[#2A8C4A] px-6 py-3 rounded-t-lg">
    <h2 className="text-xl font-bold text-white">{title}</h2>
  </div>
);

export function MandatoryDisclosure() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Mandatory Disclosure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mandatory Public Disclosure</h1>
              <p className="text-xl opacity-90">Transparency in Education</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Navigation Tabs - Enhanced with active state */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Building, label: 'General Information', href: '#general' },
              { icon: FileText, label: 'Documents', href: '#documents' },
              { icon: BookOpen, label: 'Results & Academics', href: '#results' },
              { icon: Users, label: 'Staff', href: '#staff' },
              { icon: Layout, label: 'Infrastructure', href: '#infrastructure' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[#2A8C4A]/5"
              >
                <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-[#2A8C4A]/20">
                  <item.icon className="w-6 h-6 text-[#2A8C4A]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#2A8C4A]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>


          {/* Content Sections */}
          <GeneralInformation />
          <DocumentsInformation />
          <ResultAcademics />
          <StaffTeaching />
          <SchoolInfrastructure />
        </div>
      </div>
    </div>
  );
}