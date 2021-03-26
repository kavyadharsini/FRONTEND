import React from 'react';
import Image from './Images/71.jpg';
import UserSignIn from './UserSignIn';
import Home from './Home';
import { ActionHome } from 'material-ui/svg-icons';

const styleDiv = {
    height: '646px',
    width: '100%',
    backgroundImage: `url(${Image})`,
    //background: 'pink',
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
                <Home/>
                </div>        
            </div>
       </div>
    </div>
    </div>

);

    export default bg;


