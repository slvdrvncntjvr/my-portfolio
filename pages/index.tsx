import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col justify-between">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <ProfileCard />
      <h2 className="text-2xl mt-8 mb-4" id="projects">Projects</h2>
      <ProjectList />
    </main>
    <Footer />
  </div>
);

export default Home;