import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="container loading-container">
      <progress className="progress is-small is-info" max="100">
        40%
      </progress>
    </div>
  );
};

export default Loading;
