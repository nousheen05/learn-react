// nested components is completely similar to nested function calls

// import necessary modules

import React from 'react';
import ReactDom from 'react-dom';


// nested component
function Greeting() {
  return (
    <div>
      < Name />
      < Message />
    </div>
  );
}

const Name = () => <h2>Ennen</h2>;

const Message = () => {
  return (
    <p>
      I am Nousheen actually but my stage name is ennen
    </p>
  );
}


ReactDom.render(<Greeting />, document.getElementById('root'));



