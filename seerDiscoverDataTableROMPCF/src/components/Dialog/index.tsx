import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DyanamicTable from '../Table/DyanamicTable';
// const DyanamicTable = React.lazy(() => import('../Table/DyanamicTable'));
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ResourceTable from '../Table/ResourceTable';

export interface SimpleDialogProps {
  open?: boolean;
  selectedValue?: string;
  openSettingPopup: boolean, 
  setOpenSettingPopup: (value: boolean) => void;
  onClose?: (value: string) => void;
  arrayGeneratorHandler?: any
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { setOpenSettingPopup, openSettingPopup, arrayGeneratorHandler } = props;

  const handleClose = () => {
    setOpenSettingPopup(false)
  };

  const handleListItemClick = (value: string) => {
    setOpenSettingPopup(false)
  };

  const onChange = (key: string) => {};

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Parameters',
      children: <DyanamicTable handleClose={handleClose} arrayGeneratorHandler={arrayGeneratorHandler} />,
    },
    {
      key: '2',
      label: 'Resources',
      children: <ResourceTable handleClose={handleClose}/>,
    },
    {
      key: '3',
      label: 'Project Task',
      children: <div style={{ height: '200px' }}></div>,
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