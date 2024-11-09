import React from 'react';
import { ProgramCard } from './ProgramCard';
import { Users, Briefcase } from 'lucide-react';

const programs = [
  {
    title: 'Campus Training',
    subtitle: 'For students | 24+ Modules | 10 instructors',
    description: 'The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
    icon: Users,
    alt: 'Student using mobile app'
  },
  {
    title: 'Professional Training',
    subtitle: 'For Professionals | 24+ Modules | 10 instructors',
    description: 'The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=600',
    icon: Briefcase,
    alt: 'Professional working on laptop'
  }
];

export const Programs: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Check out Our <span className="text-teal-600">Holistic Programs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Designed To Help You Reach Your <span className="text-teal-600 font-semibold">Goals</span>
          </p>
        </div>

        <div className="absolute left-0 top-0 w-72 h-72 bg-teal-50 rounded-full filter blur-3xl opacity-70 -z-10" />

        <div className="absolute right-0 bottom-0 text-gray-100 text-opacity-5 select-none pointer-events-none font-mono text-9xl -z-10">
          010110<br/>101001<br/>110101
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};