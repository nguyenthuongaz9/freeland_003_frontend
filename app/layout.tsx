import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { QueryProvider } from "@/components/providers/query-provider";
import ToastProvider from "@/components/providers/toast-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      suppressContentEditableWarning
      data-lt-installed="true"
    >
      <QueryProvider>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ToastProvider />
            {children}
          </body>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}
