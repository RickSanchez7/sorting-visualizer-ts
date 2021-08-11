import { FC } from 'react';

type Props = {
  onClick: () => void;
};

export const StartButton: FC<Props> = ({ onClick }) => {
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
        Start
      </button>
    </div>
  );
};
