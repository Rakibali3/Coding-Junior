import React from 'react';
import { GraduationCap, Bot, Code, Book, Video, FileText } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: GraduationCap,
    title: 'Created by IIT-IIM Alumni',
    description: "We've learnt from the best and strive to bring you the best.",
  },
  {
    icon: Bot,
    title: 'A.I. Integration',
    description: 'We have harnessed the power of A.I. to enhance and assess your knowledge',
  },
  {
    icon: Code,
    title: 'In-app Coding',
    description: 'The app features in-app coding, eliminating the need for laptops',
  },
  {
    icon: Book,
    title: 'Extensive E-books',
    description: 'Deepen your understanding and mastery of the skills.',
  },
  {
    icon: Video,
    title: 'Recorded Lectures',
    description: 'Access lectures anywhere and anytime at your own pace.',
  },
  {
    icon: FileText,
    title: 'Flash cards',
    description: 'Make learning convenient and fun using flash cards.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 px-6 my-8 min-h-screen relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          What Sets Us Apart?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};