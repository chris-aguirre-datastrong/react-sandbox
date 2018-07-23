import React from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types';

/* This is an alternative, easier way to creating a Component, without needing to explicitely
  use 'extends Component render()''
  THIS IS THE BEST PRACTICE/RECOMMENDED WAY OF CREATING COMPONENTS
  */

// This is an ES6 Javascript "ARROW" function
      // const person = () => {
      //   return <p>Im a Person!</p>
      // }

// This is like the ES6 Arrow Function, but now outputting DYNAMIC content as part of the JSX content.
// We can only execute 1 line expressions within {} like we do below.
      // const person = () => {
      //   return <p>Im a Person! and I am {Math.floor(Math.random()*30)} years old</p>
      // }

// Now, we can replace the Random dynamic content with something more meaningful, the properties passed via the HTML in App.js.
// The props.children allows you to access the text which was passed in between the open/close tags of <Person> in App.js
const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="Person" style = {style}>
      <p onClick={props.click}>Im {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  )
};

// This is how you can restrict properties for a Component to be specific types i.e. strings/numbers
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// This is a Pre-ES6 Javascript function
    // const person = function() {
    //   return <p>Im a Person!</p>
    // }

export default Radium(person);
