export type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
export interface Database {
    public: {
        Tables: {
            applications: {
                Row: {
                    id: string;
                    student_name: string;
                    student_name_aadhar: string;
                    gender: string;
                    dob: string;
                    aadhar_no: string;
                    blood_group: string;
                    religion: string;
                    mother_tongue: string;
                    social_category: string;
                    ews_status: string;
                    cwsn_status: string;
                    father_name: string;
                    mother_name: string;
                    guardian_name: string | null;
                    relation_with_guardian: string | null;
                    father_qualification: string;
                    mother_qualification: string;
                    father_occupation: string;
                    mother_occupation: string;
                    annual_income: string;
                    session: string;
                    class: string;
                    section: string;
                    roll_no: string | null;
                    house: string;
                    second_language: string | null;
                    third_language: string | null;
                    skill_subject: string | null;
                    subjects: Json | null;
                    previous_status: string;
                    previous_class: string | null;
                    previous_section: string | null;
                    previous_roll_no: string | null;
                    academic_year: string | null;
                    medium: string | null;
                    admission_type: string;
                    email: string;
                    mobile_number: string;
                    country: string;
                    state: string;
                    district: string;
                    block: string;
                    panchayat: string | null;
                    locality: string;
                    post_office: string;
                    police_station: string;
                    pin_code: string;
                    guardian_country: string | null;
                    guardian_state: string | null;
                    guardian_district: string | null;
                    guardian_block: string | null;
                    guardian_panchayat: string | null;
                    guardian_locality: string | null;
                    guardian_post_office: string | null;
                    guardian_police_station: string | null;
                    guardian_pin_code: string | null;
                    guardian_mobile: string | null;
                    guardian_email: string | null;
                    transport_facility: string;
                    hostel_facility: string;
                    free_shoes: string;
                    free_uniform: string;
                    free_books: string;
                    free_exercise_book: string;
                    rte_education: string;
                    ncc_participation: string;
                    bus_route: string | null;
                    pickup_point: string | null;
                    transport_month: string | null;
                    status: 'PENDING' | 'APPROVED' | 'REJECTED';
                    photo_url: string | null;
                    submission_date: string;
                    last_updated: string;
                };
                Insert: Omit<Database['public']['Tables']['applications']['Row'], 'id' | 'status' | 'submission_date' | 'last_updated'>;
                Update: Partial<Database['public']['Tables']['applications']['Row']>;
            };
            files: {
                Row: {
                    id: string;
                    application_id: string | null;
                    file_name: string;
                    file_type: string;
                    file_size: number;
                    file_url: string;
                    uploaded_at: string;
                };
                Insert: Omit<Database['public']['Tables']['files']['Row'], 'id' | 'uploaded_at'>;
                Update: Partial<Database['public']['Tables']['files']['Row']>;
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
    };
}
