import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RecognitionSlide } from './RecognitionSlide';

const recognitions = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum',
    honoredBy: 'Shri Dharmendra Pradhan ji',
    position: 'Union Minister for Education',
    organization: 'Govt. of India - 2023'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&q=80&w=1200',
    description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis vitae augue tortor',
    honoredBy: 'XYZ',
    position: 'ABC',
    organization: 'lorem eplison'
  }
];

export const Recognition: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recognitions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recognitions.length) % recognitions.length);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 transform -rotate-45">
              <div className="w-full h-full border-2 border-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Efforts To <span className="text-cyan-600">Innovate</span> Have Been<br />
              <span className="text-cyan-600">Recognized</span> And <span className="text-cyan-600">Appreciated</span>
            </h2>
            <div className="w-16 h-16 transform rotate-45">
              <div className="w-full h-full border-2 border-cyan-400" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {recognitions.map((recognition) => (
                <RecognitionSlide
                  key={recognition.id}
                  {...recognition}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-cyan-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-cyan-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-cyan-600" />
          </button>
        </div>
      </div>
    </section>
  );
};