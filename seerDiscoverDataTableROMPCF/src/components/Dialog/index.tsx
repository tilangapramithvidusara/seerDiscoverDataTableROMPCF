import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DyanamicTable from '../Table/DyanamicTable';
// const DyanamicTable = React.lazy(() => import('../Table/DyanamicTable'));
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

export interface SimpleDialogProps {
  open?: boolean;
  selectedValue?: string;
  openSettingPopup: boolean, 
  setOpenSettingPopup: (value: boolean) => void;
  onClose?: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, setOpenSettingPopup, openSettingPopup } = props;

  const handleClose = () => {
    // onClose(selectedValue);
    setOpenSettingPopup(false)
  };

  const handleListItemClick = (value: string) => {
    // onClose(value);
    setOpenSettingPopup(false)
  };

  const onChange = (key: string) => {
    console.log("Current Tab:",key);
  };

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Parameters',
      children: <DyanamicTable handleClose={handleClose} />,
    },
    {
      key: '2',
      label: 'Rates',
      children: '  ',
    },
  ];

  return (
    <Dialog 
      onClose={handleClose} 
      open={openSettingPopup}
      sx={{width: '100%'}}
      fullWidth={true}
      maxWidth="md"
      className='custom-modal'
    >
      <DialogTitle className='modal-title'>Settings</DialogTitle>
      <Tabs defaultActiveKey="1" 
      items={tabItems} 
      onChange={onChange} 
      style={{ padding: '12px' }}
      />
    </Dialog>
  );
}