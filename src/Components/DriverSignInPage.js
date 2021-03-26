import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DriverSignIn from './DriverSignIn'
import BGDrive from './BgDrive'

const App = () => (
    <MuiThemeProvider>
      <BGDrive/>
    </MuiThemeProvider>
  );
  
  export default App;