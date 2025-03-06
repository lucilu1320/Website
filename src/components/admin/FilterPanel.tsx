import React from 'react';
import { Search, Filter } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    status: string;
    class: string;
    dateRange: string;
  };
  setFilters: (filters: any) => void;
}

export function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-[#2A8C4A]" />
        <h2 className="text-lg font-semibold text-gray-800">Filter Applications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50"
          >
            <option value="all">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class
          </label>
          <select
            value={filters.class}
            onChange={(e) => setFilters({ ...filters, class: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50"
          >
            <option value="all">All Classes</option>
            <option value="NUR">Nursery</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="I">Class I</option>
            <option value="II">Class II</option>
            <option value="III">Class III</option>
            <option value="IV">Class IV</option>
            <option value="V">Class V</option>
            <option value="VI">Class VI</option>
            <option value="VII">Class VII</option>
            <option value="VIII">Class VIII</option>
            <option value="IX">Class IX</option>
            <option value="X">Class X</option>
            <option value="XI">Class XI</option>
            <option value="XII">Class XII</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name, application ID, or contact number..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}