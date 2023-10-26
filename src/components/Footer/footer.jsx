import "./footer.css"

export function Footer(){
  return(
    
    <div className='footer'>
    
    </div>

 )
}





/*


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
            <ul>
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
*/