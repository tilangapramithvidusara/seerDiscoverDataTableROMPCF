import * as React from 'react';
import Button from '@mui/material/Button';
import { Space, Select, Modal, Input } from 'antd';
import { useState } from 'react';

export default function SnapShotPopup({ snapshots, handleClose, open }: any) {
  const [selectSnapshot, setSelectSnapshot] = useState();

  return (
    <Modal open={open} title="Load Snapshot" onOk={open} onCancel={handleClose}>
      <Space wrap>
        <div style={{ display: 'flex-column', fontSize: '15px' }}>
          <div>Select Snapshot</div>
          <Select
            style={{ width: 450 }}
            onSelect={(e) => setSelectSnapshot(e)}
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
