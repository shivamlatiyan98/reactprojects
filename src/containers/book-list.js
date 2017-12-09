


import React,{ Component } from  'react';


import  { connect } from  'react-redux';
import   selectbook  from  '../actions/index';


import { bindActionCreators } from "redux";

// main component

class  Booklist extends Component {

    renderlist (){
        console.log(this.props);

        return this.props.books.map(book=> {

         return (
          <li className='list-group-item ' key={book.title}    onClick={() => this.props.selectbook(book)} >


              {book.title}
          </li>


        );


        })
    }

    constructor(props){
        super(props);

    }

    render( ){
        return (
          <ul className='list-group col-sm-4'>

              {this.renderlist()}

          </ul>

        );


    }



}

//return an object to props of upper component
{
// whenever the the state changes it is called to make new compnent into new container
// Whatever is returned will show up as props
// inside of BookList
}
function mapstatetoprops(state) {

    return {

        books:state.books

    }




}

// actio is triggered
// Anything returned from this function will end up as props
// on the BookList container

function  mapdispatchtoprops(dispatch) {
//take an obj
//


    return bindActionCreators({ selectbook: selectbook }, dispatch);


}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.


export  default connect(mapstatetoprops,mapdispatchtoprops)(Booklist);













