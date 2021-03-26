import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(41),
    marginRight: theme.spacing(1),
    width: '25%',
    paddingTop: '100px',
    paddingLeft: '25px',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: "center"
  },
}));
const styleDiv = {
   // backgroundImage: `url(${Image1})`,
    height: '100px',
    width: '100%',
   // background: 'skyblue',
    paddingRight: '0vw',
    paddingLeft: '15vw'
};

const styleTextDiv = {
    padding: '0px 10px',
    padding: '0 6.6vw', 
   // background: 'lightblue',
    //background: '#c1ed7f',
   // background:'#5aadee',
    //backgroundImage: `url(${Ima})`,
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
    fontSize: '20px',
    color:'brown',
    lineHeight: '60px',
    letterSpacing: '-.03em',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: "center"
};

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    
  
    <form className={classes.container} noValidate>
       <div>
        <div  style={styleDiv}>
            <div style={styleTextDiv}>
                <div style={style}>
                    <h1 style={stylePA}>ENTER THE DATE AND TIME FOR TRAVELLING!!</h1>
                    
                    <div>
                     </div>       
                </div>
            </div>
        </div>
        </div>
        <TextField
        id="datetime-local"
        label=""
        weight='500'
        type="datetime-local"
        defaultValue="Travelling date and time:"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button 
             variant="contained"  
             color="primary" 
             paddingTop='100px' 
             paddingBottom='500px'
             size="medium" 
             href="/Home">
               submit
       </Button>
    </form>
  );
}
