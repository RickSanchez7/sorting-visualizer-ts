import { FC } from 'react';

type Props = {
  colorCode: number;
  filled: number[];
  randomizedArray: number[];
  index: number;
  style: any;
};

export const SortingBar: FC<Props> = ({
  colorCode,
  filled,
  randomizedArray,
  index,
  style,
}) => {
  let color = '#efefef';

  switch (colorCode) {
    case 1:
      color = '#02E095';
      break;
    case 2:
      color = 'red';
      break;
    case 3:
      color = 'yellow';
      break;
    default:
      break;
  }
  let len = filled.length;
  for (let i = 0; i < len; i++) {
    if (randomizedArray.length - i === index) {
      color = 'yellow';
    }
  }

  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
