import React, { Component } from 'react';
import PrimaryDataFigure from './PrimaryDataFigure/PrimaryDataFigure.js';
import PrimaryDataWidget from './PrimaryDataWidget/PrimaryDataWidget.js';

class PrimaryDataSection extends Component {

  // This 'state' property array can only be used when you 'extend Component'.
  state = {
    primaryDataFigures: [
      {value: 13318923,description: "People Receiving Antiretroviral Therapy in Fiscal Year 2017"},
      {value: 15244036, description: "Voluntary Medical Male Circumsicions since 2003"},
      {value: 6369565, description: "People Supported by Orphans and Vulnerable Children Programs in Fiscal Year 2017"}
    ],
    showPrimaryDataWidgets: true,
    showPrimaryDataFigureResults: false,
  }

  togglePrimaryDataWidgetsHandler = () => {
    const doesShow = this.state.showPrimaryDataWidgets;
    this.setState({showPrimaryDataWidgets: !doesShow});

    const doesShowFigureResults = this.state.showPrimaryDataFigureResults;
    this.setState({showPrimaryDataFigureResults: !doesShowFigureResults});
  }

  render() {
    let primaryDataFigureResults = null;
    if(this.state.showPrimaryDataFigureResults) {
      primaryDataFigureResults = (
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="http://best-excel-tutorial.com/images/Excel%20Line%20Chart.jpg"
              alt="Test Alt Wording"/>
            </div>
          </div>
        </div>
      );
    }

    let primaryDataWidgets = null;
    if(this.state.showPrimaryDataWidgets) {
      primaryDataWidgets = (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <PrimaryDataWidget
                name="GEOGRAPHICAL ANALYSIS"/>
            </div>
            <div className="col-sm">
              <PrimaryDataWidget
                name="PROGRAM AREAS"/>
            </div>
            <div className="col-sm">
              <PrimaryDataWidget
                name="POPULATION"/>
            </div>
          </div>
        </div>
      );
    }

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm" >
            <div>
              <PrimaryDataFigure
                 value={this.state.primaryDataFigures[0].value}
                 description={this.state.primaryDataFigures[0].description}
                 onClick={this.togglePrimaryDataWidgetsHandler}
                 widgetsShowing={this.state.showPrimaryDataWidgets}/>
              </div>
            </div>
            <div className="col-sm" >
              <div>
                <PrimaryDataFigure
                  value={this.state.primaryDataFigures[1].value}
                  description={this.state.primaryDataFigures[1].description}
                  widgetsShowing={this.state.showPrimaryDataWidgets}/>
              </div>
            </div>
            <div className="col-sm">
              <div>
              <PrimaryDataFigure
                 value={this.state.primaryDataFigures[2].value}
                 description={this.state.primaryDataFigures[2].description}
                 widgetsShowing={this.state.showPrimaryDataWidgets}/>
              </div>
            </div>
          </div>
          {primaryDataFigureResults}
          {primaryDataWidgets}
        </div>
      );
  }
}

export default PrimaryDataSection;
