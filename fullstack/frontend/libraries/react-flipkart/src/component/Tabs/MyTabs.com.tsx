import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="mui elemts" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><MyProps/></TabPanel>
        <TabPanel value="2"><H1/></TabPanel>
        <TabPanel value="3">

<MyButton/>
<MyRatings/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}