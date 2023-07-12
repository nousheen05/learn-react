//import react
import React from 'react';
import ReactDom from 'react-dom';

//component is a function starting with a capital letter(so that react identifies it as component)
//this function would return JSX simply html

// component function always returns JSX
// stateless functional component
function Greeting() {
  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
}

// other way to create a component by using createElement method
// const Greeting = () => {
//   return (React.createElement('div',
//     {}, React.createElement('h2', {}, "Hello world")));
// }


//render method parameters: what and where the content is to be loaded
ReactDom.render(<Greeting/>, document.getElementById('root'));