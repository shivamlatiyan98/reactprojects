import React,{ Component } from  'react';

import  { connect } from  'react-redux';

 class  BookDetail extends Component {

    render (){

        if(!this.props.book){
            return <div> click  to started </div>;
        }



        return ( <div>


            <h3> " book-details'</h3>

                <div> {this.props.book.title} </div>

                <div>{this.props.book.pages} </div>

        </div>
        );

    }



}



  function mapstatetoprops(state) {

     return {
        book:state.activebook

     }


  }

   export default connect(mapstatetoprops)(BookDetail);
















