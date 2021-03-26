import React from 'react';
import { Button } from "antd";
import { yellow100 } from 'material-ui/styles/colors';

const About = () => (
    <div>
      <h1>
        If any queries please feel free to contact us........
     </h1> 
        <h2>
       This is your Spot_RiderCabs.
       <Button variant="contained" color="primary" href="/Home">
        Help
      </Button>
        </h2>

        <h3>
          Email: spotridercabs@gmail.com
          </h3>
        <h3>
          Phone Number: 7845123698
        </h3>
    </div>
);

export default About;