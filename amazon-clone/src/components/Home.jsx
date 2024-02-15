import React from "react";

const Home = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => {
          return (
            <div key={category} className="category">
              <a href={"/products?category={category}"}>{category}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
