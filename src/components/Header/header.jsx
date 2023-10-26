import "./header.css"
import {
  Link,
} from 'react-router-dom'


export function Header(){
  
  return(
    <div className="header">

      <div className="nav">
     
       <Link to="/" className="logo">LIBRARY</Link>

       <Link to="/mybooks" className="my-books-button">My Books</Link>
       
     
        <div className="nav-right">
          <div className="select">
            <select className="searchSelect">
              <option value="all">All</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
          </div>
          <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <button className="menu-btn"><i className="fa-solid fa-bars"></i></button>
        </div>
      </div>

    </div>
  )
}