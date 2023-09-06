import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  function displayBookDetails() {
    const { book } = data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }

  return <div id="book-details">{displayBookDetails()}</div>;
}

export default BookDetails;
