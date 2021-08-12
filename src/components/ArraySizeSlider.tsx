import { FC } from 'react';
import './style.css';

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
    <div className='inputContainer'>
      <div className='inputText'>Array Size</div>
      <input
        disabled={isVisualizing}
        type='range'
        min={30}
        max={400}
        step={2}
        value={value}
        className='inputStyle'
        onChange={e => onInputSizeChanged(Number(e.target.value))}
      />
    </div>
  );
};
