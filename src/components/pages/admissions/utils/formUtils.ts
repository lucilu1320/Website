import { dropdownOptions } from '../form-data/dropdownOptions';

export const getDistrictsForState = (state: string) => {
  switch (state) {
    case 'WEST_BENGAL':
      return dropdownOptions.westBengalDistricts;
    case 'BIHAR':
      return dropdownOptions.biharDistricts;
    case 'JHARKHAND':
      return dropdownOptions.jharkhandDistricts;
    case 'ODISHA':
      return dropdownOptions.odishaDistricts;
    default:
      return null;
  }
};