import React from 'react';
import { FormField } from '../form-components/FormField';
import { busRoutes, getPickupPoints, getFare } from '../form-data/transportData';
import { Bus, MapPin, Calendar, IndianRupee } from 'lucide-react';

interface TransportDetailsProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function TransportDetails({ formData, onChange }: TransportDetailsProps) {
  const pickupPoints = getPickupPoints(formData.busRoute);
  const fare = getFare(formData.busRoute, formData.pickupPoint);

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Transport Details
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Bus className="w-5 h-5 text-[#2A8C4A]" />
            <h3 className="text-lg font-semibold text-gray-800">Bus Route Selection</h3>
          </div>

          <FormField
            label="Select Bus Route"
            name="busRoute"
            type="select"
            value={formData.busRoute}
            onChange={(e) => {
              onChange(e);
              // Reset pickup point when bus route changes
              onChange({
                target: { name: 'pickupPoint', value: '' }
              } as React.ChangeEvent<HTMLSelectElement>);
            }}
            options={[
              { value: '', label: 'Select Bus Route' },
              ...busRoutes.map(route => ({
                value: route.id,
                label: `Bus ${route.id.split('_')[1]} - ${route.name}`
              }))
            ]}
            required
          />

          <div className="flex items-center gap-3 mt-8 mb-4">
            <Calendar className="w-5 h-5 text-[#2A8C4A]" />
            <h3 className="text-lg font-semibold text-gray-800">Payment Month</h3>
          </div>

          <FormField
            label="Select Month"
            name="transportMonth"
            type="select"
            value={formData.transportMonth}
            onChange={onChange}
            options={[
              { value: '', label: 'Select Month' },
              { value: 'APRIL', label: 'April' },
              { value: 'MAY', label: 'May' },
              { value: 'JUNE', label: 'June' },
              { value: 'JULY', label: 'July' },
              { value: 'AUGUST', label: 'August' },
              { value: 'SEPTEMBER', label: 'September' },
              { value: 'OCTOBER', label: 'October' },
              { value: 'NOVEMBER', label: 'November' },
              { value: 'DECEMBER', label: 'December' },
              { value: 'JANUARY', label: 'January' },
              { value: 'FEBRUARY', label: 'February' },
              { value: 'MARCH', label: 'March' }
            ]}
            required
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#2A8C4A]" />
            <h3 className="text-lg font-semibold text-gray-800">Pickup Point Selection</h3>
          </div>

          <FormField
            label="Select Pickup Point"
            name="pickupPoint"
            type="select"
            value={formData.pickupPoint}
            onChange={onChange}
            options={[
              { value: '', label: 'Select Pickup Point' },
              ...pickupPoints.map(point => ({
                value: point.value,
                label: point.label
              }))
            ]}
            required
            disabled={!formData.busRoute}
          />

          {/* Fare Display */}
          {fare > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-md mt-8">
              <div className="flex items-center gap-3 mb-4">
                <IndianRupee className="w-5 h-5 text-[#2A8C4A]" />
                <h3 className="text-lg font-semibold text-gray-800">Transport Fee</h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monthly Fee:</span>
                <span className="text-2xl font-bold text-[#2A8C4A]">₹{fare}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}