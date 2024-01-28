import React from "react";
import { Navbar, Footer } from "../partials";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
