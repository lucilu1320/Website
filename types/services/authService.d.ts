export declare const authService: {
    login(email: string, password: string): Promise<{
        user: import("@supabase/auth-js").User;
        session: import("@supabase/auth-js").Session;
        weakPassword?: import("@supabase/auth-js").WeakPassword;
    } | {
        user: null;
        session: null;
        weakPassword?: null;
    }>;
    logout(): Promise<void>;
    isAuthenticated(): Promise<boolean>;
    isAdmin(): Promise<boolean>;
};
