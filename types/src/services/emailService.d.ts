import { EmailData } from '../types';
export declare function sendConfirmationEmail(data: EmailData): Promise<void>;
export declare function sendStatusUpdateEmail(data: EmailData): Promise<void>;
