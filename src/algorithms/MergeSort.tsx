import { asyncSetTimeout } from '../helpers/asyncSetTimeout';

type Props = {
  array: number[];
  setArray: any;
  leftIndex: number;
  rightIndex: number;
  setColorsArray: (a: number[]) => void;
  visualizationSpeed: number;
  setFilled: (x: any) => void;
  setFinished: (b: boolean) => void;
};

let arr: number[] = [];

const mergeSort = async (
  l: number,
  r: number,
  setArray: any,
  setColorsArray: (a: number[]) => void,
  visualizationSpeed: number,
  setFilled: (x: any) => void
) => {
  if (l >= r) return;

  let mid = Math.floor((l + r) / 2);
  await mergeSort(
    l,
    mid,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setFilled
  );
  await mergeSort(
    mid + 1,
    r,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setFilled
  );

  let i = l;
  let j = mid + 1;
  let it = 0;
  let tempArr = new Array(r - l + 1);
  let newColorsArray = new Array(arr.length).fill(0);

  while (i <= mid && j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray);
    await asyncSetTimeout({ timeout: visualizationSpeed });

    if (arr[i] > arr[j]) {
      tempArr[it] = arr[j];
      j++;
    } else {
      tempArr[it] = arr[i];
      i++;
    }

    it++;
  }

  while (i <= mid) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray);
    await asyncSetTimeout({ timeout: visualizationSpeed });

    tempArr[it] = arr[i];
    it++;
    i++;
  }

  while (j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({ timeout: visualizationSpeed });

    tempArr[it] = arr[j];
    it++;
    j++;
  }

  it = 0;
  // setFilled((x: number[]) => [...x, 3]);
  for (let k = l; k <= r; k++, it++) {
    arr[k] = tempArr[it];
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[k] = 1;
    newColorsArray[i - 1] = 2;
    newColorsArray[j - 1] = 2;
    setArray(arr);
    setColorsArray(newColorsArray);
    await asyncSetTimeout({ timeout: visualizationSpeed });
  }
};

export const MergeSort = async ({
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
  setFinished,
  setFilled,
}: Props) => {
  arr = array;
  const len = array.length;

  await mergeSort(
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setFilled
  );
  setFinished(true);
  const newColorsArray = new Array(len).fill(3);
  setColorsArray(newColorsArray);
};
