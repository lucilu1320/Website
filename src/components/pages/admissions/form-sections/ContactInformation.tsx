import React from 'react';
import { FormField } from '../form-components/FormField';
import { dropdownOptions } from '../form-data/dropdownOptions';
import { getDistrictsForState } from '../utils/formUtils';
import { AlertCircle } from 'lucide-react';
import { FormProps } from '../../../../types';

interface ContactInformationProps extends FormProps {}

export function ContactInformation({ formData, onChange, errors = [] }: ContactInformationProps) {
  const isIndianAddress = formData.country === 'INDIA';
  const districts = getDistrictsForState(formData.state);
  const hasDistrictsList = districts !== null;

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e);
    onChange({
      target: {
        name: 'state',
        value: ''
      }
    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
    onChange({
      target: {
        name: 'district',
        value: ''
      }
    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e);
    onChange({
      target: {
        name: 'district',
        value: ''
      }
    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Contact Information for the Student
        </h2>
      </div>

      {/* Country Selection */}
      <div className="mb-6">
        <FormField
          label="Select Country"
          name="country"
          type="select"
          value={formData.country}
          onChange={handleCountryChange}
          options={dropdownOptions.countries}
          required
          error={errors?.find(e => e.field === 'country')?.message}
        />
      </div>

      {!isIndianAddress && formData.country && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-700 font-medium mb-1">International Address</p>
            <p className="text-blue-600 text-sm">
              For addresses in {formData.country}, please provide your complete address details below.
            </p>
          </div>
        </div>
      )}

      {isIndianAddress && formData.state && !hasDistrictsList && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-700 font-medium mb-1">Manual District Entry</p>
            <p className="text-yellow-600 text-sm">
              Please type your district name manually as it's not available in our dropdown list.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {isIndianAddress ? (
            <>
              <FormField
                label="Select State"
                name="state"
                type="select"
                value={formData.state}
                onChange={handleStateChange}
                options={dropdownOptions.states}
                required
                error={errors?.find(e => e.field === 'state')?.message}
              />

              {hasDistrictsList ? (
                <FormField
                  label="District"
                  name="district"
                  type="select"
                  value={formData.district}
                  onChange={onChange}
                  options={districts}
                  required
                  disabled={!formData.state}
                  error={errors?.find(e => e.field === 'district')?.message}
                />
              ) : (
                formData.state && (
                  <FormField
                    label="District"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={onChange}
                    uppercase
                    required
                    error={errors?.find(e => e.field === 'district')?.message}
                  />
                )
              )}

              <FormField
                label="Block/Munc/Corp"
                name="block"
                type="text"
                value={formData.block}
                onChange={onChange}
                uppercase
                required
                error={errors?.find(e => e.field === 'block')?.message}
              />

              <FormField
                label="Panchayat"
                name="panchayat"
                type="text"
                value={formData.panchayat}
                onChange={onChange}
                uppercase
                error={errors?.find(e => e.field === 'panchayat')?.message}
              />

              <FormField
                label="Police Station"
                name="policeStation"
                type="text"
                value={formData.policeStation}
                onChange={onChange}
                uppercase
                required
                error={errors?.find(e => e.field === 'policeStation')?.message}
              />
            </>
          ) : (
            <FormField
              label="Full Address"
              name="address"
              type="text"
              value={formData.address}
              onChange={onChange}
              uppercase
              required
              error={errors?.find(e => e.field === 'address')?.message}
            />
          )}

          <FormField
            label="Mobile Number"
            name="mobileNumber"
            type="text"
            value={formData.mobileNumber}
            onChange={onChange}
            pattern="\d{10}"
            maxLength={10}
            required
            error={errors?.find(e => e.field === 'mobileNumber')?.message}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {isIndianAddress && (
            <>
              <FormField
                label="Habitation or Locality"
                name="locality"
                type="text"
                value={formData.locality}
                onChange={onChange}
                uppercase
                required
                error={errors?.find(e => e.field === 'locality')?.message}
              />

              <FormField
                label="Post Office"
                name="postOffice"
                type="text"
                value={formData.postOffice}
                onChange={onChange}
                uppercase
                required
                error={errors?.find(e => e.field === 'postOffice')?.message}
              />
            </>
          )}

          <FormField
            label="Pin Code"
            name="pinCode"
            type="text"
            value={formData.pinCode}
            onChange={onChange}
            pattern="\d{6}"
            maxLength={6}
            required
            error={errors?.find(e => e.field === 'pinCode')?.message}
          />

          <FormField
            label="Contact email-id"
            name="email"
            type="text"
            value={formData.email}
            onChange={onChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            error={errors?.find(e => e.field === 'email')?.message}
          />
        </div>
      </div>
    </div>
  );
}