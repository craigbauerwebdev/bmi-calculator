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
import Result from "./Result"

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
  }

  componentDidUpdate = (prevProps) => { 
    if (prevProps.feet !== this.props.feet || prevProps.inches !== this.props.inches || prevProps.cm !== this.props.cm) {
      console.log("component did update && passed && updated height!!");
      this.updateHeight();
    }
    if (prevProps.lbs !== this.props.lbs || prevProps.kg !== this.props.kg) {
      console.log("component did update && passed && update weight");
      this.updateWeight();
    }
  }

  updateSystem(e) {
    this.props.updateSystem(e.target.value);
    this.clearForm();
  }

  clearForm = () => {
    console.log("clear form");
    this.props.updateFeet(null);
    this.props.updateInches(null);
    this.props.updateLbs(null);
    this.props.updateKilograms(null);
    this.props.updateCentimeters(null);
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

  render() {
    const {height, weight} = this.props;
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
              <Result clearForm={this.clearForm} />
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    //console.log(state);
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