import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import {Features} from '../components/Features';
import {Programs} from '../components/Programs';
import {Recognition} from '../components/Recognition';
import {LearningJourney} from '../components/LearningJourney';
import {Testimonials} from '../components/Testimonials';
import { Mentors } from '../components/Mentors';
import NewsSection from '../components/NewsSection'
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Programs />
      <Recognition />
      <LearningJourney/>
      <Testimonials/>
      <Mentors/>
      <NewsSection/>
      <Enquiry/>
      <Footer />
    </>
  );
};

export default Home;
