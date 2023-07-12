// tHIS PROJECT IS SIMPLY TO DISPLAY HOW nested componenrs work in react


import React from 'react';
import ReactDOM from 'react-dom/client';

//adding styles and importing css-external
import './index.css' ;

const BestBooks = () => {
  return (
    <>
    <div className='hero'>
      <Title />
      <div className='book'>
      <Book1 />
      <Book2 />
      </div>
      </div>
    </>
  );
}


//adding inline JSX-CSS 
// 1) use style attribute
// 2) {} in JSX means going back to land - we can use js inside those brackets
// 3) value for attribute is an object with key/value pairs - capitalized and with ''



// Tip: inline css > external css.Most of JS libraries use inline JS, so if we try to use external css and modify or
// make some changes, So IT MIGHT NOT WORK use refeerence docs.
// Then how to modify or change library inline css?
//A: Instead of passing obeject directly we gonna pass the object reference as the value to attribute

//here am passing direct object as the value
// const Title = () => <h2 style={{color: 'red', fontSize: '50px'}}>Colleen Hoover</h2>;

// also we can pass object reference as the value
const styleForTitle = {
  color: 'red', 
  fontSize: '50px'
}
const Title = () => <h2 style={styleForTitle}>Colleen Hoover</h2>;



const Book1 = () => {
  return (
    <>
      <Image1 />
    </>
  );
}
const Book2 = () => {
  return (
    <>
      <Image2 />
    </>
  );
}

// JSX - JavaScript
// {} in JSX means going back to land - we can use js inside those brackets
// inside those braces we need to pass expressions not statements ex:

const cost = '$19' ;
const Image1 = () => {
  return (
    <div className='b'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg" /><br></br>
    <p>It End's With US</p>
    <p>{cost}</p>    
    {/* this is comment in jsx */}
    </div>
  );
}

const Image2 = () => {
  return (
    <div className='b'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg" /><br></br>
    <p>It Starts with US</p>
    </div>
  );
}




const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BestBooks/>);