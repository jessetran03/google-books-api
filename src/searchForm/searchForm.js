import React, { Component } from 'react';
import './searchForm.css';

class SearchForm extends Component {
  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSearch(e.target.searchTerm.value)
  }
  render() {
    return (
      <div className='search-form'>
        <form
          className='search-bar'
          onSubmit={this.onSubmitForm}
        >
            <label htmlFor='search-term'>Search: </label>
            <input type='text' name='searchTerm' id='searchTerm' />
            <input type='submit' value='Search'/>

          <label htmlFor='print-type'>Print Type: </label>
          <select 
            name='printType'
            id='printType'
            onChange={e => this.props.onChangePrintType(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='books'> Books</option>
            <option value='magazines'>Magazines</option>
          </select>

          <label htmlFor='book-type'> Book Type: </label>
          <select
            name='bookType'
            id='bookType'
            onChange={e => this.props.onChangeBookType(e.target.value)}
          >
            <option value=''>No Filter</option>
            <option value='partial'>Partial</option>
            <option value='full'>Full</option>
            <option value='free-ebooks'>Free eBooks</option>
            <option value='paid-ebooks'>Paid eBooks</option>
            <option value='ebooks'>All eBooks</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchForm;