import React, { useEffect, useState } from "react";
import { client } from "../component/client";

const useFetch = () => {
  const [state, setState] = useState({
    articulos: [],
    isLoading: true,
    hasError: null,
  });

  console.log("state.articulos", state.articulos);

  const getInfo = () => {
    setState({
      ...state,
      isLoading: true,
    });

    client
      .getEntries()
      .then((response) => {
        console.log(response.items);

        setState({
          articulos: response.items,
          isLoading: false,
          hasError: null,
        });
      })

      .catch(console.error);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return {
    articulos: state.articulos,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
