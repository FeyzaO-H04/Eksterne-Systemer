export function BookCard(props){
  const { book } = props

  return(
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.authors && book.authors[0] ? book.authors[0].name : "Unknown Author"}</p>
      {book.covers && book.covers[0] && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
          alt={`${book.title} Cover`}
        />
      )}
    </div>
  )
}