import React, { useState, useEffect } from 'react';
import { LogOut, FileSpreadsheet, Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { FilterPanel } from './FilterPanel';
import { ApplicationList } from './ApplicationList';
import { ApplicationDetails } from './ApplicationDetails';
import { supabaseService } from '../../services/supabaseService';
import { generateExcel } from '../../utils/excelGenerator';
import { FilterOptions, Application } from '../../types';

interface AdminDashboardProps {
  onLogout?: () => void;
}

type DateRangeType = 'all' | 'today' | 'week' | 'month' | 'year';
type StatusType = 'PENDING' | 'APPROVED' | 'REJECTED' | 'all';
type ApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    status: StatusType;
    class: string;
    dateRange: DateRangeType;
  }>({
    status: 'all',
    class: 'all',
    dateRange: 'all'
  });

  useEffect(() => {
    loadApplications();
  }, [filters]);

  const loadApplications = async () => {
    try {
      setLoading(true);
      setError(null);

      const filterOptions: FilterOptions = {
        status: filters.status === 'all' ? undefined : filters.status,
        class: filters.class === 'all' ? undefined : filters.class,
        dateRange: filters.dateRange === 'all' ? undefined : filters.dateRange
      };

      const data = await supabaseService.getApplications(filterOptions);
      setApplications(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load applications';
      setError(message);
      console.error('Error loading applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (application: Application) => {
    try {
      const details = await supabaseService.getApplicationById(application.id);
      setSelectedApplication(details);
    } catch (error) {
      console.error('Error fetching application details:', error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: ApplicationStatus): Promise<void> => {
    try {
      await supabaseService.updateApplicationStatus(id, newStatus);
      await loadApplications();
      if (selectedApplication?.id === id) {
        const updatedApplication = await supabaseService.getApplicationById(id);
        setSelectedApplication(updatedApplication);
      }
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  const handleExportExcel = () => {
    try {
      if (applications.length === 0) {
        setError('No data to export');
        return;
      }
      generateExcel(applications);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      setError('Failed to export data to Excel');
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'PENDING').length,
    approved: applications.filter(app => app.status === 'APPROVED').length,
    rejected: applications.filter(app => app.status === 'REJECTED').length
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczNa8FOqklGd7fG0jwp-Ett4tnmO3FyimEfT7pg_00-7JGo_oCcsr0dK2z4ooZ6T1hd8geZ-zCm2iEMb-QlWk_0JtagmtlfG6xUncdVKCfY_JnsIAJY=w2400"
                alt="KVA Logo"
                className="h-8 w-auto"
              />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleExportExcel}
                className="flex items-center gap-2 px-4 py-2 bg-[#2A8C4A] text-white rounded-lg hover:bg-[#238040] transition-colors"
                disabled={applications.length === 0}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Export to Excel
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pending}</p>
              </div>
              <Clock className="w-12 h-12 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.approved}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.rejected}</p>
              </div>
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        <FilterPanel filters={filters} setFilters={setFilters} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow">
          <ApplicationList
            applications={applications}
            onViewDetails={handleViewDetails}
            onStatusChange={handleStatusChange}
            loading={loading}
          />
        </div>

        {selectedApplication && (
          <ApplicationDetails
            application={selectedApplication}
            onClose={() => setSelectedApplication(null)}
            onStatusChange={handleStatusChange}
          />
        )}
      </main>
    </div>
  );
}