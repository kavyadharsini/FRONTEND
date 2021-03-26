import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserSignIn from './UserSignIn'
import Bg from './BGsignup'

const App = () => (
    <MuiThemeProvider>
      <Bg/>
    </MuiThemeProvider>
  );
  
  export default App;