import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

//Apollo clien setup
const client = new ApolloClient({
  uri: "https://gql-playlist.onrender.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>GQL Playlist</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
