import React, { Component } from 'react';

import  Booklist from  '../containers/book-list';

import  BookDetail from  '../containers/bookdetail';

 export  default class App extends Component {







  render() {
    return (
      <div>
        < Booklist />
       < BookDetail />


      </div>
    );
  }
}


