import React, { useEffect, useCallback } from 'react';
import { FormField } from '../form-components/FormField';
import { dropdownOptions } from '../form-data/dropdownOptions';
import { getDistrictsForState } from '../utils/formUtils';
import { AlertCircle } from 'lucide-react';
import { FormProps } from '../../../../types';

interface GuardianContactProps extends FormProps {
  studentAddress: any;
  onSameAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sameAsStudent: boolean;
}

export function GuardianContact({ 
  formData, 
  onChange, 
  studentAddress,
  onSameAddressChange,
  sameAsStudent,
  errors = []
}: GuardianContactProps) {
  const currentCountry = sameAsStudent ? studentAddress.country : formData.guardianCountry;
  const currentState = sameAsStudent ? studentAddress.state : formData.guardianState;
  
  const isIndianAddress = currentCountry === 'INDIA';
  const districts = getDistrictsForState(currentState);
  const hasDistrictsList = districts !== null;

  const syncAddressFields = useCallback(() => {
    if (sameAsStudent) {
      const updates = {
        guardianCountry: studentAddress.country || '',
        guardianState: studentAddress.state || '',
        guardianDistrict: studentAddress.district || '',
        guardianBlock: studentAddress.block || '',
        guardianPanchayat: studentAddress.panchayat || '',
        guardianLocality: studentAddress.locality || '',
        guardianPostOffice: studentAddress.postOffice || '',
        guardianPoliceStation: studentAddress.policeStation || '',
        guardianPinCode: studentAddress.pinCode || ''
      };

      Object.entries(updates).forEach(([name, value]) => {
        if (formData[name] !== value) {
          onChange({
            target: { name, value }
          } as React.ChangeEvent<HTMLInputElement>);
        }
      });
    }
  }, [sameAsStudent, studentAddress, formData, onChange]);

  useEffect(() => {
    syncAddressFields();
  }, [sameAsStudent, syncAddressFields]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!sameAsStudent) {
      const batch = [
        { name: e.target.name, value: e.target.value },
        { name: 'guardianState', value: '' },
        { name: 'guardianDistrict', value: '' }
      ];

      batch.forEach(({ name, value }) => {
        onChange({ target: { name, value } } as React.ChangeEvent<HTMLSelectElement>);
      });
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!sameAsStudent) {
      const batch = [
        { name: e.target.name, value: e.target.value },
        { name: 'guardianDistrict', value: '' }
      ];

      batch.forEach(({ name, value }) => {
        onChange({ target: { name, value } } as React.ChangeEvent<HTMLSelectElement>);
      });
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    onChange({
      target: {
        name: e.target.name,
        value
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const getValue = (guardianField: string) => {
    if (sameAsStudent) {
      const fieldMap: { [key: string]: string } = {
        guardianCountry: 'country',
        guardianState: 'state',
        guardianDistrict: 'district',
        guardianBlock: 'block',
        guardianPanchayat: 'panchayat',
        guardianLocality: 'locality',
        guardianPostOffice: 'postOffice',
        guardianPoliceStation: 'policeStation',
        guardianPinCode: 'pinCode'
      };
      const studentField = fieldMap[guardianField];
      return studentField ? studentAddress[studentField] || '' : formData[guardianField] || '';
    }
    return formData[guardianField] || '';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Contact Information for Guardian
        </h2>
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={sameAsStudent}
            onChange={onSameAddressChange}
            className="rounded border-gray-300 text-[#2A8C4A] focus:ring-[#2A8C4A]"
          />
          <span className="text-gray-700">Same as Student Address</span>
        </label>
      </div>

      {!isIndianAddress && !sameAsStudent && formData.guardianCountry && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-700 font-medium mb-1">International Address</p>
            <p className="text-blue-600 text-sm">
              For addresses in {formData.guardianCountry}, please provide your complete address details below.
            </p>
          </div>
        </div>
      )}

      {isIndianAddress && !sameAsStudent && currentState && !hasDistrictsList && (
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
        <div className="space-y-6">
          <FormField
            label="Select Country"
            name="guardianCountry"
            type="select"
            value={getValue('guardianCountry')}
            onChange={handleCountryChange}
            options={dropdownOptions.countries}
            required
            disabled={sameAsStudent}
            error={errors.find(e => e.field === 'guardianCountry')?.message}
          />

          {isIndianAddress && (
            <>
              <FormField
                label="Select State"
                name="guardianState"
                type="select"
                value={getValue('guardianState')}
                onChange={handleStateChange}
                options={dropdownOptions.states}
                required
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianState')?.message}
              />

              {hasDistrictsList ? (
                <FormField
                  label="District"
                  name="guardianDistrict"
                  type="select"
                  value={getValue('guardianDistrict')}
                  onChange={onChange}
                  options={districts}
                  required
                  disabled={(!currentState && !sameAsStudent) || sameAsStudent}
                  error={errors.find(e => e.field === 'guardianDistrict')?.message}
                />
              ) : (
                currentState && (
                  <FormField
                    label="District"
                    name="guardianDistrict"
                    type="text"
                    value={getValue('guardianDistrict')}
                    onChange={onChange}
                    uppercase
                    required
                    disabled={sameAsStudent}
                    error={errors.find(e => e.field === 'guardianDistrict')?.message}
                  />
                )
              )}

              <FormField
                label="Block/Munc/Corp"
                name="guardianBlock"
                type="text"
                value={getValue('guardianBlock')}
                onChange={onChange}
                uppercase
                required
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianBlock')?.message}
              />

              <FormField
                label="Panchayat"
                name="guardianPanchayat"
                type="text"
                value={getValue('guardianPanchayat')}
                onChange={onChange}
                uppercase
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianPanchayat')?.message}
              />

              <FormField
                label="Police Station"
                name="guardianPoliceStation"
                type="text"
                value={getValue('guardianPoliceStation')}
                onChange={onChange}
                uppercase
                required
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianPoliceStation')?.message}
              />
            </>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Address 
            </label>
            <input
              type="text"
              name="guardianAddress"
              value={formData.guardianAddress || ''}
              onChange={handleAddressChange}
              className="w-full rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50 h-11 uppercase"
            />
          </div>
        </div>

        <div className="space-y-6">
          {isIndianAddress && (
            <>
              <FormField
                label="Habitation or Locality"
                name="guardianLocality"
                type="text"
                value={getValue('guardianLocality')}
                onChange={onChange}
                uppercase
                required
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianLocality')?.message}
              />

              <FormField
                label="Post Office"
                name="guardianPostOffice"
                type="text"
                value={getValue('guardianPostOffice')}
                onChange={onChange}
                uppercase
                required
                disabled={sameAsStudent}
                error={errors.find(e => e.field === 'guardianPostOffice')?.message}
              />
            </>
          )}

          <FormField
            label="Pin Code"
            name="guardianPinCode"
            type="text"
            value={getValue('guardianPinCode')}
            onChange={onChange}
            pattern="\d{6}"
            maxLength={6}
            required
            disabled={sameAsStudent}
            error={errors.find(e => e.field === 'guardianPinCode')?.message}
          />

          <FormField
            label="Mobile Number"
            name="guardianMobile"
            type="text"
            value={formData.guardianMobile || ''}
            onChange={onChange}
            pattern="\d{10}"
            maxLength={10}
            required
            error={errors.find(e => e.field === 'guardianMobile')?.message}
          />

          <FormField
            label="Contact email-id"
            name="guardianEmail"
            type="text"
            value={formData.guardianEmail || ''}
            onChange={onChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            error={errors.find(e => e.field === 'guardianEmail')?.message}
          />
        </div>
      </div>
    </div>
  );
}
