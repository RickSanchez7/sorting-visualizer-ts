import { FC } from 'react';
import './style.css';

type Props = {
  setCurrentAlgorithm: (n: string) => void;
  currentAlgorithm: string;
  algorithms: string[];
};

export const AlgoritmPicker: FC<Props> = ({
  setCurrentAlgorithm,
  currentAlgorithm,
  algorithms,
}) => {
  const handleChange = (e: any) => {
    setCurrentAlgorithm(e.target.value);
  };
  return (
    <div className='inputContainer'>
      <div className='inputText'>Array Size</div>
      <select value={currentAlgorithm} onChange={handleChange}>
        {algorithms.map(al => (
          <option key={al} value={al}>
            {al}
          </option>
        ))}
      </select>
    </div>
  );
};
