import React from 'react';

interface MentorCardProps {
  firstName: string;
  lastName: string;
  role: string;
  institute: string;
  image: string;
  testimonial: string;
  bgColor: string;
}

export const MentorCard: React.FC<MentorCardProps> = ({
  firstName,
  lastName,
  role,
  institute,
  image,
  testimonial,
  bgColor
}) => {
  return (
    <div className="group relative">
      <div className={`rounded-3xl overflow-hidden bg-gradient-to-b ${bgColor}`}>
        {/* Header with image and info */}
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">
              {firstName} {lastName}
            </h3>
            <div className="space-y-1 text-sm">
              <p>{role}</p>
              <p>{institute}</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="p-6">
          <p className="text-white/90 leading-relaxed">
            {testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};