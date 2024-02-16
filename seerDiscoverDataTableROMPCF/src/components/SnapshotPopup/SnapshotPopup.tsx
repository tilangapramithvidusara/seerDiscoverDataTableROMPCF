import * as React from 'react';
import { Space, Select, Modal, Input } from 'antd';
import { useState } from 'react';

export default function SnapShotPopup({ snapshots, handleClose, open, onSelect }: any) {
  const [selectSnapshot, setSelectSnapshot] = useState(null);

  return (
    <Modal className='snapshot-modal' open={open} title="Load Snapshot" onOk={() => selectSnapshot ? onSelect(selectSnapshot) : alert('Please select the snapshot')} onCancel={handleClose}>
      <Space wrap style={{width: '100%'}}>
        <div style={{ 
          display: 'flex-column', 
          fontSize: '13px',
          marginBottom: '10px',
          fontWeight: 700,
          marginTop: '5px'
          }}>
          <div>Select Snapshot</div>
          <Select
            style={{ width: '100%' }}
            onSelect={(e) => {
              console.log('selelelelelelele ==> ', e)
              setSelectSnapshot(e)
              // onSelect(e)
            }}
            options={snapshots?.map((snapshot: any) => {
              return {
                value: snapshot?.seer_rominportalsnapshotid,
                label: snapshot?.seer_name
              };
            })}
          />
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
                    )?.createdon
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
