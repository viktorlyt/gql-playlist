import { gql } from "@apollo/client";

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query getBook($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author {
        name
        age
        id
        books {
          name
          id
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
