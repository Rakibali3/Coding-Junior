// src/components/NewsSection.tsx
import React from 'react';
import NewsCard from './NewsCard';

const newsData = [
  {
    source: 'ThePrint',
    date: '31 March, 2023',
    title: 'Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40',
    description: '',
    imageUrl: 'https://media.istockphoto.com/id/1312418309/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network-3d.jpg?s=2048x2048&w=is&k=20&c=zblIIifUoLe5CZVQCazCP2napZiNO6Ohz0bq3o7APRg=', 
    link: '#'
  },
  {
    source: 'Business Outreach',
    date: '01 March, 2023',
    title: 'Meet Vikas Shukla- The flag bearer of technology and ...',
    description: '',
    imageUrl: 'https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=',
    link: '#'
  },
  {
    source: 'ThePrint',
    date: '01 March, 2023',
    title: 'Meet Vikas Shukla- The flag bearer of technology and ...',
    description: '',
    imageUrl: 'https://media.istockphoto.com/id/1440355207/photo/movie-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=MK6RKxvX_fqBUjCqVm6XG9wZ3uc_6nqe6SRDDZ7_X80=',
    link: '#'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">We’ve Also Been In <span className="text-blue-500">News!</span></h2>
        <div className="flex flex-wrap justify-center">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              source={news.source}
              date={news.date}
              title={news.title}
              description={news.description}
              imageUrl={news.imageUrl}
              link={news.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
