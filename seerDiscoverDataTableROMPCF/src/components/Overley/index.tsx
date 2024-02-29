import * as React from 'react';

const OverlayComponent = ({ showOverlay }: {showOverlay: boolean}) => {
  
  if (!showOverlay) {
    return null; // If showOverlay is false, don't render anything
  }

  return (
    <div className={'overlay-component'}>
      <div className={'content-overlay-component'}>
        <h2>Processing</h2>
        <p>Please wait...!</p>
      </div>
    </div>
  );
};

export default OverlayComponent;
