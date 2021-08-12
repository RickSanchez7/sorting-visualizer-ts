import { asyncSetTimeout } from '../helpers/asyncSetTimeout';

type Props = {
  array: number[];
  setArray: any;
  setColorsArray: (a: number[]) => void;
  visualizationSpeed: number;
  setFilled: (x: any) => void;
  setFinished: (b: boolean) => void;
};

export const BubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
  setFilled,
  setFinished,
}: Props) => {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    setFilled((x: number[]) => [...x, 3]);
    for (let j = 0; j < len - 1 - i; j++) {
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[j] = 1;
      newColorsArray[j + 1] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        setArray(array);
      }
    }
  }
  let newColorsArray = new Array(len).fill(3);
  setColorsArray(newColorsArray);
  setFinished(true);
};
