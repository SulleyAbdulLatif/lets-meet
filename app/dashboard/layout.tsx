'use client'
import { ReactNode } from 'react';
import { useEffect, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
