import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DyanamicTable from '../Table/DyanamicTable';
// const DyanamicTable = React.lazy(() => import('../Table/DyanamicTable'));
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ResourceTable from '../Table/ResourceTable';
import ProjectTaskTable from '../Table/ProjectTaskTable';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
      children: <ResourceTable handleClose={handleClose} arrayGeneratorHandler={arrayGeneratorHandler}/>,
    },
    {
      key: '3',
      label: 'Project Tasks',
      children: <ProjectTaskTable handleClose={handleClose} arrayGeneratorHandler={arrayGeneratorHandler}/>,
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
      <IconButton
          aria-label="close"
          className='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 18,
            top: 18,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      <Tabs defaultActiveKey="1" 
      items={tabItems} 
      onChange={onChange} 
      style={{ padding: '0 25px 0 25px' }}
      />
    </Dialog>
  );
}