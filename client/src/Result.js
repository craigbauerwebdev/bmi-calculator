import React, { Component, Fragment } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bmi: null,

    }
    this.calculateBMI = this.calculateBMI.bind(this);
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
                if (!isNaN(this.state.bmi)) {
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
        <div className="result"> 
            <button className="btn btn-primary" onClick={this.calculateBMI}>Calculate</button>
            {(this.state.bmi && this.state.bmi !== NaN) &&
                <h1>{Math.round(this.state.bmi * 10) / 10}</h1>
            }
            {this.state.comment &&
                <h2 className="comment">{this.state.comment}</h2>
            }
            {this.state.error &&
                <p style={{ color: "red" }}>{this.state.error}</p>
            }
        </div>
      </Fragment>
    );
  }
}

export default Result;
