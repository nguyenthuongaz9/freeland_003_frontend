
import React from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";

export default function UserLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-[#ded7c5]">
      <Header />
      <Sidebar />
      <main className="w-full pt-20 md:pt-36 md:px-60 z-0">
        {children}
      </main>

      <Footer />
    </div>
  )

}
