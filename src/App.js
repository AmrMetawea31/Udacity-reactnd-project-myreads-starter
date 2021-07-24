import React from "react";
import "./App.css";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";
import * as BookList from "./BooksAPI";
import MyReads from "./MyReads";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  updateShelf = (book, event) => {
    console.log(book)
    console.log(event.target.value)
    const shelf=event.target.value;
    // let booksCopied = this.state.books;
    // let bookToChange = booksCopied.filter((tempBook) => {
    //   return tempBook.id === book.id;
    // })[0];
    // const indexOfChangedBook = booksCopied.indexOf(bookToChange);
    // bookToChange.shelf =shelf ;
    // booksCopied[indexOfChangedBook] = bookToChange;
    // this.setState({ books: booksCopied });
    BookList.update(book,shelf).then(()=>{
      BookList.getAll().then((books) => {
        this.setState(() => ({
          books,
        }));
      });

    });

  };
  componentDidMount() {
    BookList.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }
  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchPage
              updateShelf={this.updateShelf}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MyReads updateShelf={this.updateShelf} books={this.state.books} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
