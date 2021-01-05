import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from "../../components/Product";
import ErrorMessage from '../ErrorMessage';
import LoadingBox from '../LoadingBox';

export default function HomeScreen() {
 const [products, setProducts] = useState([]);
  const [lodaing, setLodaing] = useState(false);
  const [error, setError] = useState(false)
 useEffect(() => {
   const fetchData = async () => {
     try {setLodaing(true);
     const { data } = await axios.get('/api/products');
     setLodaing(false);
     setProducts(data);} catch(err){
      setLodaing(false);
       setError(err.message);
       
     }
   };
   fetchData();
 }, [])
    return (
        <div>
      
          {lodaing ? (<LoadingBox></LoadingBox>)
          : error ? (<ErrorMessage> {error} </ErrorMessage>)
          : (<div className="row center">
          {products.map((product) => (
            <Product key="product._id" product={product} />
          ))}

        </div>)
        }
              
        </div>
    )
}
