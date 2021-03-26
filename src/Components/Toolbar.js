import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';
import {Tabs, Tab} from 'material-ui/Tabs';
import Image from './Images/sheet4.jpg'
import image from './Images/42.jpg'
import { blue200, blue500, fullBlack, green400 } from 'material-ui/styles/colors';
import { green600 } from 'material-ui/styles/colors';
import { darkBlack } from 'material-ui/styles/colors';
import { ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import { pink500 } from 'material-ui/styles/colors';
import pinDrop from 'material-ui/svg-icons/maps/pin-drop';
import { pink600 } from 'material-ui/styles/colors';
import { blueA100 } from 'material-ui/styles/colors';
//import Icon from '@material-ui/core/Icon';

const styleDiv = {
  padding: '0px 127px',
  paddingRight: '0vw',
  paddingLeft: '0vw',
};
const styleToolbar = {
  //background: '#1b63c5',
  //background: '#9bd675',
  background: '#486ed9',
 //background: '#c1ed7f',
  backgroundImage: `url(${Image})`,
  color: 'pink',
  padding: '0px',
  paddingRight: '0vw',
  paddingLeft: '0vw',
  height: '100px',
};

const stylespot = {
  margin: '0px', 
  paddingRight: '0vw',
  paddingLeft: '0vw',
  background: '#dc8299',
  background: '#b32e50',
  color: '#9ecaf4',
  textTransform: 'bold'
};

const styleTabs = {
  marginLeft: '28px',
  background: 'violet',
};

const StyleTab = {
  TabLeft : {
  fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif' ,
  padding: '0px 10px',
  borderTop: '4px',
   background: '#3f4c2c',
   background: '#2e042e',
   background:'#15094e',
   background: '#5aadee',
   background:'#320231',
   background:'#3149C4',
  // background: '#dca37b',
   color: '#adce9c',
   color: 'white',
   fontWeight: '200',
   fontSize: '100px',
   lineHeight: '20px',
   textTransform: 'capitalize',
  },
  TabRight: {
    padding: '0px',
    margin: '0px',
    borderTop: '4px',
    background: '#6C3D80',
    color: '',
  },
};

const styleInkBar = {
  background:'#C4DCF2',
  background:''
};
function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

export default class ToolbarExamplesSimple extends React.Component {
  render() {
    return (
      <div style={styleDiv}>
        <Toolbar style={styleToolbar}>
          <ToolbarGroup>
            <FlatButton 
              label='SPOTRIDER' 
              hoverColor='#8fec5e'
              hoverColor='#653294'
              style= {stylespot}
              href="/"
            /> 
          </ToolbarGroup>
          <ToolbarGroup>
            <FlatButton label="Home"hoverColor='#653294' style={StyleTab.TabLeft} href="/Home"/>      
            <FlatButton label="Inbox" hoverColor='#653294' style={StyleTab.TabLeft} href="/About" />
            <FlatButton label="Gallery" hoverColor='#653294' style={StyleTab.TabLeft} href="/Grid" />
            <FlatButton label="Contact" hoverColor='#653294' style={StyleTab.TabLeft} href="/Contact" />
            <FlatButton label="Drive" hoverColor='#653294' style={StyleTab.TabLeft} href="/DriverSignIn"/>
            <FlatButton label="Sign_Up" hoverColor='#653294' style={StyleTab.TabLeft} href="/UserSignIn" />
            <FlatButton label="Login" hoverColor='#653294' style={StyleTab.TabLeft} href="/Login" />
            <FlatButton label="Account" hoverColor='#653294' style={StyleTab.TabLeft} href="/Logout" />
          </ToolbarGroup>
        </Toolbar>
      </div>  
    );
  }
}
