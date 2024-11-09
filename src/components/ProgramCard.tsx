import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  alt: string;
  reverse?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  subtitle,
  description,
  image,
  icon: Icon,
  alt,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-teal-200 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6" />
        <img
          src={image}
          alt={alt}
          className="relative rounded-2xl w-full h-[300px] object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 rounded-lg">
            <Icon className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-teal-600 font-medium">{subtitle}</p>
        
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center gap-2">
          Explore
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};