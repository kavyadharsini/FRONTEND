import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/Chat';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import CommuteIcon from '@material-ui/icons/Commute';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      backgroundColor='pink'
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  backgroundColor: 'pink',
  color: 'white'
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    backgroundColor:'pink300'
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="white"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<AccountCircleIcon />} label="ACCOUNT" aria-label="Account" href="/Logout" {...a11yProps(0)} />
          <Tab icon={<DriveEtaIcon />} label="DRIVE" aria-label="Drive" href="/DriverSignIn" {...a11yProps(1)} />
          <Tab icon={<CommuteIcon />} label="BOOK A CAB" aria-label="Book you cab" href="/Destination" {...a11yProps(2)} />
          <Tab icon={<ChildCareIcon />} label="CHILD CARE" aria-label="shopping" href="/ChildCare" {...a11yProps(3)} />
          <Tab icon={<CalendarTodayIcon/>} label="CALENDAR" aria-label="help" href="/Calendar" {...a11yProps(4)} />
          <Tab icon={<AddAPhotoIcon/>} label="GALLERY" aria-label="up" href="/Gallery" {...a11yProps(5)} />
          <Tab icon={<ForumIcon/>} label="FORUM" aria-label="down" href="/About" {...a11yProps(6)} />
          <Tab icon={<LocationOnIcon/>} label="LOCATION ON" aria-label="down" href="/Agree" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        CHECK YOU ACCOUNT
      </TabPanel>
      <TabPanel value={value} index={1}>
        SIGN IN TO DRIVE
      </TabPanel>
      <TabPanel value={value} index={2}>
        LETS BOOK A CAB
      </TabPanel>
      <TabPanel value={value} index={3}>
        PARENTS CAN LOOK AFTER THEIR CHILD DURING TRAVELLING
      </TabPanel>
      <TabPanel value={value} index={4}>
      LET SET THE TIME AND DATE IN THE CALENDAR
      </TabPanel>
      <TabPanel value={value} index={5}>
        YOU CAN VIEW AND UPLOAD THE PHOTOS OF OUR CAB AND CUSTOMERS
      </TabPanel>
      <TabPanel value={value} index={6}>
        LETS US CHAT TO FIND THE SOLUTION TO QUERIES. WE ARE AVAILABLE FOR 24 HOURS.
      </TabPanel>
      <TabPanel value={value} index={7}>
        AGREE TO ON YOUR LOCATION SO THAT WE CAN GIVE A GOOD ACCESS TO THE WEBSITE.
      </TabPanel>
    </div>
  );
}
