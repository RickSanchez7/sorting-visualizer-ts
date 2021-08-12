import { FC } from 'react';
import './style.css';

type Props = {
  onSpeedChange: any;
  isVisualizing: boolean;
  value: number;
};

export const SpeedSlider: FC<Props> = ({
  onSpeedChange,
  isVisualizing,
  value,
}) => {
  return (
    <div className='inputContainer'>
      <div className='inputText'>Visualization Speed</div>
      <input
        type='range'
        disabled={isVisualizing}
        min={0}
        max={100}
        value={value}
        className='inputStyle'
        onChange={e => onSpeedChange(e.target.value)}
      />
    </div>
  );
};
