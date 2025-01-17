import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter products by category
  const filteredProducts = allProducts.filter((item) =>
    selectedCategories.length > 0
      ? selectedCategories.includes(item.category)
      : true
  );

  // Filter products by search
  const searchFilteredProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-row gap-36">
        {/* Sidebar */}
        <div className="p-6 pt-20 border-2 border-gray-300 w-full h-screen">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Search by Category
          </h1>
          <ul className="flex flex-col space-y-4">
            {[
              "electronics",
              "jewelery",
              "men's clothing",
              "women's clothing",
            ].map((category) => (
              <li key={category} className="text-lg flex items-center">
                <input
                  type="checkbox"
                  className="mr-4"
                  onChange={() => handleCheckboxChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        {/* Main */}
        <div className="flex flex-row flex-wrap gap-1 justify-start">
          {searchFilteredProducts.map((item) => (
            <Card
              key={item.id}
              style={{ width: "18rem" }}
              className="shadow-lg border border-gray-300"
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className="text-gray-900 font-semibold">
                  {item.title}
                </Card.Title>
                <Card.Text>{item.description.slice(0, 100)}...</Card.Text>
                <Card.Text>
                  <span className="text-blue-gray-900 font-semibold">
                    Price:
                  </span>{" "}
                  ${item.price}
                </Card.Text>
                <Link to={`/products/${item.id}`}>
                  <Button
                    variant="primary"
                    className="font-semibold text-teal-900"
                  >
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
