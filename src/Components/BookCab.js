import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./Example.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DriverImage from './Images/driver.jpg';
import { Form, Input, Button } from "antd";
//import { locales } from "moment";
import TextField from '@material-ui/core/TextField';

const stylePaper = {
  height: '320px',
  width: '375px',
  background: '#f1d1cf',
  background: '#fda488',
  position: 'fixed',
  marginLeft:'20px',
  marginTop: '20px'
};

const styleText = {
    marginLeft: '20px',
    marginTop: '20px',
    fontSize: '1.21429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          role: 'driver'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        alert('Your booking is done. You will get an notification about the car and driver contact...')
        axios
         .post("https://api.crossfire37.hasura-app.io/signup", 
          {
            "user": {
            "provider": "username",
            "data": {
            "username": values.firstname,
            "password": values.password
            }
          },
           "role": values.role,
           "firstname": values.firstname,
           "lastname": values.lastname,
           "regno": values.vehicleregistrationnumber,
           "type": values.vehicletype,
           "capacity": values.vehiclecapacity,
           "city": values.city
         }
          )
           .then(response => {
           console.log(response);
           localStorage.setItem('AuthToken' ,response.data.auth_token)
           this.setState({ res: response.data });
           this.setState({ res_received: true });
          })
          .catch(error => {
            alert(" Check you mail for confirmation of booking..")
            console.log(error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful!');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginTop: '20px', marginBottom: '20px'}}> 
            <div style={styleText}>
              To find Pick up and Destination of your location: 
              <a href="https://www.google.com/maps"> Google Maps</a>
            </div>
          </div>
          <div>
          </div>
          <FormItem>
            {getFieldDecorator("Starting place", {
              rules: [{ required: true, message: "Pick up location:" }]
            })(<Input placeholder="PickUp Location:" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("Destination location", {
              rules: [{ required: true, message: "Destination location:" }]
            })(<Input placeholder="Destination:" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              
            >
              BOOK YOUR CAB
            </Button>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
