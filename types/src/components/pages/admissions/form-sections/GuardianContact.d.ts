import React from 'react';
import { FormProps } from '../../../../types';
interface GuardianContactProps extends FormProps {
    studentAddress: any;
    onSameAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sameAsStudent: boolean;
}
export declare function GuardianContact({ formData, onChange, studentAddress, onSameAddressChange, sameAsStudent, errors }: GuardianContactProps): import("react/jsx-runtime").JSX.Element;
export {};
