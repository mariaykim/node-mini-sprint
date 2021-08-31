import React from 'react';

var QuoteBlock = ({quotes}) => {
  return (
    <div>
      {quotes.map((elem) => {
        return (<h2>{elem}</h2> )
      })
    }
    {/* <h2>{quotes}</h2> */}
    </div>
  )
}

export default QuoteBlock;