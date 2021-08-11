import { useState, FC } from 'react';
// import selectionSort from './algorithms/selection-sort';
import { generateRandomizedArray } from './helpers/randomizeArray';
// import SortingBar from '../SortingBar/SortingBar';
import { BubbleSort } from './algorithms/BubbleSort';
import { SortingBar } from './components/Sortingbar';
import { StartButton } from './components/StartButton';
import { RandomizeButton } from './components/RandomizeArray';
import { SpeedSlider } from './components/SpeedSlider';
import { ArraySizeSlider } from './components/ArraySizeSlider';
// import insertionSort from '../../algorithms/insertion-sort';
// import inplaceMergeSortWrapper from '../../algorithms/inplace-merge-sort';
// import mergeSortWrapper from '../../algorithms/merge-sort';
// import quickSortLWrapper from '../../algorithms/quick-sort-l';
// import quickSortLRWrapper from '../../algorithms/quick-sort-lr';

const Home: FC = () => {
  const arraySize = 50;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState<number[] | []>(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [arrayLength, setArrayLength] = useState(arraySize);
  const [visualizationSpeed, setVisualizationSpeed] = useState(50);
  const [value, setValue] = useState(50);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm] = useState('Bubble Sort');
  const [filled, setFilled] = useState([]);
  const [finished, setFinished] = useState(true);

  // const algorithms = [
  //   'Bubble Sort',
  //   'Merge Sort',
  //   'Insertion Sort',
  //   'Selection Sort',
  //   'QuickSort',
  // ];

  const onRandomize = (): number[] => {
    setFilled([]);
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length,
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    return nextRandomizedArray;
  };
  const onInputSizeChanged = (val: number) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
    setArrayLength(val);
  };
  const onSpeedChange = (val: number) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val);
    setValue(val);
  };

  const onVisualize = async () => {
    if (isVisualizing) return;
    let rArray: number[] = [];
    if (finished) {
      rArray = onRandomize();
      setFinished(false);
    }

    setIsVisualizing(true);
    switch (currentAlgorithm) {
      case 'Bubble Sort':
        await BubbleSort({
          array: rArray || randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setFilled: setFilled,
          setFinished: setFinished,
        });
        break;
      default:
        break;
    }

    setIsVisualizing(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <div
        style={{
          color: '#fff',
          background: '#00BFFF',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          fontSize: '18px',
        }}
      >
        {currentAlgorithm}
      </div>
      <div
        style={{
          backgroundColor: '#0D1929',
          display: 'flex',
          height: '100%',
          width: '100vw',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px 0px 0px 0px',
        }}
      >
        {randomizedArray.map((item, index) => {
          const height = (item / maxItem) * 100;
          const width = (1 / randomizedArray.length) * 100;
          return (
            <div
              key={index}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                width: `${width * 0.95}%`,
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                index={index}
                randomizedArray={randomizedArray}
                filled={filled}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: 'auto 10% 0 10%',
                }}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <StartButton onClick={onVisualize} />
        <RandomizeButton onClick={onRandomize} />
        <SpeedSlider
          onSpeedChange={onSpeedChange}
          isVisualizing={isVisualizing}
          value={value}
        />
        <ArraySizeSlider
          onInputSizeChanged={onInputSizeChanged}
          isVisualizing={isVisualizing}
          value={arrayLength}
        />
      </div>
    </div>
  );
};

export default Home;
