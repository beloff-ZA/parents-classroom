// src/components/dashboard/StatsCard.tsx
import React from "react";

type StatsCardProps = {
  title: string;
  value: number | string;
  subtitle?: string;
  trend?: "up" | "down";
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  trend,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <div className="text-2xl font-bold">{value}</div>
      {subtitle && (
        <p className="text-xs text-gray-400 flex items-center">
          {trend === "up" ? "📈" : trend === "down" ? "📉" : ""} {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatsCard;
