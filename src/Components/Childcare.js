import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    margintop: theme.spacing(25),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
          label=""
          id="outlined-size-small"
          defaultValue="PARENT NAME: "
          variant="outlined"
        />
        <TextField
          label=""
          id="outlined-size-small"
          defaultValue="PARENT MOBILE NUMBER: "
          variant="outlined"
        />
        <TextField
          label=""
          id="outlined-size-small"
          defaultValue="EMAIL ID: "
          variant="outlined"
        />
        <TextField
          label=""
          id="outlined-size-small"
          defaultValue="ID: "
          variant="outlined"
        />
    </form>
  );
}
