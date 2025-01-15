import React from 'react'
import '../../src/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar/>
        <main className="flex-grow">
          
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
    </>
  )
}

export default Index