import { useEffect, useState } from "react"
import "./bookList.css"

export function BookList(){
  const [data, setData] = useState(null)

  const apiUrl = "https://openlibrary.org/search.json?limit=20&offset=0"

  useEffect(
    () => {
      fetch(apiUrl)
        .then(response => response.json)
        .then(data => setData())
    },
  )

  
  return(
  
    <div className="bookContainer">
      
      <div className="filterContainer">
        <input className="searchInput" type="text" placeholder="Search" />
        <button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      
      <h1>BOOKS</h1>

      {
        data === null
          ? <p>Loading...</p>
          : (
            <ul>
              <li>Book 1</li>
              <li>Book 2</li>
              <li>Book 3</li>
            </ul>
          )
      }
    </div>

  )
}