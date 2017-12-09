export  default  function (state=null,action) {

    // state is the one on which reducer works
    // action that call this reducer
   console.log('hello an active action');
    switch (action.type){
        case'BOOK_SELECTED':

            return action.payload;


    }

    return state

}