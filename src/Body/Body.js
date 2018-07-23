import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Persons from '../Persons/Persons';
import PrimaryDataSection from '../PrimaryDataSection/PrimaryDataSection';
import SampleRouteComponent1 from '../SampleRouteComponent1/SampleRouteComponent1.js';
import SampleRouteComponent2 from '../SampleRouteComponent2/SampleRouteComponent2.js';
import SampleRouteComponent3 from '../SampleRouteComponent3/SampleRouteComponent3.js';
import SampleRouteComponent4 from '../SampleRouteComponent4/SampleRouteComponent4.js';


const body = () => (
  <body>
    <Switch>
      <Route path='/persons' component={Persons}/>
      <Route path='/primaryDataSection' component={PrimaryDataSection}/>
      <Route path='/sampleRouteComponent1' component={SampleRouteComponent1}/>
      <Route path='/sampleRouteComponent2' component={SampleRouteComponent2}/>
      <Route path='/sampleRouteComponent3' component={SampleRouteComponent3}/>
      <Route path='/sampleRouteComponent4' component={SampleRouteComponent4}/>
    </Switch>
  </body>
);

export default body;
