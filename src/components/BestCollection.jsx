import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BestCollection = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    fetchBestSeller();
  }, []);

  const fetchBestSeller = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=4');
      setBestSeller(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center playfair-display-head">Our Best Selling Products</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {bestSeller.map((item) => (
          <Card
            style={{
              width: '18rem',
              margin: '1rem',
              borderRadius: '10px',
              border: '1px solid #e2e8f0', // Light border color
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a card effect
            }}
            key={item.id}
          >
            <Card.Img
              variant="top"
              src={item.image}
              style={{ height: '200px', objectFit: 'contain', borderRadius: '10px 10px 0 0' }}
            />
            <Card.Body>
              <Card.Title className="text-lg text-gray-900 font-semibold">{item.title}</Card.Title>
              <Card.Text className="text-sm text-gray-600">{item.description.slice(0, 100)}...</Card.Text>
              <Link to={`/products/${item.id}`}><Button variant="primary" className='font-semibold text-teal-900'>View Details</Button></Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BestCollection;
