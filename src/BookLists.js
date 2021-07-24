import React, { Component } from "react";
import propTypes from "prop-types";

class BookLists extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onShelfChange: propTypes.func.isRequired,
  };

  render() {
    const { books, onShelfChange } = this.props;
    const showingBooks = books;

    return (
      <div>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id} className="book-list-item">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={(event) => onShelfChange(book, event)}
                    >
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div
                  style={{ width: 128, margin: 10 }}
                  className="book-details"
                >
                  <div style={{ fontSize: 12 }}>{book.title}</div>
                  <div style={{ color: "#999", fontSize: 12 }}>
                    {book.authors}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookLists;
