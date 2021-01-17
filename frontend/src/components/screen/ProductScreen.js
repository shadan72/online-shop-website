import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductItem } from '../../actions/ProductActions';
import ErrorMessage from '../ErrorMessage';
import LoadingBox from '../LoadingBox';
import Rating from '../Rating';

export default function ProductScreen(props) {
    //NO REDUX
    // const product=data.products.find( (imageId) => (imageId._id === props.match.params.id));
    // if(!product)
    // {
    //     return (<div> Image not found</div>)
    // }
    //WITH REDUX
const ProductItemSelector = useSelector(state => state.ProductItem)
const { loading, product, error}=ProductItemSelector
const dispatch = useDispatch()
const productId=props.match.params.id;
const [quantity, setQuantity] = useState()
    useEffect(() => {
    dispatch(ProductItem(productId))
    }, [dispatch,productId])

    return (
             <div>
      
      {loading ? (<LoadingBox></LoadingBox>)
      : error ? (<ErrorMessage> {error} </ErrorMessage>)
      : 
            (
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
             <li>
                 <div>
                    
                 {product.countOnStock > 0 ? (
                 <>
                  <div>Quantity</div>
                  <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(product.countOnStock).keys()].map(
                       (x) =>
                       (
                           <option key={x+1} value={x+1}>
                               {x+1}
                           </option>
                       )
                       )}
                  </select>

                 <button> Add to Cart</button>
                 
                 </>
                 ):(<div>Out of Stock</div>)}
               
                 </div>
                 
                
                 </li>
            
            </div>

            <div >
             
            </div>
          </div>
          </div>)}
       
       
        </div>
    )
}
