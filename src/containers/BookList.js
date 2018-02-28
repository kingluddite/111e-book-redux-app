import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import selectBook from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title}>
        <div
          role="button"
          onClick={() => this.props.selectBook(book)}
          onKeyPress={() => this.props.selectBook(book)}
          tabIndex={0}
          className="list-group-item"
        >
          {book.title}
        </div>
      </li>
    ));
  }
  render() {
    return (
      <div>
        <ul className="list-group-col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside BookList
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up
// ass props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should
  // be passed to ALL of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container
// It needs to know about this dispatch method, selectBook
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
