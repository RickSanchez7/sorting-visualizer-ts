import { FC } from 'react';
import './style.css';

type Props = {
  onClick: () => void;
};

export const RandomizeButton: FC<Props> = ({ onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      Randomize
    </button>
  );
};
