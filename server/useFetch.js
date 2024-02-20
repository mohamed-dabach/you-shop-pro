// src/hooks/useFetch.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCHPRODUCT } from "../src/REDUX/ProductReducer/ActionPr";

export const useFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://127.0.0.2:8000/API')
            .then(response => response.json())
            .then(data => {
                dispatch(FETCHPRODUCT(data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);
};

