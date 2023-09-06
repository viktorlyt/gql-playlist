import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from "../queries/queries";
import { useState } from "react";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  function submitForm(e) {
    e.preventDefault();
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddBook;
