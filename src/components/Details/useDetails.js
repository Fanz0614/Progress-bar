import { useState,useEffect } from 'react';

const useDetails = ({ bars, limits, buttons }) => {
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

  useEffect(() => {
    setBarNum(bars);
    setLimit(limits);
    setButtonValue(buttons);
  }, [bars, limits, buttons]);

  return {
    barNum,
    limit,
    buttonValue,
    selectIndex,
    setBarNum,
    setLimit,
    setButtonValue,
    setSelectindex,
    getIndex,
    buttonClick,
  };
};

export default useDetails;
