# MyReads Project

This application can be used to track books you are intersted in,by categorizing books into three categories.
Want to read
Read
Currently Reading

## To start the project

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Application's functions
Main page,here you can find three shelfs based on  your selection.
This page is used to keep track of your books, you can click on each book's
menu and move the book to the shelf you want.

Search page, you can look for a book you are intersted in.
Each book has a list of controls to move the book to the correct shelf.

Both pages are connected to updated with new changes

## Backend Server
Methods used:

* [`getAll`]:
* getAll method used to return the categorized books in shelfs
* [`update`]:
* update method used to update the shelfs with the new categorized books
* [`search`]:
* search method used to search for books that the user interested in using typed query in the search bar



## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

