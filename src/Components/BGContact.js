import React from 'react';
import Image1 from './Images/17.jpg';
import UserSignIn from './UserSignIn';
import Contact from './Contact';

const styleDiv = {
    height: '646px',
    width: '100%',
    backgroundImage: `url(${Image1})`,
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
                <Contact/>
                </div>        
            </div>
       </div>
    </div>
    </div>

);

    export default bg;


