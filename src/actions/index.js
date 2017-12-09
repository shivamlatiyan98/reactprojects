export  default  function selectbook (book) {


    console.log('book is selected');

    return {
        type:'BOOK_SELECTED',
        payload:book
    }

}