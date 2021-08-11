import React, { FC } from 'react';

type Props = {
  onInputSizeChanged: (n: number) => void;
  isVisualizing: boolean;
  value: number;
};

export const ArraySizeSlider: FC<Props> = ({
  onInputSizeChanged,
  isVisualizing,
  value,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#0D1929', fontWeight: 'bold' }}>Array Size</div>
      <input
        disabled={isVisualizing}
        type='range'
        min={30}
        max={400}
        step={2}
        value={value}
        style={{ width: 150 }}
        onChange={e => onInputSizeChanged(Number(e.target.value))}
      />
    </div>
  );
};
