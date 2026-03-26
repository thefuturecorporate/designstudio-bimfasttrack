"use client";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 15, suffix: "+", label: "Software Tools", color: "text-primary" },
  { value: 7, suffix: "", label: "Industry Projects", color: "text-gold" },
  { value: 100, suffix: "%", label: "Placement Record", color: "text-green-400" },
  { value: 6, suffix: "", label: "Training Centers", color: "text-blue-400" },
  { value: 8, suffix: " Mo", label: "Max Duration", color: "text-purple-400" },
  { value: 20, suffix: "+", label: "Career Roles", color: "text-orange-400" },
];

function StatCard({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center p-6">
      <div className={`font-[var(--font-outfit)] text-4xl md:text-5xl font-extrabold ${color}`}>
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 mt-2 font-medium">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
