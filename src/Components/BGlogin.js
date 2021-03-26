import React from 'react';
import Image from './Images/download.jpg';
import UserSignIn from './UserSignIn';
import Image1 from './Images/37.jpg';
import Login from './LoginPage';
import Agree from './terms';

const styleDiv = {
    height: '646px',
    width: '100%',
    backgroundImage: `url(${Image1})`,
    //background: 'skyblue',
    paddingRight: '0vw',
    paddingLeft: '0vw'
};

const style = {
    paddingTop: '50px',
    paddingBottom: '0px',
    marginBottom: '0px',
};

const bg = () => (
    <div>
    <div  style={styleDiv}>
       <div  style={styleDiv}>
            <div style={style}>
            
                <div>
                <Login/>
                <Agree/>
                </div>        
            </div>
       </div>
    </div>
    </div>

);

    export default bg;


