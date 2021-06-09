import React, { useEffect } from 'react';
import { Details } from '../Details/index';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/slice';

export const Home = () => {
  const { buttons, bars, limit } = useSelector((state) => state.details.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div class="container">
      <Details buttons={buttons} bars={bars} limits={limit} />
    </div>
  );
};
