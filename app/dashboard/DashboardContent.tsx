"use client";

import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TrafficChart from "@/components/dashboard/TrafficChart";
import PieChart from "@/components/dashboard/PieChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header interno do Dashboard (não é o Header do site Sercil) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-primary">
                Dashboard Analytics
              </h1>
              <p className="text-sm text-muted mt-0.5">
                Visão geral do seu negócio em tempo real
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Dados demonstrativos
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white font-medium">
                AD
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCards />
        
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <PieChart />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <TrafficChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}