import React, { useState, useEffect } from 'react';
import { Bars } from './bars';
import classNames from 'classnames';
import useDetails from './useDetails';

export const Details = ({ buttons, bars, limits }) => {
  const {
    setLimit,
    setButtonValue,
    setSelectindex,
    setBarNum,
    barNum,
    selectIndex,
    limit,
    buttonValue,
    getIndex,
    buttonClick,
  } = useDetails({ bars, limits, buttons });

  const options = bars.map((value, index) => {
    return (
      <option value={index} key={index}>
        #Progress Bar{index + 1}
      </option>
    );
  });

  const progressBars = barNum.map((value, index) => {
    return <Bars limit={limit} value={value} index={index} />;
  });

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
