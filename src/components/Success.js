import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class Success extends Component {
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
      const {values:{firstName, lastName, email, occupation, city, bio}} =this.props;
    return (
      
        <React.Fragment>
            <AppBar >
            <Typography variant="h6" color="inherit">
           Success
           </Typography>
            </AppBar>
            <h1>Thank You For Your Submission</h1>
            <p> You will get an email with futher instruction</p>

                        <br/>
            {/* <Button variant="contained" color="primary" onClick={this.continue}>
            Confirm & Continue
            </Button> 
            <Button variant="contained" color="default" onClick={this.back}>
            Back
            </Button> */}

        </React.Fragment>
      
    );
  }
}

export default Success;
