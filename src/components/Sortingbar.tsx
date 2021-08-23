import { FC } from 'react';

type Props = {
  colorCode: number;
  filled: number[];
  randomizedArray: number[];
  index: number;
  style: any;
  finished: boolean;
};

export const SortingBar: FC<Props> = ({
  colorCode,
  filled,
  randomizedArray,
  index,
  style,
  finished,
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
  // if (filled.length < 1) {
  //   color = '#efefef';
  // }

  // if (finished) {
  //   color = '#efefef';
  // }

  return (
    <div
      style={{
        ...style,
        backgroundColor: color,
      }}
    />
  );
};
