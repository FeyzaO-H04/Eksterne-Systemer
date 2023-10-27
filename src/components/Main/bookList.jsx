/*
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { BookCard } from "../BookCard/BookCard"
import "./bookList.css";

export function BookList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "https://openlibrary.org/works/OL45804W/editions.json?limit=20";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter and extract the data for books with covers
        const entries = (data.entries || []).filter((book) => book.covers && book.covers[0]);
        // Start from the 5th book 
        const slicedData = entries.slice(4);
        setData(slicedData);
      })
      .catch((error) => setError(error));
  }, []);

  // Initial and loading state
  let result = <Loading />

  if (error) {
    // Error state
    result = <ErrorMessage />
  } else if (data) {
    // Successful state
    result = (
      <ul className="bookCards">
        {data.map((book, id) => (
          <li key={id} className="bookCard">
             <BookCard book={book}/>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mainContent">
      <div className="filterContainer">
        <input className="searchInput" type="text" placeholder="Search" />
        <button className="searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="bookContainer">
        {result}
      </div>
    </div>
  );
}

*/

import { Loading } from "../Loading/Loading"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { BookCard } from "../BookCard/BookCard"
import { useFetch } from "../../assets/Hooks/useFetch"

import "./bookList.css";

export function BookList() {


  const apiUrl = "https://openlibrary.org/works/OL45804W/editions.json?limit=20";

  const {data, isLoading, error} = useFetch(apiUrl)

  console.log(data)

  return (
    <div className="mainContent">

        <div className="bookContainer">
          {
            isLoading
              ? <Loading />
              : error ? <ErrorMessage />
                :
              <ul className="bookCards">
                {
                  data.map((book, id) => (
                    <li key={id} className="bookCard">
                      <BookCard book={book}/>
                    </li>
                  ))
                }
              </ul>
          }
        </div>
    </div>
  );
}


