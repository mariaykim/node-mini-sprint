import React from 'react';

var QuoteBlock = ({quotes}) => {
  console.log('quotes', quotes);
  return (
    <div>
      {quotes.map((elem, i) => {
        return (<h2 key={i}>{elem}</h2> )
      })
    }
    {/* <h2>{quotes}</h2> */}
    </div>
  )
}

export default QuoteBlock;