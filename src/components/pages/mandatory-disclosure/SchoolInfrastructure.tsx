// src/components/pages/mandatory-disclosure/SchoolInfrastructure.tsx
export function SchoolInfrastructure() {
    return (
      <section id="infrastructure" className="scroll-mt-24">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#2A8C4A] px-6 py-4">
            <h2 className="text-xl font-bold text-white">E. School Infrastructure</h2>
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
                  <td className="px-6 py-4 text-sm text-gray-900">Total Campus area of the school (In square MTR)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8376 Sq.Mtr</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900">No. and Size of the Class rooms (In Square MTR)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">51, (48.30 Sq.Mtr)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900">No. and Size of Laboratories including computer labs (In Square MTR)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">9, (92.90 Sq.Mtr)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Internet Facility (Y/N)</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Yes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 text-sm text-gray-900">No. of Girls Toilets</td>
                  <td className="px-6 py-4 text-sm text-gray-900">22</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6</td>
                  <td className="px-6 py-4 text-sm text-gray-900">No. of Boys Toilets</td>
                  <td className="px-6 py-4 text-sm text-gray-900">27</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Link of youtube video of the inspection of school covering the infrastructure of the school</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <a 
                      href="https://youtu.be/DHW1QYPzKIA?si=3h-kr_mEjgd3yrZ4" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      YouTube Video Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  