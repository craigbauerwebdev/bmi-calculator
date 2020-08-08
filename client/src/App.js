import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: null,
      comment: null,
      system: "imperial",
      feet: null,
      inches: null,
      cm: null,
      height: null,
      weight: null
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
      height: null,
      weight: null
    });
  }

  updateFeet = (e) => {
    this.setState({
      feet: e.target.value
    });
    this.updateHeight();
  }

  updateInches = (e) => {
    this.setState({
      inches: e.target.value
    });
    this.updateHeight();
  }

  updateCM = (e) => {
    this.setState({
      cm: e.target.value
    });
  }

  updateHeight(e) {
    const {system, feet, inches} = this.state;
    if(system === "imperial") {
      const 
        height = (feet * 12) + inches;
      console.log(height, "inches");
      const h = (height * 2.54) / 100; // converted to meters from inches
      console.log(h, "meters");
      // use this.state.system to decide what to convert to
      this.setState({
        height: h
      })
    }
    //if(system === "metric")
  }
  updateWeight(e) {
    const w = e.target.value / 2.2046226218; // converted to kg from lbs
    // use this.state.system to decide what to convert to
    this.setState({
      weight: w
    })
  }

  calculateBMI() {
    const { weight, height } = this.state;
    let 
      bmi = weight / (height ** 2);
    console.log(bmi);
    this.setState({
      bmi
    });
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
                      <input className="form-control" placeholder="Pounds" onChange={this.updateWeight} />
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
