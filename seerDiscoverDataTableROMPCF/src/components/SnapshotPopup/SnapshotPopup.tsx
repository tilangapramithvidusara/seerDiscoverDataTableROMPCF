import * as React from 'react';
import { Space, Select, Modal, Input, Popover, Tooltip } from 'antd';
import { useState } from 'react';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';
import StarsIcon from '@mui/icons-material/Stars';
import { green, red } from '@mui/material/colors';
import LabelIcon from '@mui/icons-material/Label';
// import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { finalizeCreated } from '../../Constants/messages';
import { DialogTitle } from '@mui/material';

const { TextArea } = Input;

export default function SnapShotPopup({ snapshots, handleClose, open, onSelect, finalizeSnapshot }: any) {  
  const [selectSnapshot, setSelectSnapshot] = useState(null);
  const finalizeSnapshotData = useSelector((state: any) => state?.snapshot?.finalizeSnapshot);
  const titleContent = (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      Load Snapshot{' '}
      {finalizeSnapshot || finalizeSnapshotData ? (
        <Tooltip title={finalizeSnapshotData?.seer_name || ''}>
          <DialogTitle className="badge">
            {finalizeCreated}
          </DialogTitle>
        </Tooltip>
      ) : (
        ''
      )}
    </div>);

  const description = selectSnapshot
    ? snapshots?.find(
        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
      )?.seer_description
    : '';    
  return (
    // <LabelIcon sx={{ color: green[500] }}/>
    <Modal className='snapshot-modal' open={open} 
      title={titleContent}
      onOk={() => selectSnapshot ? onSelect(selectSnapshot) : alert('Please select the snapshot to load')} onCancel={handleClose}>
      <Space wrap style={{width: '100%'}}>
        <div style={{ 
          display: 'flex-column', 
          fontSize: '13px',
          marginBottom: '10px',
          fontWeight: 700,
          marginTop: '5px'
          }}>
          <div className="mandatory-text-container">
            <div className="mandatory-text-container-row">
              <span>Select Snapshot</span><span><div className="mandatory-text-container-row-red">*</div></span>
            </div>
          </div>
          <Select
            style={{ width: '100%' }}
            onSelect={(e) => {
              setSelectSnapshot(e)
              // onSelect(e)
            }}
            options={snapshots?.map((snapshot: any) => {              
              const isFinalized = (finalizeSnapshot && (finalizeSnapshot?.seer_rominportalsnapshotid == snapshot?.seer_rominportalsnapshotid)) || (finalizeSnapshotData && (finalizeSnapshotData?.seer_rominportalsnapshotid == snapshot?.seer_rominportalsnapshotid));              
              return {
                value: snapshot?.seer_rominportalsnapshotid,
                label: (
                  <span>
                    <span style={{ marginRight: '5px', color: (isFinalized) ? 'red' : 'black' }}>{snapshot?.seer_name}</span>
                    {isFinalized && <StarsIcon style={{ width: '12px', height: '12px', marginLeft: '5px', color: 'green' }} />}
                  </span>
                ),
                // snapshot?.seer_name
              };
            })}
          />

          <div style={{ marginTop: '10px' }}>
            Description:{' '}
            {(selectSnapshot && description) ? (
              <Tooltip 
                overlayStyle={{ maxWidth: '400px' }}
                title={description}>
                {/* <Input
                  placeholder="Description"
                  disabled
                  value={
                    selectSnapshot
                      ? snapshots?.find(
                          (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                        )?.seer_description
                      : ''
                  }
                /> */}
                <TextArea
                  rows={4} // Set the number of rows (height) of the text area
                  placeholder="Description"
                  disabled
                  value={
                    selectSnapshot
                      ? snapshots?.find(
                          (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                        )?.seer_description
                      : ''
                  }
                />
                {/* <InputContent selectSnapshot={selectSnapshot} snapshots={snapshots} /> */}
              </Tooltip>
            ) : (
              // <Input
              //   placeholder="Description"
              //   disabled
              //   value={
              //     selectSnapshot
              //       ? snapshots?.find(
              //           (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
              //         )?.seer_description
              //       : ''
              //   }
              // />
              <TextArea
                rows={4} // Set the number of rows (height) of the text area
                placeholder="Description"
                disabled
                value={
                  selectSnapshot
                    ? snapshots?.find(
                        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                      )?.seer_description
                    : ''
                }
              />
            )}
            
          </div>
          {/* <div style={{ marginTop: '10px' }}>
            Created At:{' '}
            <Input
              placeholder="Created At"
              disabled
              value={
                selectSnapshot
                  ? snapshots?.find(
                      (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                    )?.[snapshotAPIConstants?.CREATED_AT] // 'createdon@OData.Community.Display.V1.FormattedValue'
                  : ''
              }
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            Created By:{' '}
            <Input
              placeholder="Created By"
              disabled
              value={
                selectSnapshot
                  ? snapshots?.find(
                      (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                    )?.[snapshotAPIConstants?.CREATED_BY] // '_seer_createdbyportal_value@OData.Community.Display.V1.FormattedValue'
                    // ['_createdby_value@OData.Community.Display.V1.FormattedValue']
                  : ''
              }
            />
          </div> */}
          <div style={{ display: 'flex', marginTop: '10px' }}>
            {/* First div */}
            <div style={{ flex: 1, marginRight: '10px' }}>
              Created At:{' '}
              <Input
                style={{ width: '100%' }} // Make sure the input takes up 100% width of the container
                placeholder="Created At"
                disabled
                value={
                  selectSnapshot
                    ? snapshots?.find(
                        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                      )?.[snapshotAPIConstants?.CREATED_AT] // 'createdon@OData.Community.Display.V1.FormattedValue'
                    : ''
                }
              />
            </div>
            
            {/* Second div */}
            <div style={{ flex: 1, marginLeft: '10px' }}>
              Created By:{' '}
              <Input
                style={{ width: '100%' }} // Make sure the input takes up 100% width of the container
                placeholder="Created By"
                disabled
                value={
                  selectSnapshot
                    ? snapshots?.find(
                        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                      )?.[snapshotAPIConstants?.CREATED_BY] // '_seer_createdbyportal_value@OData.Community.Display.V1.FormattedValue'
                    : ''
                }
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              Last Modified At:{' '}
              <Input
                placeholder="Last Modified At"
                disabled
                value={
                  selectSnapshot
                    ? snapshots?.find(
                        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                      )?.[snapshotAPIConstants?.MODIFIED_AT] // 'modifiedon@OData.Community.Display.V1.FormattedValue'
                    : ''
                }
              />
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              Last Modified By:{' '}
              <Input
                placeholder="Last Modified By"
                disabled
                value={
                  selectSnapshot
                    ? snapshots?.find(
                        (snap: any) => snap?.seer_rominportalsnapshotid === selectSnapshot
                      )?.[snapshotAPIConstants?.MODIFIED_BY] // '_seer_modifiedbyportal_value@OData.Community.Display.V1.FormattedValue'
                      // ['_modifiedby_value@OData.Community.Display.V1.FormattedValue']
                    : ''
                }
              />
            </div>
          </div>
          <div></div>
        </div>
      </Space>
    </Modal>
  );
}
