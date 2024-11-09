// src/components/NewsCard.tsx
import React from 'react';

interface NewsCardProps {
  source: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ source, date, title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 p-4">
        <div className="flex items-center justify-between p-1">
        <h1 className="font-bold text-lg text-blue-500">{source}</h1>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <img className="w-full h-[200px]" src={imageUrl} alt="News" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base">{description}</p>
        <a href={link} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read article
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
