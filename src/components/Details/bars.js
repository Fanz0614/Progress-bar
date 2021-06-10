import React from 'react';

const Bars = ({ limit, barValue }) => {
  return (
    <>
      {barValue.map((value, index) => {
        return (
          <div
            className="progress"
            style={{
              height: '60px',
              margin: '20px 0',
            }}
            key={index}
          >
            <div
              class={value > limit ? 'progress-bar  bg-danger' : 'progress-bar'}
              role="progressbar"
              style={{ width: `${value}%` }}
            >
              {value}%
            </div>
          </div>
        );
      })}
    </>
  );
};

export const ProgressBars = React.memo(Bars);
