import React from 'react';
import classNames from 'classnames';

const BarsComponent = ({ limit, value, index }) => {
  return (
    //memo
    <div
      className={classNames('progress')}
      style={{
        height: '60px',
        margin: '20px 0',
      }}
      key={index}
    >
      <div
        className={classNames(
          value > limit ? 'progress-bar  bg-danger' : 'progress-bar'
        )}
        role="progressbar"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
};

export const Bars = React.memo(BarsComponent);
