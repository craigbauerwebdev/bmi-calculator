import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bmi: null,
            error: null,
            comment: null
        }
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    componentDidUpdate = (prevProps) => { 
        console.log("UPDATED!!!!");
        //check for the system change
        if(prevProps.system !== this.props.system) {
            this.setState({
                bmi: null,
                comment: null,
                error: null
            })
        }

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

    resetForm = () => {
        this.props.clearForm();
        this.setState({
            bmi: null,
            comment: null,
            error: null
        });
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
                <p><a onClick={this.resetForm} href="#">reset form</a></p>
            </div>
        </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        system: state.system,
        weight: state.weight,
        height: state.height
    }
}

export default connect( mapStateToProps, {} )(Result);
//export default Result;
