import React from 'react';
import Image from './Images/d.jpg';
//import DriverSignUpHome from './DriverSignUpHome';
import Image1 from './Images/d.jpg';
import Ima from './Images/78.jpg';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styleDiv = {
    backgroundImage: `url(${Image1})`,
    height: '200px',
    width: '100%',
    background: 'skyblue',
    paddingRight: '0vw',
    paddingLeft: '0vw'
};

const styleTextDiv = {
    padding: '0 6.6vw', 
    background: 'lightblue',
    background: '#c1ed7f',
   // background:'#5aadee',
    backgroundImage: `url(${Ima})`,
    height: '200px',
    width: '100%',
};

const style = {
    paddingTop: '50px',
    paddingBottom: '0px',
    marginBottom: '10px',
};

const stylePA = {
    margin: '0px',
    fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif' ,
    fontWeight: '400px',
    fontSize: '60px',
    lineHeight: '60px',
    letterSpacing: '-.03em',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: "center"
};

const stylePB = {
    fontFamily: 'ff-clan-web-pro, Helvetica Neue, Helvetica, sans-serif ',
    fontWeight: '200',
    fontSize: '45px',
    lineHeight: '60px',
    letterSpacing: '-.03em',
    margin: '10px',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: "center"
};

const backgroundImage = {
    backgroundImage: `url(${Image})`,
    height: '841px',
    width: '100%',
    paddingRight: '0vw',
    paddingLeft: '0vw',
    margin: '0px'
};

function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }
const SvgIconExampleSimple = () => (
    <div>
        <div  style={styleDiv}>
            <div style={styleTextDiv}>
                <div style={style}>
                    <h1 style={stylePA}>WELCOME TO SPOTRIDER_CABS</h1>
                    <h2 style={stylePB}>Let's start booking cabs</h2>
                    <div>
                    
                    </div>        
                </div>
            </div>
        </div>
        <div style={backgroundImage}>
        </div>
    </div>
  );

  export default SvgIconExampleSimple;
  