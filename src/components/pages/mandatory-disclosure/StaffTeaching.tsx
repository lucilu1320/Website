// src/components/pages/mandatory-disclosure/StaffTeaching.tsx
export function StaffTeaching() {
    return (
      <section id="staff" className="scroll-mt-24">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#2A8C4A] px-6 py-4">
            <h2 className="text-xl font-bold text-white">D. Staff (Teaching)</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-[#2A8C4A] w-16">
                    Sl No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-[#2A8C4A]">
                    Information
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-[#2A8C4A]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Principal</td>
                  <td className="px-6 py-4 text-sm text-gray-900">1</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Total No of Teachers</td>
                  <td className="px-6 py-4 text-sm text-gray-900">71</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-sm text-gray-900 pl-12">PGTs</td>
                  <td className="px-6 py-4 text-sm text-gray-900">22</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-sm text-gray-900 pl-12">TGTs</td>
                  <td className="px-6 py-4 text-sm text-gray-900">14</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-sm text-gray-900 pl-12">PRTs</td>
                  <td className="px-6 py-4 text-sm text-gray-900">23</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Teachers Section Ratio</td>
                  <td className="px-6 py-4 text-sm text-gray-900">1:1.5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Details of Spcl Educator</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Tapas Tapadar, M.A., In Psychology, B.Ed in Spcl. Edcn</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Details of Counsellor and Wellness Teacher</td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-pre-line">
                    Paramita Paul, M.A., in Psychology, B.Ed (Wellness Teacher)
                    G. Tanuja Reddy, M.A. in Psychology (Counsellor)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  