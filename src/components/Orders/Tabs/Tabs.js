import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Bonus from '../Bonus';
import Dismissal from '../Dismissal';
import Fine from '../Fine';
import Memo from '../Memo';
import Move from '../Move';
import Recruit from '../Recruit';
import Registry from '../Registry';

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

  const redirect = () => {
    setValue(0);
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
            label="Реестр"
            // eslint-disable-next-line
            {...a11yProps(0)}
          />
          <Tab
            label="Прием"
            // eslint-disable-next-line
            {...a11yProps(1)}
          />
          <Tab
            label="Перевод" // eslint-disable-next-line
            {...a11yProps(2)}
          />
          <Tab
            label="Увольнение"
            // eslint-disable-next-line
            {...a11yProps(3)}
          />
          <Tab
            label="Премия"
            // eslint-disable-next-line
            {...a11yProps(4)}
          />
          <Tab
            label="Штраф"
            // eslint-disable-next-line
            {...a11yProps(5)}
          />
          <Tab
            label="Сл.Записка, Заявление"
            // eslint-disable-next-line
            {...a11yProps(6)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Registry />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Recruit redirect={redirect} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Move redirect={redirect} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Dismissal redirect={redirect} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Bonus redirect={redirect} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Fine redirect={redirect} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Memo redirect={redirect} />
      </TabPanel>
    </div>
  );
}
