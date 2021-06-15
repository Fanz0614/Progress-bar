import React, { useState, useEffect } from 'react';
import { Bars } from './bars';
import classNames from 'classnames'

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
    const barValue = newArray[selectIndex];
    barValue + value > 0
      ? (newArray[selectIndex] = barValue + value)
      : (newArray[selectIndex] = 0);
    setBarNum(newArray);
  };
  const options = bars.map((value, index) => {
    return (
      <option value={index} key={index}>
        #Progress Bar{index + 1}
      </option>
    );
  });

  const progressBars = barNum.map((value,index) =>{
    return(
      <Bars limit={limit} value={value} index={index}/>
    )
  });
  //button 命名
  const button = buttonValue.map((value, index) => {
    return (
      <button
        key={index}
        className={classNames(value > 0 ? 'btn btn-success' : 'btn btn-danger')}
        style={{ float: 'right', padding: '0 10px', margin: '0 15px' }}
        onClick={() => buttonClick(value)}
      >
        {value > 0 ? '+' + value : value}
      </button>
    );
  });

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
      {progressBars}
      <select onChange={getIndex}>{options}</select>
      {button}
    </>
  );
};
