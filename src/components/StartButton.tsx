import { FC } from 'react';
import './style.css';

type Props = {
  onClick: () => void;
};

export const StartButton: FC<Props> = ({ onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      Start
    </button>
  );
};
