import React, { Component } from 'react';
import './App.css';
import BookList from './bookList/bookList.js';
import SearchForm from './searchForm/searchForm.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: 'all',
      bookType: "",
      searched: false,
      selected: null
    };
  }

  handleChangePrintType = (printType) => {
    this.setState({
      printType: printType
    })
  }

  handleChangeBookType = (bookType) => {
    this.setState({
      bookType: bookType
    })
  }

  handleSearch = (searchTerm) => {

    const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
    const params = {
      key: 'AIzaSyByrTBHbTNCJ2DvCTuJoYCbXBDBaa9FAeQ',
      q: searchTerm,
    }
    if (this.state.bookType) {
      params.filter = this.state.bookType
    }
    if (this.state.printType) {
      params.printType = this.state.printType
    }
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    console.log(Object.keys(params))
    console.log(Object.keys(params).map(key => `${key}=${params[key]}`))
    const url = searchURL + queryString;

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        this.setState({
          books: data.items,
          searched: true
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const list = this.state.searched
          && <BookList books={this.state.books} />
    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main className='App'>
          <SearchForm 
            onSearch={this.handleSearch}
            onChangePrintType={this.handleChangePrintType}
            onChangeBookType={this.handleChangeBookType}
          />
          {list}
        </main>
      </>
    );
  }
}

export default App;