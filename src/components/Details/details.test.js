import { renderHook, act } from '@testing-library/react-hooks';
import useDetails from './useDetails';

test('should increment or decrement', () => {
  const bars = [1];
  const limits = 0;
  const buttons = [2];
  const { result } = renderHook(() => useDetails({ bars, limits, buttons }));
  const obj = { target: { value: 9 } };
  act(() => {
    result.current.getIndex(obj);
  });
  expect(result.current.selectIndex).toBe(9);
});

test('should button value>0', () => {
  const bars = [1];
  const limits = 0;
  const buttons = [2];
  const value = 1;
  const { result } = renderHook(() => useDetails({ bars, limits, buttons }));
  act(() => {
    result.current.buttonClick(value);
  });
  expect(result.current.barNum[0]).toBe(2);
});

test('should button value<0', () => {
  const bars = [1];
  const limits = 0;
  const buttons = [2];
  const value = -2;
  const { result } = renderHook(() => useDetails({ bars, limits, buttons }));
  act(() => {
    result.current.buttonClick(value);
  });
  expect(result.current.barNum[0]).toBe(0);
});
