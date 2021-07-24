import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import * as BookList from "./BooksAPI";
class SearchPage extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    updateShelf: propTypes.func.isRequired,
  };
  state = {
    query: "",
    showingBooks:[],
  };
    
    setShelfValue = (book) => {
      book.shelf = 'none';
      if(this.props.books && this.props.books.length) {
          const oldBookValueFromShelf = this.props.books.filter((b) => b.id === book.id);
          if(oldBookValueFromShelf.length){
              book.shelf = oldBookValueFromShelf[0].shelf;
          }
      } 
      return book;
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }));
    BookList.search(query).then((foundBooks) => {
      if(foundBooks && foundBooks.length) {
          const updatedBooksWithShelf = foundBooks.map((book) => this.setShelfValue(book));
          console.log(updatedBooksWithShelf)
          this.setState({showingBooks:updatedBooksWithShelf});
      } else {
          this.setState({showingBooks: []});
      }
  });


  };

  clearQuery = () => {
    this.updateQuery("");
  };

  handleChange(event) {
    this.setState({ optionValue: event });
  }
   searchInAuthors=(authors,text)=>{
     let matched=false;
     authors.forEach(author => {
     if(author.toLowerCase().includes(text.toLowerCase())){
       matched=true;
     }
     });
     return matched;
   }
  render() {
    const { query } = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                className="search-books"
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.showingBooks.map((book) => (
                <li key={book.id} className="book-list-item">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks?book.imageLinks.smallThumbnail:''
                        })`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={(event) =>
                          this.props.updateShelf(book, event)
                        }
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
      </div>
    );
  }
}

export default SearchPage;
