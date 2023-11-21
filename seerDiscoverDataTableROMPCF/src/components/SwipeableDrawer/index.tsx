import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import CostIcon from '@mui/icons-material/MonetizationOn';
// import HourlyRate from '@mui/icons-material/QueryBuilder';
// import Total from '@mui/icons-material/CurrencyExchange';
// import { ListItemSecondaryAction } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import { removeDuplicates } from '../../Utils/commonFunc.utils';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


// function createData(
//   name: string,
//   value: number,
// ) {
//   return { name, value };
// }


export default function SwipeableTemporaryDrawer({
  anchor, isOpenSideDrawer, data, setIsOpenSideDrawer, cellDataForSidePane
}: {
  anchor: Anchor, 
  isOpenSideDrawer: boolean,
  setIsOpenSideDrawer: any,
  data: any,
  cellDataForSidePane: any
  }) {
  
  const selectorForSidePane = useSelector((state: any) => state?.report);
  const [showCellData, setShowCellData] = React.useState<any>();
  const [sidePanelData, setSidePaneData] = React.useState<any>();
  const [sidePaneTitle, setSidePaneTitle] = React.useState<any>();

  const [tabledata, setTableData] = React.useState<any>([
    { name: 'No Data' },
]);
  
  React.useEffect(() => {
    console.log("cellDataForSidePane 1", cellDataForSidePane);
    console.log("cellDataForSidePane 2", selectorForSidePane);
    const columnValue = cellDataForSidePane?.columnId?.replace(/\//g, '');

    if (cellDataForSidePane?.table === "Estimate Avg Rate") {
      setSidePaneTitle(`${cellDataForSidePane?.nameCategory } - ${ cellDataForSidePane?.name } - ${ cellDataForSidePane?.columnId }`)
      if (cellDataForSidePane?.nameCategory === "ANALYSIS & DESIGN") {
        if (cellDataForSidePane?.name === "Analysis and Design") {
          
          const datatoShow = selectorForSidePane?.estimateAverageRateStoreData?.analysisAndDesign;
          console.log("datatoShowdatatoShow", datatoShow);
          console.log("columnValue", columnValue)
          if (columnValue) {
            const baseValue = datatoShow[columnValue]?.baseValue;
            const moduleValue = datatoShow[columnValue]?.moduleValue;
            const resultBase = datatoShow[columnValue]?.resultBase;
            const resultOverideBase = datatoShow[columnValue]?.resultOverideBase;
            const getColumnObject = datatoShow[columnValue];
            console.log("baseValue", baseValue)
            console.log("datatoShow[columnValue]", datatoShow[columnValue])

            const uniqueData_resultOverideModule = removeDuplicates(getColumnObject?.resultOverideModule, 'moduleSeerModuleName');
            const uniqueData_resultModule = removeDuplicates(getColumnObject?.resultModule, 'moduleSeerModuleName');
            const uniqueData_resultBase = resultBase;
            const uniqueData_resultOverideBase = resultOverideBase;
            console.log("uniqueData_resultOverideModule", uniqueData_resultOverideModule)
            const resultOverideModule = uniqueData_resultOverideModule?.map((x: any) => {
              
              return {
                name: "",
                value: x?.moduleSeerModuleName,
                align: "left"
              }
            });

            setTableData([
              { name: "Module Estimate value", value: baseValue, rowColor: "#808080" , align: "left"},
              { name: "Number of Modules", value: uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length, rowColor: "#C5C5C5" , align: "left"},
              { name: "Module Overrides", rowColor: "#C5C5C5" },
              ...resultOverideModule,
              { name: "Requirements Estimate value", value: moduleValue, rowColor:"#808080" , align: "left"},
              { name: "Number of Requirements", value: uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length , rowColor: "#AEAEAE" , align: "left"  },
              { name: "Number of Requirement overrides", value: uniqueData_resultOverideBase?.length , rowColor: "#C5C5C5", align: "left"  },
            ])  
            setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
          }
         
        } else if (cellDataForSidePane?.name === "Customisations (Design)" && columnValue) {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomisationDesignSidePane;
          // setShowCellData(datatoShow[columnValue]);
        } else if (cellDataForSidePane?.name === "Custom Requirements (Design)" && columnValue) {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerRequirementDesignSidePane;
          // setShowCellData(datatoShow[columnValue]);
        } else if (cellDataForSidePane?.name === "Documentation" && columnValue) {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerDocumentationSidePane;
          // setShowCellData(datatoShow[columnValue]);
        } else if (cellDataForSidePane?.name === "Design Review" && columnValue) {
          const datatoShow = selectorForSidePane?.estimageAveRateCustomerDesignReviewSidePane;
          // setShowCellData(datatoShow[columnValue]);
        }
      } else if (cellDataForSidePane?.nameCategory === "BUILD") {
        if (cellDataForSidePane?.name === "Configuration") { 
          const datatoShow = selectorForSidePane?.estimateAverageRateStoreData?.configuration;
          console.log("datatoShowdatatoShow", datatoShow);
          console.log("columnValue", columnValue)
          if (columnValue) {
            const baseValue = datatoShow[columnValue]?.baseValue;
            const moduleValue = datatoShow[columnValue]?.moduleValue;
            const resultBase = datatoShow[columnValue]?.resultBase;
            const resultOverideBase = datatoShow[columnValue]?.resultOverideBase;
            const getColumnObject = datatoShow[columnValue];
            console.log("baseValue", baseValue)
            console.log("datatoShow[columnValue]", datatoShow[columnValue])

            const uniqueData_resultOverideModule = removeDuplicates(getColumnObject?.resultOverideModule, 'moduleSeerModuleName');
            const uniqueData_resultModule = removeDuplicates(getColumnObject?.resultModule, 'moduleSeerModuleName');
            const uniqueData_resultBase = resultBase;
            const uniqueData_resultOverideBase = resultOverideBase;
            const resultOverideModule = uniqueData_resultOverideModule?.map((x: any) => {
              return {
                name: "",
                value: x?.moduleSeerModuleName
              }
            });
            setTableData([
              { name: "Module Estimate value", value: baseValue, rowColor: "#808080" },
              { name: "Number of Modules", value: uniqueData_resultModule?.length + uniqueData_resultOverideModule?.length, rowColor: "#C5C5C5" },
              { name: "Module Overrides", rowColor: "#C5C5C5" },
              ...resultOverideModule,
              { name: "Requirements Estimate value", value: moduleValue, rowColor: "#AEAEAE" },
              { name: "Number of Requirements", value: uniqueData_resultBase?.length + uniqueData_resultOverideBase?.length , rowColor: "#C5C5C5"  },
              { name: "Number of Requirement overrides", value: uniqueData_resultOverideBase?.length , rowColor: "#C5C5C5"  },
            ]) 
            setShowCellData(datatoShow[cellDataForSidePane?.columnId?.replace(/\//g, '')]);
          }
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

  const onClickTableRow = (e: any) => {
    console.log("ONCLICK", e)
  }
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      // sx={{ width: '650' }}

      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={
        toggleDrawer(anchor, false)
      }
    >
      <TableContainer component={Paper}>
        <div style={{fontSize: '10px', display: 'flex', textAlign:'center', marginLeft: '15px'}}>
          <h1> {sidePaneTitle}</h1>
        </div>
        
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
       
            <TableRow style={{ backgroundColor: "#015BA1" }}>
              <TableCell style={{color: "white", fontSize: "15px"}}>Title</TableCell>
              <TableCell style={{color: "white", fontSize: "15px"}} align="left">Value</TableCell>
              </TableRow>
              
        </TableHead>
        <TableBody>
          {tabledata?.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ backgroundColor: row?.rowColor }}
              onClick={(e) => onClickTableRow(e)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align={ row.align ? row?.align : "right"}>{row.value}</TableCell>
              {/* <TableCell align="right">{row.value}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* <List>
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
        <ListItem key={'moduleEstimateValue'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<HourlyRate />}
            </ListItemIcon>
            <ListItemText primary={`Module Estimate value: ${showCellData?.moduleEstimateValue}`} />
          </ListItemButton>
        </ListItem>
       
        <ListItem key={'subValue'} disablePadding>
          <ListItemSecondaryAction>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Sub Value: ${showCellData?.subValue}`} />
          </ListItemSecondaryAction>
        </ListItem>
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
      </List> */}
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