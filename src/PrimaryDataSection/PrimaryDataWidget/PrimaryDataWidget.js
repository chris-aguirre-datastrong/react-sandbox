import React from 'react';
import './PrimaryDataWidget.css';

/* I really tried to re-write this to use Radium, but Radium does not support
    ::after and it was getting very messy. Its not worth trying to get nursesWorkingBackground
    with Radium
*/
const primaryDataWidget = (props) => {
  let cssClasses = 'primDataWidget';

  if(props.name === 'GEOGRAPHICAL ANALYSIS')
    cssClasses = cssClasses.concat(' worldImageBackground');
  else if(props.name === 'PROGRAM AREAS')
    cssClasses = cssClasses.concat(' nursesWorkingBackground');
  else if(props.name === 'POPULATION')
    cssClasses = cssClasses.concat(' africanVillageBackground');

  return (
    <div className={cssClasses}>
      <header>
        <h4>
          {props.name}
        </h4>
      </header>
    </div>
  )
};

export default primaryDataWidget;
