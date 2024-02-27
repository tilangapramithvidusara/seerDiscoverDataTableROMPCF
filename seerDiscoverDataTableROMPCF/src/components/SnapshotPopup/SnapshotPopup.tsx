import * as React from 'react';
import { Space, Select, Modal, Input } from 'antd';
import { useState } from 'react';

export default function SnapShotPopup({ snapshots, handleClose, open, onSelect }: any) {
  const [selectSnapshot, setSelectSnapshot] = useState(null);

  return (
    <Modal className='snapshot-modal' open={open} title="Load Snapshot" onOk={() => selectSnapshot ? onSelect(selectSnapshot) : alert('Please select the snapshot to load')} onCancel={handleClose}>
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
                    )?.['createdon@OData.Community.Display.V1.FormattedValue']
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
                    )?.['_seer_createdbyportal_value@OData.Community.Display.V1.FormattedValue']
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
                    )?.['modifiedon@OData.Community.Display.V1.FormattedValue']
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
                    )?.['_seer_modifiedbyportal_value@OData.Community.Display.V1.FormattedValue']
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
