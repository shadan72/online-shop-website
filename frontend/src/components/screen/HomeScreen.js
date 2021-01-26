import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/ProductActions";
import Product from "../../components/Product";
import ErrorMessage from "../ErrorMessage";
import LoadingBox from "../LoadingBox";

export default function HomeScreen() {
  const dispatch = useDispatch();
  // NO REDUX
  //  const [products, setProducts] = useState([]);
  //   const [loading, setloading] = useState(false);
  //   const [error, setError] = useState(false)

  // WITH REDUX
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  useEffect(() => {
    // NO REDUX
    //  const fetchData = async () => {
    //    try {setloading(true);
    //    const { data } = await axios.get('/api/products');
    //    setloading(false);
    //    setProducts(data);} catch(err){
    //     setloading(false);
    //      setError(err.message);

    //    }
    //  };
    //  fetchData();

    // WITH REDUX
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessage> {error} </ErrorMessage>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key="product._id" product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
