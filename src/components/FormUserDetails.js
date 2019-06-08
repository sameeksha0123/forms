import React, { Component } from 'react';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui'
// import {AppBar, TextField, RaisedButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class FormUserDetails extends Component {
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
            Enter User Details
            </Typography>
            </AppBar>
            <TextField
            placeholder="Enter Your First Name"
            label="First Name" 
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <br/>
            <TextField
            placeholder="Enter Your Last Name"
            label="Last Name" 
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            />
            <br/>
            <TextField
            placeholder="Enter Your Email"
            label="Email" 
            onChange={handleChange('email')}
            defaultValue={values.email}
            />
            <br/>
            <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
            </Button> 

        </React.Fragment>
      // </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
