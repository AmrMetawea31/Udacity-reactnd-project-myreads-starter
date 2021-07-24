import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import BookLists from "./BookLists";

class MyReads extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    updateShelf:propTypes.func.isRequired
  };

  render() {
    const { books } = this.props;
    if (books.length === 0 || !books || books === undefined) {
      return <div />;
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookLists onShelfChange={this.props.updateShelf}  books={this.props.books.filter((book)=>(book.shelf==="currentlyReading"))} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookLists onShelfChange={this.props.updateShelf} books={this.props.books.filter((book)=>(book.shelf==="wantToRead"))}/>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookLists onShelfChange={this.props.updateShelf} books={this.props.books.filter((book)=>(book.shelf==="read"))} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link className="open-search button" to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
