import React, { Component, Fragment } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
      comment: null
    }
    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  updateHeight(e) {
    const h = (e.target.value * 2.54) / 100
    this.setState({
      height: h
    })
  }
  updateWeight(e) {
    const w = e.target.value / 2.2046226218; // converted to kg from lbs
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
    })

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

  render() {
    return (
      <Fragment>
        <div className="app">
          <p>Enter your info to calculate your BMI</p>
          <input className="form-control" placeholder="Inches" onChange={this.updateHeight} />
          <input className="form-control" placeholder="Pounds" onChange={this.updateWeight} />
          <button className="btn btn-primary" onClick={this.calculateBMI}>Calculate</button>
          <h1>{Math.round(this.state.bmi * 10) / 10}</h1>
          {this.state.comment &&
            <h2>You are {this.state.comment}</h2>
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
