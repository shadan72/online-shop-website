import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../data';
import Rating from '../Rating';

export default function ProductScreen(props) {
    const product=data.products.find( (imageId) => (imageId._id === props.match.params.id));
    if(!product)
    {
        return (<div> Image not found</div>)
    }
    return (
        <div>
            <Link to="/"> Back</Link>
          <div className="row">
            <div> 
               <img src={product.image}  alt={product.name} />
            </div>
            <div>
             <ul>
                 <li> 
                     <h1>{product.name}</h1>
                 </li>
                 <li>
                     <Rating rating={product.rating}  numReviews={product.review}/>
                 </li>
                 <li>
                     <h2>Price: ${product.price}</h2>
                 </li>
                 <li>{product.countOnStock >= 1 ? <span>In stock</span>: <span>Not in stock</span>}</li>
             </ul>
             <button> Add to Cart</button>
            </div>

            <div >
             
            </div>
          </div>
        </div>
    )
}
