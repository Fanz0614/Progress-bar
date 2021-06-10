import React, { useState, useEffect } from 'react';

export const Details = ({ buttons, bars, limits }) => {
  const [barNum, setBarNum] = useState(bars);
  const [limit, setLimit] = useState(limits);
  const [buttonValue, setButtonValue] = useState(buttons);
  const [selectIndex, setSelectindex] = useState(0);

  const getIndex = (e) => {
    setSelectindex(e.target.value);
  };
  const buttonClick = (value) => {
    const newArray = [...barNum];
    newArray[selectIndex] + value > 0
      ? (newArray[selectIndex] = newArray[selectIndex] + value)
      : (newArray[selectIndex] = 0);
    setBarNum(newArray);
  };

  useEffect(() => {
    setBarNum(bars);
    setLimit(limits);
    setButtonValue(buttons);
  }, [bars, limits, buttons]);

  return (
    <>
      <div className="title" style={{ textAlign: 'center', fontSize: '300%' }}>
        Progress Bars Demo
      </div>
      {barNum.map((value, index) => {
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

      <select onChange={getIndex}>
        {bars.map((value, index) => {
          return <option key={index}>{index}</option>;
        })}
      </select>
      {buttonValue.map((value, index) => {
        return (
          <button
            key={index}
            class={value > 0 ? 'btn btn-success' : 'btn btn-danger'}
            style={{ float: 'right', padding: '0 10px', margin: '0 15px' }}
            onClick={() => buttonClick(value)}
          >
            {value > 0 ? '+' + value : value}
          </button>
        );
      })}
    </>
  );
};
