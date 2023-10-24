import { useState } from "react"
import "./bookList.css"

export function BookList(){
  const [data, setData] = useState(null)
  
  return(
  
    <div className="bookContainer">
      <h1>BOOKS</h1>

      {
        data === null
          ? <p>Data is null.</p>
          : <p>Data is truthy.</p>
      }
    </div>

  )
}