import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { // action creators
  updateLbs, 
  updateSystem, 
  updateFeet, 
  updateInches, 
  updateCentimeters,
  updateKilograms,
  updateHeight,
  updateWeight
} from './redux/actions';

//for testing metric
//height: 183cm  oe 1.8288 meters
//weight: 100kg

class AppRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: null,
      comment: null,
      system: "imperial",
      //feetClass: null,
      //inchesClass: null,
      //metersClass: null,
      //lbsClass: null,
      //kgClass: null
    }
    this.updateSystem = this.updateSystem.bind(this);
    /* this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);*/
    this.calculateBMI = this.calculateBMI.bind(this); 
  }

  componentDidUpdate = (nextProps) => { 
    this.updateWeight();
    this.updateHeight();
    //rce condition with redux where nextProps is not updated when this function runs - try thunk
    /* if (nextProps.feet && nextProps.inches || nextProps.cm) {
      console.log("component did update && passed");
      this.updateHeight(); 
    }
    if (nextProps.lbs || nextProps.kg) {
      console.log("component did update && passed");
      this.updateWeight();
    } */
  }

  updateSystem(e) {
    this.props.updateSystem(e.target.value);
    this.props.updateFeet(null); //reset lbs on system change
    this.props.updateInches(null);
    this.props.updateLbs(null);
    this.props.updateKilograms(null);
    this.props.updateCentimeters(null);

    this.setState({
      comment: null,
      bmi: null,
      error: null
      /* feet: null,
      inches: null,
      cm: null,
      kg: null,
      lbs: null,
      height: null,
      weight: null, */
      //feetClass: null, // reste classes when system updates
      //inchesClass: null,
      //metersClass: null,
      //lbsClass: null,
      //kgClass: null
    });
  }


  updateFeet = (e) => {
    this.props.updateFeet(e.target.value);
  }

  updateInches = (e) => {
    this.props.updateInches(e.target.value);
  }

  updateCM = (e) => {
    this.props.updateCentimeters(e.target.value);
  }

  updateLbs = (e) => {
    this.props.updateLbs(e.target.value);
  }

  updateKG = (e) => {
    this.props.updateKilograms(e.target.value);
  }

  updateHeight() {
    setTimeout(() => {
      const 
        {system, feet, inches, cm} = this.props;
      let
        height;
      if(system === "imperial") {
          const 
            totalHeight = (feet * 12) + parseFloat(inches);
          height = (totalHeight * 2.54) / 100; // converted to meters from inches
      }
      if(system === "metric") {
        height = cm / 100;
      }
      this.props.updateHeight(height);
    }, 500);
  }
  updateWeight(e) {
    setTimeout(() => {
      const 
        {system, kg, lbs} = this.props;
      let
        weight;
      if(system === "imperial") { 
          weight = lbs / 2.2046226218;
          this.props.updateWeight(weight);
      }
      if(system === "metric") {
        weight = kg;
        this.props.updateWeight(weight);
      }
    }, 500);
  }

  calculateBMI() {
    const { weight, height } = this.props;
    if (weight &&
      !isNaN(weight) &&
      weight !== "" &&
      weight !== "0" &&
      !isNaN(height) &&
      height &&
      height !== "" &&
      height !== "0") {
      this.setState({
        error: null
      });
      let 
        bmi = weight / (height ** 2);
      this.setState({
        bmi
      }, () => {
        if(!isNaN(this.state.bmi)) {
          if (bmi < 18.5) {
            this.setState({
              comment: 'You are Underweight'
            });
          } else if (bmi < 25) {
            this.setState({
              comment: 'You are Normal'
            });
          } else if (bmi < 30) {
            this.setState({
              comment: 'You are Overweight'
            });
          } else {
            this.setState({
              comment: 'You are Obese'
            });
          }
        }    
      });
    } else { 
      return (
        this.setState({
          error: "Please check the form for errors and try again :(",
          bmi: null,
          comment: null
        })
      );
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
              {this.props.system === "imperial" &&
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
              {this.props.system === "metric" &&
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
              {(this.state.bmi && this.state.bmi !== NaN) &&
                <h1>{Math.round(this.state.bmi * 10) / 10}</h1>
              }
            {this.state.comment &&
              <h2 className="comment">{this.state.comment}</h2>
            }
            {this.state.error &&
              <p style={{color: "red"}}>{this.state.error}</p>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        system: state.system,
        lbs: state.lbs,
        feet: state.feet,
        inches: state.inches,
        cm: state.cm,
        kg: state.kg,
        weight: state.weight,
        height: state.height
    }
}
export default connect(
  mapStateToProps,
  { updateLbs, 
    updateSystem, 
    updateFeet, 
    updateInches, 
    updateCentimeters, 
    updateKilograms, 
    updateWeight, 
    updateHeight }
)(AppRedux);