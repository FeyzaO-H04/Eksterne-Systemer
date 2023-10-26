import { useEffect, useState } from "react";

export function useFetch(apiUrl) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(
    () => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((fetchedData) => {
          // Filter and extract the data for books with covers
          const entries = (fetchedData.entries || []).filter((book) => book.covers && book.covers[0])
          // Start from the 5th book 
          const slicedData = entries.slice(4);
          setData(slicedData);
          setIsLoading(false);
        })
        .catch((fetchError) => {
          setError(fetchError)
          setIsLoading(false)
        })
    }, 
    []
  )

  return (
    data,
    error,
    isLoading

  )
  }
 
    
  
