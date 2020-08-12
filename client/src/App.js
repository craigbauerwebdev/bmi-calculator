import React, { Component, Fragment } from 'react';

//for testing metric
//height: 183cm  oe 1.8288 meters
//weight: 100kg

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //bmi: null,
      //comment: null,
      system: "imperial",
      //feet: null,
      //inches: null,
      //cm: null,
      //kg: null,
      //lbs: null,
      //height: null,
      //weight: null
    }
    this.updateSystem = this.updateSystem.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  updateSystem(e) {
    this.setState({
      system: e.target.value,
      comment: null,
      bmi: null,
      feet: null,
      inches: null,
      cm: null,
      kg: null,
      lbs: null,
      height: null,
      weight: null
    });
  }


  updateFeet = (e) => {
    this.setState({
      feet: e.target.value
    }, this.updateHeight);
  }

  updateInches = (e) => {
    this.setState({
      inches: e.target.value
    }, this.updateHeight);
  }

  updateCM = (e) => {
    this.setState({
      cm: e.target.value
    }, this.updateHeight);
  }

  updateLbs = (e) => {
    this.setState({
      lbs: e.target.value
    }, this.updateWeight);
  }

  updateKG = (e) => {
    this.setState({
      kg: e.target.value
    }, this.updateWeight);
  }

  updateHeight() {
    const
      {system, feet, inches} = this.state;
    let
      height;
    console.log("updating height", feet, inches);
    if(system === "imperial") {
      //if(feet && inches) {
        const 
          totalHeight = (feet * 12) + eval(inches);
        console.log(totalHeight, feet, inches, "inches");
        height = (totalHeight * 2.54) / 100; // converted to meters from inches
        console.log(height, "meters");
        // use this.state.system to decide what to convert to
      //}
    }
    if(system === "metric") {
      height = this.state.cm / 100;
      console.log(height, "meters");
    }
    this.setState({
      height: height
    })
  }
  updateWeight(e) {
    console.log("updating weight");
    const 
      {system, kg, lbs} = this.state;
    let
      weight;
    if(system === "imperial") { 
      weight = lbs / 2.2046226218; // converted to kg from lbs
      console.log(weight, "weight-imp");
    }
    if(system === "metric") {
      weight = kg;
      console.log(weight, "weight");
    }
    this.setState({
      weight
    })
  }

  calculateBMI() {
    console.log("calcing bmi");
    const { weight, height } = this.state;
    let 
      bmi = weight / (height ** 2);
    console.log(bmi);
    this.setState({
      bmi
    }, () => {
      if(!isNaN(this.state.bmi)) {
        if (bmi < 18.5) {
          this.setState({
            comment: 'Underweight'
          });
        } else if (bmi < 25) {
          this.setState({
            comment: 'Normal'
          });
        } else if (bmi < 30) {
          this.setState({
            comment: 'Overweight'
          });
        } else {
          this.setState({
            comment: 'Obese'
          });
        }
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="app"> 
          <div className="form-wrap">
              <div className="row">
                <div className="col">
                  <p>Enter your info to calculate your BMI</p>
                  <select onChange={this.updateSystem} className="form-control">
                    <option value="imperial">Imperial</option>
                    <option value="metric">Metric</option>
                  </select>
                </div>
              </div> 
              {this.state.system === "imperial" &&
                <Fragment>
                  <div className="row">
                    <div className="col">
                      <input className="form-control" placeholder="Feet" onChange={this.updateFeet} />
                    </div>
                    <div className="col">
                      <input className="form-control" placeholder="Inches" onChange={this.updateInches} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input className="form-control" placeholder="Pounds" onChange={this.updateLbs} />
                    </div>
                  </div>
                </Fragment>
              }
              {this.state.system === "metric" &&
                <Fragment>
                  <div className="row">
                    <div className="col">
                      <input className="form-control" placeholder="Centimeters" onChange={this.updateCM} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input className="form-control" placeholder="Kilograms" onChange={this.updateKG} />
                    </div>
                  </div>
                </Fragment>
              } 
              <button className="btn btn-primary" onClick={this.calculateBMI}>Calculate</button>
              {this.state.bmi &&
                <h1>{Math.round(this.state.bmi * 10) / 10}</h1>
              }
            {this.state.comment &&
              <h2>You are {this.state.comment}</h2>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
