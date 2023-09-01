import * as React from 'react';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyAvtar } from '../avtar/MyAvtar.com';
import { MyCheckBox } from '../CheckBox/MyCheckBox.com';
import { MySlider } from '../Slider/MySlider.com';
import { MyToggleButton } from '../ToggleButton/MyToggleButton.com';
import { MyProgress } from '../../Progress/MyProgress.com';
import { MyFlotingActionButton } from '../FlotingActionButton/MyFlotingActionButton.com';
import { MyBadge } from '../Badge/MyBadge.com';
import { MyFragment } from '../fragment/MyFragment.com';
import { MyUseStateHook } from '../hook/MyUseStateHook.com';

export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="PROPS" value="1" />
            <Tab label="ELEMENTS" value="2" />
            <Tab label="MUI ELEMENTS" value="3" />
            <Tab label="FRAGMENT" value="4" />
            <Tab label="HOOKS" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><MyProps/></TabPanel>
        <TabPanel value="2"><H1/></TabPanel>
        <TabPanel value="3">

<MyButton/><br />
<MyRatings/><br />
<MyAvtar/><br />
<MyCheckBox/><br />
<MySlider/><br />
<MyToggleButton/><br /><br />
<MyProgress/><br />
<MyFlotingActionButton/><br /><br />
<MyBadge/>
        </TabPanel>

        <TabPanel value="4">
          <MyFragment/>
        </TabPanel>
        <TabPanel value="5">
<h1>hookes</h1>
<MyUseStateHook/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}