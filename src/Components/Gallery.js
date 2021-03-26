import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image from './Images/download.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}component="span">
          Upload photos
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Card className={classes.root}>
     <CardActionArea>
       <CardMedia
         component="img"
         alt="Cab"
         height="140"
         width="200"
         image="./Image"
         title="Cabs"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
           SpotRider cabs
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           This is the best ever cabs which has the muliple facilities and comfort.
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActionArea>
       <CardMedia
         component="img"
         alt="Cab"
         height="140"
         width="200"
         image="./Image"
         title="Cabs"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
           SpotRider cabs
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           This is the best ever cabs which has the muliple facilities and comfort.
         </Typography>
       </CardContent>
     </CardActionArea>

     <CardActions>
       <Button size="small" color="primary">
         Share
       </Button>
       <Button size="small" color="primary">
         Learn More
       </Button>
     </CardActions>
   </Card>
    </div>
  );
}
