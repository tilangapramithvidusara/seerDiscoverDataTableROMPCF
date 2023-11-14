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
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer({
  anchor, isOpenSideDrawer, data, setIsOpenSideDrawer
}: {
  anchor: Anchor, 
  isOpenSideDrawer: boolean,
  setIsOpenSideDrawer: any,
  data: any
}) {
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
      {/* InboxIcon */}
      <List>
        <ListItem key={'type'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Type: ${data?.original?.type}`} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'nameCategory'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Category: ${data?.original?.nameCategory}`} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'name'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Name: ${data?.original?.name}`} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {
          (data?.original?.type === 'Estimate Resource' || data?.original?.type === 'Estimate Resource Milestone') ? (
            <div>
              <ListItem key={'M'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={'Must'}/>
                  {/* <ListItemText primary={`M/S/C: ${data?.original?.['M/S/C']}`} /> */}
                </ListItemButton>
              </ListItem>
              <ListItem key={'MR1'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 1: ${data?.original?.['M_Resource1']}`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'MR2'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 2: ${data?.original?.['M_Resource2']}`} />
                </ListItemButton>
              </ListItem>
              <Divider/>
              <ListItem key={'M/S'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={'Must Should'}/>
                  {/* <ListItemText primary={`M/S/C: ${data?.original?.['M/S/C']}`} /> */}
                </ListItemButton>
              </ListItem>
              <ListItem key={'MSR1'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 1: ${data?.original?.['M/S_Resource1']}`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'MSR2'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 2: ${data?.original?.['M/S_Resource2']}`} />
                </ListItemButton>
              </ListItem>
              <Divider/>
              <ListItem key={'MSC'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={'Must Should Could'}/>
                  {/* <ListItemText primary={`M/S/C: ${data?.original?.['M/S/C']}`} /> */}
                </ListItemButton>
              </ListItem>
              <ListItem key={'MSCR1'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 1: ${data?.original?.['M/S/C_Resource1']}`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'MSCR2'} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={'Resource 1'}/> */}
                  <ListItemText primary={`Resource 2: ${data?.original?.['M/S/C_Resource2']}`} />
                </ListItemButton>
              </ListItem>
              
            </div>
          ) : (
            <div>
              <ListItem key={'M'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={`M: ${data?.original?.M}`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'M/S'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={`M/S: ${data?.original?.['M/S']}`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={'M/S/C'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={`M/S/C: ${data?.original?.['M/S/C']}`} />
                </ListItemButton>
              </ListItem>
            </div>
          )
        }
        <Divider />
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
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