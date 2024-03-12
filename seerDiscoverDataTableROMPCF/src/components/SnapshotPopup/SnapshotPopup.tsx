import * as React from 'react';
import { Space, Select, Modal, Input } from 'antd';
import { useState } from 'react';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';
import StarsIcon from '@mui/icons-material/Stars';
import { green, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

export default function SnapShotPopup({ snapshots, handleClose, open, onSelect, finalizeSnapshot }: any) {
  const [selectSnapshot, setSelectSnapshot] = useState(null);
  const finalizeSnapshotData = useSelector((state: any) => state?.snapshot?.finalizeSnapshot);
  console.log('finalizeSnapshot ===> ', finalizeSnapshot, finalizeSnapshotData)

  return (
    <Modal className='snapshot-modal' open={open} title={`Load Snapshot ${(finalizeSnapshot || finalizeSnapshotData) ? "Contain - Finalized Snapshot" : ''}`} onOk={() => selectSnapshot ? onSelect(selectSnapshot) : alert('Please select the snapshot to load')} onCancel={handleClose}>
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
              console.log('8888 ===> ', finalizeSnapshot?.seer_rominportalsnapshotid == snapshot?.seer_rominportalsnapshotid );
              
              const isFinalized = (finalizeSnapshot && (finalizeSnapshot?.seer_rominportalsnapshotid == snapshot?.seer_rominportalsnapshotid)) || (finalizeSnapshotData && (finalizeSnapshotData?.seer_rominportalsnapshotid == snapshot?.seer_rominportalsnapshotid));
              console.log("isFinalized ==> ", isFinalized, finalizeSnapshot?.seer_rominportalsnapshotid, snapshot?.seer_rominportalsnapshotid, finalizeSnapshotData?.seer_rominportalsnapshotid);
              
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
          {/* <InfoIcon 
                      sx={{ fontSize: 12, color: green[500] }}
                      // fontSize="small" 
                      /> */}
          <div style={{ marginTop: '10px' }}>
            Description:{' '}
            <Input
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
          </div>
          <div style={{ marginTop: '10px' }}>
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
          </div>
          <div style={{ marginTop: '10px' }}>
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
          <div style={{ marginTop: '10px' }}>
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
          <div></div>
        </div>
      </Space>
    </Modal>
  );
}
