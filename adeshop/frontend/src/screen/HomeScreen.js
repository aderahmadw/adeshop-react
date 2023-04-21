import React, { useEffect, useState } from 'react'
import axios from "axios"
// import data from '../data'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const [products, setProduct] = useState ([]);
  useEffect (() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProduct(result.data);
      }
    fetchData();
  }, [])
  return (
    <>
    <h1>Products</h1>
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
          </>
  )
}

export default HomeScreen