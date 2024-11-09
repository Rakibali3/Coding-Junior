import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center gap-4 w-full">
      <div className="p-3 bg-blue-50 rounded-lg flex justify-center items-center">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-blue-500 self-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center w-full text-sm">
        {description}
      </p>
    </div>
  );
};
