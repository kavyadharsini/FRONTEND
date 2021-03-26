import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./UserSignIn.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SignInImage from './Images/41.jpg';
import { Form, Input, Button } from "antd";
import { locales } from "moment";
import image from './Images/331.jpg';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import RoomIcon from '@material-ui/icons/Room';
//import ForumIcon from '@material-ui/icons/Forum';
//import DriveEtaIcon from '@material-ui/icons/DriveEta';
//import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
//import Icon from '@material-ui/core/Icon';

const stylePaper = {
    //backgroundimage: `url(${SignInImage})`,
    height: '590px',
    width: '400px',
    //background: '#f1d1cf',
    background: '#fda488',
    //background: 'transparent',
    backgroundimage: `url(${image})`,
    position: 'relative',
    marginLeft:'65%',
    marginTop: '0px',
    border:'blue'
};

const styleText = {
    marginLeft: '100px',
    marginTop: '-50px',
    fontSize: '1.71429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize'
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
          role: 'user'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        axios
          .post("https://api.crossfire37.hasura-app.io/signup", {
            "user" : {
              "provider" : "username",
              "data": {
                "username": values.firstname,
                "password": values.password
              }
            },
            "role": values.role,
            "firstname": values.firstname,
            "lastname":  values.lastname
            }
          )
          .then(response => {
            console.log(response);
            localStorage.setItem('AuthToken' ,response.data.auth_token)
            this.setState({ res: response.data });
            this.setState({ res_received: true });
          })
          .catch(error => {
            alert("ERROR: User name already exists!");
            console.log(error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful! Please go to "Ride" to book your ride.');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginLeft:'0px', marginBottom: '50px'}}>
              <Avatar src={SignInImage} size='80px' />
              <div style={styleText}>
                SIGN UP
              </div>
          </div>
          <FormItem>
            {getFieldDecorator("firstname", {
              rules: [{ required: true, message: "Enter your First Name!" }]
            })(<Input placeholder="First Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("lastname", {
              rules: [{ required: true, message: "Enter your Last Name!" }]
            })(<Input placeholder="Last Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("Age", {
              rules: [{ required: true, message: "Enter your age!" }]
            })(<Input type="number" placeholder="Age" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Enter your E-mail!"
                }
              ]
            })(<Input placeholder="Email" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Enter your Password!" },
                { min: 8, message: "Minimum password length is 8 characters" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("Number", {
              rules: [
                { required: true, message: "Enter your Aadhar Number!" },
                { min: 12, message: "The length should be 12" }
              ]
            })(<Input type="password" placeholder="Aadhar Number" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
            
            >
              SIGN UP
            </Button>
            Or <a href="/Login">LOGIN</a>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
