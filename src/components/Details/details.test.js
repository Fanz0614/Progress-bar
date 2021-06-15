import React from 'react';
import { render, screen } from '@testing-library/react';
import { Bars } from './bars';
import { Details } from './index';

describe('Bars', () => {
  test('renders Bars component', () => {
    const limit = 1;
    const value = 1;
    const index = 1;
    render(<Bars limit={limit} value={value} index={index}/>);
    screen.debug();
  });
  test('renders the correct content', () => {
    const buttons = [];
    const bars = [];
    const limits = 0;
    const { getByText } = render(
      <Details buttons={buttons} bars={bars} limits={limits} />
    );
    expect(getByText('Progress Bars Demo')).not.toBeNull();
  });
});
