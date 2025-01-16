  import React, { useEffect, useState } from 'react';
  import '../../src/index.css';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import axios from 'axios';
  import { Link } from 'react-router-dom/cjs/react-router-dom.min';
  import BestCollection from '../components/BestCollection';
  import { Button, Card } from 'react-bootstrap';

  const Index = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = async () => {
      // fetching the products
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        alert(response.error)
      }
    };

    return (
      <>
      
          <Navbar />
          <BestCollection/>
          <main>
            <h2 className='text-center playfair-display-head'>Our Products</h2>
            <div className="flex flex-row  flex-wrap gap-4 justify-center">
        
            {products.map((item) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={item.id}>
            <Card.Img
              variant="top"
              src={item.image}
              style={{ height: '200px', objectFit: 'contain' }}
              
            />
            <Card.Body>
              <Card.Title className='text-gray-900 font-semibold '>{item.title}</Card.Title>
              <Card.Text className=''>{item.description.slice(0, 100)}...</Card.Text>
                  <Card.Text className=''><span className='text-blue-gray-900 font-semibold'>Price: </span>${item.price}</Card.Text>
                  <Link to={`/products/${item.id}`}><Button variant="primary" className='font-semibold text-teal-900'>View Details</Button></Link>
              </Card.Body>
                </Card>
        ))}
      </div>
          </main>
          <Footer/>
    
      </>
    );
  };

  export default Index;
