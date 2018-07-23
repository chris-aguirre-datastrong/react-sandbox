
// import './PrimaryDataFigure.css';
import Radium from 'radium';
import React, { Component } from 'react';

const primaryDataFigure = (props) => {
      var styles = {
          base: {
            display: 'inline-block',
            margin: '10px',
            border: '5px solid #eee',
            boxShadow: '0 2px 2px #ccc',
            padding: '20px',
            color: '#C13928',
            ':hover': {
              color: 'gray',
            },
          },
          subText: {
            fontFamily: '"Arial Narrow", Arial, sans-serif',
            fontStyle: 'italic',
            color: 'black'
          },
    };

    if(!props.widgetsShowing) {
      styles.base.color= 'blue';
    }

  return (
    <div onClick={props.onClick} style = {styles.base}>
      <strong>
        <h1>{props.value.toLocaleString('en', {useGrouping:true})}</h1>
      </strong>
      <h6 style = {styles.subText}>{props.description}</h6>
    </div>
  )
};


export default Radium(primaryDataFigure);
