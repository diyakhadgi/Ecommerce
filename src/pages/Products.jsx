import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Ensure you import your custom Navbar
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      alert("Error fetching products");
    }
  };

  return (
    <>
      <Navbar />  
      <main>
        <h2 className='text-center text-3xl font-bold mt-6'>Our Products</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {products.map((item) => (
            <Card style={{ width: '18rem', margin:'1rem' }} key={item.id} className="shadow-lg border border-gray-300">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title className='text-gray-900 font-semibold'>{item.title}</Card.Title>
                <Card.Text>{item.description.slice(0, 100)}...</Card.Text>
                <Card.Text><span className='font-semibold'>Price:</span> ${item.price}</Card.Text>
                <Link to={`/products/${item.id}`}>
                  <Button variant="primary" className='w-full mt-2'>View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
