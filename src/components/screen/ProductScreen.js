import React from 'react'
import data from '../../data';

export default function ProductScreen(props) {
    const product=data.products.find( (imageId) => (imageId._id === props.match.params.id));
    return (
        <div>
          <div className="row">
            <div> 
               <img src={product.image}  alt={product.name} />
            </div>
            <div>

            </div>

            <div>

            </div>
          </div>
        </div>
    )
}
