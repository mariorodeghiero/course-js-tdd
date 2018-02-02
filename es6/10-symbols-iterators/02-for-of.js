
      // iterators
      // iterable

      var txt = 'Ireland'; // iterable
    var it = txt[Symbol.iterator](); // iterator

    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );
    // console.log( it.next() );

    for ( letter of txt ) {
        console.log(letter);
      if (letter === 'a') break;
    }
