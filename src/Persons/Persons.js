import React, { Component } from 'react';
import Person from './Person/Person.js';
import Radium, {StyleRoot} from 'radium';

// VIP: Here we also use our own custom Person component (3 times), which also has its own properties!
class Persons extends Component {

  state = {
    persons: [
      {name: 'Max', age: 77},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
    ],
    showPersons: false,
    toggleClicked: 0,
  }

  switchNameHandler = (newName) => {
    // alert("Button Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age:24}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age:26}
      ]
    })
  }

  /* Here, we are setting state in a special way using 'prevState'
    because we want to increment 'toggleClicked' counter each time button is clicked.
    We need to use 'prevState' to ensure we don't get undeterministic results.
    This reminds me of Race Conditions, where instructor says that if 'toggleClicked'
    is changed elsewhere in the app, you might not get the last correct value of it.
  */
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
    // Simpler way of setting some State which does not depend on prevState
    //this.setState({showPersons: !doesShow});
  }

  render() {

    // This is an in-line CSS style, which allows you to add styling specific to a component.
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>

          {/* You can also pass methods as PROPS, like we pass in 'switchNameHandler' here.  */}
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!!!!')}
            changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    {/* The damn <StyleRoot> killed me. It made me lose hours of time because it was somehow
        breaking my Router Links - they were not working at all in Header.js.
        Finally I removed this StyleRoot from App.js, and added it to Persons.js (this file) and
        finally the Router Links worked properly!!
    */}
      return (
        <StyleRoot>
        <div>
        {/* Notice we did not use switchNameHandler(), with parenthesis. If you do that, switchNameHandler() is executed on page load.  */}
        {/* Old onClick method for Button:onClick={this.switchNameHandler.bind(this, 'Maximilian')} */}
          <button
            style={style}
            onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
        </div>
        </StyleRoot>
      );
  }
}

export default Radium(Persons);
