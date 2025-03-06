import type { Database } from '../types/supabase';
export declare const supabase: import("@supabase/supabase-js").SupabaseClient<Database, "public", any>;
export declare const isSupabaseConfigured: () => boolean;
export declare const handleSupabaseError: (error: any) => never;
export declare const mockData: {
    applications: any[];
    files: any[];
};
