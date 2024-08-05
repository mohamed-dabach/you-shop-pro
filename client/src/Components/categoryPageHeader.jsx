import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hocks/useFetch";
import { useDispatch } from "react-redux";
import { setLoading, setProducts } from "../redux/reducers/productReducer";

const CategoryPageHeader = () => {
  const { category } = useParams();
  console.log(category);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `/products?fields=category,name,price,img&category=${category}`
  );
  useEffect(() => {
    dispatch(setProducts(data?.products));
    dispatch(setLoading(data?.loading));
  }, [data, dispatch]);
  return (
    <>
      <div className="my-2">
        <h3 className="text-4xl font-semibold my-10">{category}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat repellendus, minus alias unde reprehenderit!
        </p>
      </div>
    </>
  );
};

export default CategoryPageHeader;
