import React from 'react';
import Navbar from '../components/Navbar';
import aboutUs from '../assets/aboutUs.jpg';

const About = () => {
  
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-6 space-x-8"> 

        <div style={{marginRight: "5px"}} className="w-1/3"> 
          <img 
            style={{padding:"10px"}}
            src={aboutUs} 
            height={"450px"} 
            width={"50px"}   
            alt="About Us" 
            className="w-full h-auto object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        <div style={{marginLeft: "20px"}} className="w-1/3 text-justify"> 
          <div className="text-lg space-y-6 pl-12">
            <span className='font-semibold text-black'>Welcome to Fashion Store</span>
            <p className='text-gray-900'>At Fashion Store, we believe that fashion is a powerful form of self-expression. We are dedicated to bringing the latest trends, timeless classics, and premium quality apparel to our customers. Whether you're looking for a chic outfit for a night out or cozy essentials for lounging at home, we have something for everyone. Our curated collection is designed to make you feel confident and stylish every day, with something new to discover each time you visit.</p>
            <span className='font-semibold text-black'>Our Mission</span>
            <p className='text-gray-900'>
            Our mission is simple: to provide high-quality, affordable fashion for everyone. We aim to make fashion accessible and fun, offering a wide range of clothing, accessories, and footwear that cater to all tastes and budgets. We believe that when you feel good in what you wear, it boosts your confidence and sets the tone for the day ahead. That's why we work tirelessly to ensure that every piece in our collection meets the highest standards of craftsmanship and comfort.
            </p>
            <span className='font-semibold text-black'>Why Choose Us?</span>
            <p className='text-gray-900'>
            Fashion Store is not just a place to shop—it's a community. We prioritize customer satisfaction above all else, ensuring that every experience with us is seamless, enjoyable, and stress-free. Our website is easy to navigate, with secure payment options and fast, reliable shipping. Whether you’re shopping for yourself or searching for the perfect gift, we’re here to help you find exactly what you need. Our customer support team is always available to answer your questions and assist with any concerns.
            </p>
            <span className='font-semibold text-black'>Sustainable Fashion</span>
            <p className='text-gray-900'>
            We are committed to making a positive impact on the planet. Fashion Store believes in the power of sustainable fashion and strives to make environmentally conscious choices wherever possible. From eco-friendly packaging to selecting brands that prioritize ethical production, we take pride in offering fashion that not only looks good but also feels good. Our goal is to build a future where style and sustainability go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
