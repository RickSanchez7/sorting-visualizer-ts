import { FC } from 'react';

type Props = {
  onClick: () => void;
};

export const RandomizeButton: FC<Props> = ({ onClick }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <button
        style={{
          width: 130,
          background: '#0D1929',
          borderColor: '#0D1929',
          fontWeight: 'bold',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        Randomize
      </button>
    </div>
  );
};
