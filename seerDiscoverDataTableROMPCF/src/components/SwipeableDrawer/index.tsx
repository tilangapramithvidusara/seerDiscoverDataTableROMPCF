import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CostIcon from '@mui/icons-material/MonetizationOn';
import HourlyRate from '@mui/icons-material/QueryBuilder';
import Total from '@mui/icons-material/CurrencyExchange';

import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer({
  anchor, isOpenSideDrawer, data, setIsOpenSideDrawer, cellDataForSidePane
}: {
  anchor: Anchor, 
  isOpenSideDrawer: boolean,
  setIsOpenSideDrawer: any,
  data: any,
  cellDataForSidePane: any
  }) {
  
  const selectorForSidePane = useSelector((state: any) => state?.sidePane?.data);
  const [showCellData, setShowCellData] = React.useState<any>();
  const [sidePanelData, setSidePaneData] = React.useState<any>();

  React.useEffect(() => {
    console.log("cellDataForSidePane 1", cellDataForSidePane);
    console.log("cellDataForSidePane 2", selectorForSidePane);
    


    if (cellDataForSidePane?.table === "Estimate Avg Rate") {
      if (cellDataForSidePane?.nameCategory === "ANALYSIS & DESIGN") {
        if (cellDataForSidePane?.name === "Analysis and Design") {
          const datatoShow = selectorForSidePane?.estimageAveRateAnalysisDesignSidePane;
          setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
        } else if (cellDataForSidePane?.name === "Customisations (Design)") {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomisationDesignSidePane;
          setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
        } else if (cellDataForSidePane?.name === "Custom Requirements (Design)") {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerRequirementDesignSidePane;
          setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
        } else if (cellDataForSidePane?.name === "Documentation") {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerDocumentationSidePane;
          setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
        } else if (cellDataForSidePane?.name === "Design Review") {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerDesignReviewSidePane;
          setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
        }
      }
    }
  }, [cellDataForSidePane]);


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: isOpenSideDrawer,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      setIsOpenSideDrawer(open)
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={
        toggleDrawer(anchor, false)
      }
    >
      <div>
      </div>
      <List>
        <ListItem key={'cost'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<CostIcon />}
            </ListItemIcon>
            <ListItemText primary={`Effort: ${showCellData?.subValue}`} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'hourlyRate'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<HourlyRate />}
            </ListItemIcon>
            <ListItemText primary={`Hourly Rate: ${showCellData?.hourlyRate}`}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={'hoursPerDay'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<HourlyRate />}
            </ListItemIcon>
            <ListItemText primary={`Hours Per Day: ${showCellData?.hoursPerday}`} />
          </ListItemButton>
        </ListItem>
        {/* <ListItem key={'subValue'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Sub Value: ${showCellData?.subValue}`} />
          </ListItemButton>
        </ListItem> */}
        <ListItem key={'Logic'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<CostIcon />}
            </ListItemIcon>
            <ListItemText primary={`Logic: ${showCellData?.logic?.toString().replace("Cost", "effort")}`} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'DataLogic'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<CostIcon />}
            </ListItemIcon>
            <ListItemText primary={`Data with Logic: ${showCellData?.shown}`} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'total'} disablePadding style={{color: 'black'}}>
          <ListItemButton>
            <ListItemIcon>
              {<Total />}
            </ListItemIcon>
            <ListItemText primary={`Total: ${showCellData?.value}`} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </Box>
  );

  console.log('rw ==> ', data);
  

  return (
    <div>
      {/* ['left', 'right', 'top', 'bottom'] */}
      {/* {(['right'] as const).map((anchor) => ( */}
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}