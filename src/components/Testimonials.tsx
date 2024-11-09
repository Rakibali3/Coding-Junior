import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  avatar: string;
  content: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The curriculum is comprehensive and well-structured. The hands-on projects helped me gain practical experience that I could directly apply to my work.',
    name: 'Saanvi Patel',
    position: 'Executive Engineer'
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The AI-powered learning tools and virtual labs made it easy to practice and improve my skills. The mentors were always available to help.',
    name: 'Priya Shah',
    position: 'Software Developer'
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The platform’s flexibility allowed me to learn at my own pace while working full-time. The project-based approach was incredibly effective.',
    name: 'Rahul Verma',
    position: 'Full Stack Developer'
  },
];

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-500 to-blue-600 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          And Our Students Agree...
        </h2>

        <div className="relative">
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg md:max-w-md mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-600 text-sm">{testimonial.position}</p>
                      </div>
                      
                    </div>
                    <blockquote className="relative">
                      <div className="absolute -top-4 -left-4 text-5xl text-blue-200">"</div>
                      <p className="relative text-gray-600 text-sm leading-relaxed z-10">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
