import React, { useEffect } from 'react'
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
             <button> Add to Cart</button>
            </div>

            <div >
             
            </div>
          </div>
          </div>)}
       
       
        </div>
    )
}
