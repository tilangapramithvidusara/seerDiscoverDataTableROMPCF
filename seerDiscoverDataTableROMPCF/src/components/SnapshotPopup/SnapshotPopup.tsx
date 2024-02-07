import * as React from 'react';
import { Space, Select, Modal, Input } from 'antd';
import { useState } from 'react';

export default function SnapShotPopup({ snapshots, handleClose, open, onSelect }: any) {
  const [selectSnapshot, setSelectSnapshot] = useState(null);

  return (
    <Modal open={open} title="Load Snapshot" onOk={() => selectSnapshot ? onSelect(selectSnapshot) : alert('Please select the snapshot')} onCancel={handleClose}>
      <Space wrap>
        <div style={{ 
          display: 'flex-column', 
          fontSize: '15px' 
          }}>
          <div>Select Snapshot</div>
          <Select
            style={{ width: 450 }}
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
          <div style={{ marginTop: '5px' }}>
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
          <div style={{ marginTop: '5px' }}>
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
