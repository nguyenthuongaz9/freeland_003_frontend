"use client"

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const auth = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth?.isAuthenticated) {
            router.push("/sign-in");
        } else {
            setLoading(false);
        }
    }, [auth?.isAuthenticated, router]);

    if (loading) return null; 

    return children;
}
