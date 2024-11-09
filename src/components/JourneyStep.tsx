import React from 'react';
import { LucideIcon } from 'lucide-react';

interface JourneyStepProps {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLeft: boolean;
}

export const JourneyStep: React.FC<JourneyStepProps> = ({
  id,
  icon: Icon,
  title,
  description,
  isLeft
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className={`w-full md:w-1/2 ${isLeft ? 'text-right md:pr-8' : 'text-left md:pl-8'}`}>
        <div className={`inline-block ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
            <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-12 h-12 bg-white rounded-full border-4 border-teal-500 flex items-center justify-center font-bold text-teal-500 shadow-lg">
          {id}
        </div>
      </div>

      <div className="w-full md:w-1/2" />
    </div>
  );
};
