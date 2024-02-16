import * as React from 'react';

const OverlayComponent = ({ showOverlay }: {showOverlay: boolean}) => {
  console.log('dooodododododod ==> ', showOverlay);
  
  if (!showOverlay) {
    return null; // If showOverlay is false, don't render anything
  }

  return (
    <div className={'overlay-component'}>
      <div className={'content-overlay-component'}>
        <h2>Processing</h2>
        <p>Wait for until finish processing...!</p>
      </div>
    </div>
  );
};

export default OverlayComponent;
