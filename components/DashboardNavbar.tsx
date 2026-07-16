"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Later you can clear session/token here
    router.push("/login");
  };

  return (
    <nav className="bg-slate-950 border-b border-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-500">
            Resume Rank
          </h1>

          <p className="text-sm text-slate-400">
            AI Powered ATS Resume Screening
          </p>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4">

          <Link
            href="/dashboard"
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/history"
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            History
          </Link>

          <Link
            href="/profile"
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}