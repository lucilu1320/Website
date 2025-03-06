export declare const authService: {
    login(email: string, password: string): Promise<any>;
    getCurrentSession(): Promise<any>;
    logout(): void;
};
