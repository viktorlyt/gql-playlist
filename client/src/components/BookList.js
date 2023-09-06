import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return (
            <li
              key={book.id}
              onClick={(e) => {
                setSelected(book.id);
              }}
            >
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;
