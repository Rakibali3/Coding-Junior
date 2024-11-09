import React from 'react';
import { MentorCard } from './MentorCard';

interface Mentor {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  institute: string;
  image: string;
  testimonial: string;
  bgColor: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Vikas Shukla',
    firstName: 'Vikas',
    lastName: 'Shukla',
    role: 'Software Engineering',
    institute: 'IIT-BHU',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    bgColor: 'from-cyan-400 to-cyan-300'
  },
  {
    id: 2,
    name: 'Sumit Bhatt',
    firstName: 'Sumit',
    lastName: 'Bhatt',
    role: 'Software Engineering',
    institute: 'IIT-BHU',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=400',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    bgColor: 'from-blue-500 to-blue-400'
  },
  {
    id: 3,
    name: 'Neelu Verma',
    firstName: 'Neelu',
    lastName: 'Verma',
    role: 'Software Engineering',
    institute: 'IIT-BHU',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    bgColor: 'from-cyan-400 to-cyan-300'
  }
];

export const Mentors: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-gray-600 mb-4">
            We Know Just Education Is Not Enough Anymore
          </h2>
          <div className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold">
            <span>So We've Got The</span>
            <span className="text-teal-500">Best Mentors</span>
            <span>For You.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};
