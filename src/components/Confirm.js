import React, { Component } from 'react';
import {List ,ListItem,ListItemText} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class Confirm extends Component {
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
      // <MuiThemeProvider>
        <React.Fragment>
            <AppBar >
            <Typography variant="h6" color="inherit">
            Confirm User Details
            </Typography>
            </AppBar>
            <List>
                <ListItem>
                    <ListItemText primary="First Name" secondary={firstName}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Last Name" secondary={lastName}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Email" secondary={email}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Occupation" secondary={occupation}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="City" secondary={city}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Bio" secondary={bio}/>
                </ListItem>
                
            </List>
                        <br/>
            <Button variant="contained" color="primary" onClick={this.continue}>
            Confirm & Continue
            </Button> 
            <Button variant="contained" color="default" onClick={this.back}>
            Back
            </Button>

        </React.Fragment>
      // </MuiThemeProvider>
    );
  }
}

export default Confirm;
