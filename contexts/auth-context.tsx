'use client'

import { useAuthStore } from "@/hooks/use-auth-store";
import { createContext, useContext, useEffect } from "react";


interface AuthContextProps{
    isAuthenticated: boolean | undefined;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string) => Promise<void>;

}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const AuthProvider  = (
    {children} : {children: React.ReactNode}
) => {
    const { signIn , logout, isAuthenticated ,fetchProfile, register} = useAuthStore()

    useEffect(() => {
        fetchProfile()
    }, [signIn, logout, isAuthenticated])

    return <AuthContext.Provider value={{ signIn , logout, isAuthenticated , register}}>

        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
