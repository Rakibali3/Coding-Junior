import React from 'react';

interface RecognitionSlideProps {
  image: string;
  description: string;
  honoredBy: string;
  position: string;
  organization: string;
}

export const RecognitionSlide: React.FC<RecognitionSlideProps> = ({
  image,
  description,
  honoredBy,
  position,
  organization
}) => {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-200 rounded-3xl transform rotate-3" />
          <img
            src={image}
            alt="Recognition ceremony"
            className="relative rounded-3xl w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-100 rounded-full -z-10 transform -translate-x-4 -translate-y-4" />
            <p className="text-xl text-gray-600 leading-relaxed relative">
              {description}
            </p>
          </div>

          <div className="space-y-2 border-l-4 border-cyan-400 pl-4">
            <p className="font-semibold text-xl text-gray-800">
              Honored by {honoredBy}
            </p>
            <p className="text-cyan-600 font-medium">{position}</p>
            <p className="text-gray-500">{organization}</p>
          </div>
        </div>
      </div>
    </div>
  );
};