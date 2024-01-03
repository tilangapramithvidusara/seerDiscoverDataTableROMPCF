import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { removeDuplicates } from "../../Utils/commonFunc.utils";
import { CommonUtils } from "../../Utils/SidePaneUtils/EstimateAverageRate/CommonUtils";
import { Button } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type Anchor = "top" | "left" | "bottom" | "right";

// function createData(
//   name: string,
//   value: number,
// ) {
//   return { name, value };
// }

export default function SwipeableTemporaryDrawer({
  anchor,
  isOpenSideDrawer,
  data,
  setIsOpenSideDrawer,
  cellDataForSidePane,
}: {
  anchor: Anchor;
  isOpenSideDrawer: boolean;
  setIsOpenSideDrawer: any;
  data: any;
  cellDataForSidePane: any;
}) {
  const selectorForSidePane = useSelector((state: any) => state?.report);
  const [showCellData, setShowCellData] = React.useState<any>();
  const [sidePanelData, setSidePaneData] = React.useState<any>();
  const [sidePaneTitle, setSidePaneTitle] = React.useState<any>();

  const [tabledata, setTableData] = React.useState<any>([{ name: "" }]);

  React.useEffect(() => {
    console.log("cellDataForSidePane 1", cellDataForSidePane);
    console.log("cellDataForSidePane 2", selectorForSidePane);
    const columnValue = cellDataForSidePane?.columnId?.replace(/\//g, "");
    setSidePaneTitle(
      `${cellDataForSidePane?.nameCategory} - ${cellDataForSidePane?.name} - ${cellDataForSidePane?.columnId}`
    );

    const data: any = CommonUtils[cellDataForSidePane?.table]?.[
      cellDataForSidePane?.nameCategory
    ]?.[cellDataForSidePane?.name]?.(selectorForSidePane, columnValue);
    console.log("Common Utl Result Data", data);
    if (data) setTableData(data);
  }, [cellDataForSidePane]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: isOpenSideDrawer,
  });

  const onClickTableRow = (e: any, type: any) => {
    setTableData((prev: any) => {
      return prev?.map((x: any) => {
        if (e?.id === x?.id) {
          return {
            ...x,
            collapse: type,
          };
        } else {
          return x;
        }
      });
    });
  };
  
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      setIsOpenSideDrawer(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      // sx={{ width: '650' }}

      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TableContainer component={Paper}>
        <div className="drawer-heading">
          <div>
            <h1 className="title"> {cellDataForSidePane?.nameCategory}</h1>
            <span className="sub-title">
              {cellDataForSidePane?.name +
                " - " +
                cellDataForSidePane?.columnId}
            </span>
          </div>
          <div>
            <span className="close" onClick={() => setIsOpenSideDrawer(false)}>
              &#x2716;
            </span>
          </div>
        </div>
        <div className="sidepane">
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              {/* <TableRow style={{ backgroundColor: "#015BA1" }}>
              <TableCell style={{color: "white", fontSize: "15px"}}>Title</TableCell>
              <TableCell style={{color: "white", fontSize: "15px"}} align="left">Value</TableCell>
              </TableRow> */}
            </TableHead>
            <TableBody>
              {tabledata?.map((row: any) => (
                <>
                  <TableRow
                    key={row.name}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    style={{ backgroundColor: row?.rowColor }}
                    // onClick={(e) => onClickTableRow(e)}
                  >
                    {row?.header ? (
                      row?.collapse ? (
                        <>
                          <ExpandMoreIcon
                            onClick={(e: any) => onClickTableRow(row, false)}
                            className="collapse-icon collapse-expand-icon"
                          >
                            Expand
                            </ExpandMoreIcon>
                          <TableCell>{row.name}</TableCell>
                        </>
                      ) : (
                        <ExpandLessIcon
                            onClick={(e: any) => onClickTableRow(row, true)}
                            className="collapse-icon collapse-expand-icon"
                        >
                          Collapse
                        </ExpandLessIcon>
                      )
                    ) : (
                      <> </>
                    )}
                    {!row?.collapse ? (
                      <>
                        <TableCell>{row.name}</TableCell>

                        <TableCell>{row.value}</TableCell>
                        {/* <TableCell align="right">{row.value}</TableCell> */}
                      </>
                    ) : (
                      <></>
                    )}
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </Box>
  );

  console.log("rw ==> ", data);

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
