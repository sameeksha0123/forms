import React, { Component } from 'react';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui'
// import {AppBar, TextField, RaisedButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class FormPersonalDetails extends Component {
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const {values, handleChange} =this.props;
    return (
      // <MuiThemeProvider>
        <React.Fragment>
            <AppBar >
            <Typography variant="h6" color="inherit">
            Enter Personal Details
            </Typography>
            </AppBar>
            <TextField
            placeholder="Enter Your Occupation"
            label="Occupation" 
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            />
            <br/>
            <TextField
            placeholder="Enter Your City"
            label="City" 
            onChange={handleChange('city')}
            defaultValue={values.city}
            />
            <br/>
            <TextField
            placeholder="Enter Your Bio"
            label="Bio" 
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            />
            <br/>
            <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
            </Button> 
            <Button variant="contained" color="default" onClick={this.back}>
            Back
            </Button> 

        </React.Fragment>
      // </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
