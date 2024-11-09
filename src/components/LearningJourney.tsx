import React from 'react';
import { JourneyStep } from './JourneyStep';
import { Workflow, MonitorSmartphone, Brain, FileText, GraduationCap, Users } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Workflow,
    title: 'Custom Specialization',
    description: 'We understand that each student is unique, so we empower you to design your learning and explore a specialization that best suits your goals.'
  },
  {
    id: 2,
    icon: MonitorSmartphone,
    title: 'Virtual Labs',
    description: 'We launch you straight into the experience of accessing a fully equipped lab from anywhere, just with an internet connection.'
  },
  {
    id: 3,
    icon: Brain,
    title: 'AI Tests',
    description: 'We understand that learning alone isnt enough, so we assess your progress with AI-powered tests to validate your progress.'
  },
  {
    id: 4,
    icon: FileText,
    title: 'Resume Builder',
    description: 'We not only support skill development but also ensure its highlighted properly by helping you craft your resume to help you stand out from the crowd.'
  },
  {
    id: 5,
    icon: GraduationCap,
    title: 'Placement Preparation',
    description: 'We prepare you for the future by equipping you with the best tools by providing you with thorough placement preparation.'
  },
  {
    id: 6,
    icon: Users,
    title: 'AI Interviews',
    description: 'Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.'
  }
];

export const LearningJourney: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Because We Offer What You Need
          </h2>
          <p className="text-xl">
            At <span className="text-teal-600">Every Step</span> Of Your
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-10 h-px bg-teal-600" />
            <p className="text-xl font-medium text-teal-600">
              Transformative Learning Journey
            </p>
            <div className="w-10 h-px bg-teal-600" />
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-16">
          <div className="absolute inset-0 bg-blue-500 rounded-full transform -rotate-6" />
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200"
            alt="Happy students"
            className="relative rounded-full w-full h-[300px] object-cover"
          />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-500" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <JourneyStep
                key={step.id}
                {...step}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
