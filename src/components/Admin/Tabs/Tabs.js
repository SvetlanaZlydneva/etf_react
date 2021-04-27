import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Activities from '../Activities/Activities';
import Objects from '../Objects/Objects';
import Positions from '../Positions/Positions';
import Users from '../Users/Users';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      // eslint-disable-next-line
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line
  children: PropTypes.node,
  // eslint-disable-next-line
  index: PropTypes.any.isRequired,
  // eslint-disable-next-line
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Пользователи"
            // eslint-disable-next-line
            {...a11yProps(0)}
          />
          <Tab
            label="Объекты"
            // eslint-disable-next-line
            {...a11yProps(1)}
          />
          <Tab
            label="Виды Деятельности" // eslint-disable-next-line
            {...a11yProps(2)}
          />
          <Tab
            label="Должности"
            // eslint-disable-next-line
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Objects />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Activities />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Positions />
      </TabPanel>
    </div>
  );
}
