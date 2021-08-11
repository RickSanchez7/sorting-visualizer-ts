type Props = {
  timeout: number;
};

export const asyncSetTimeout = ({ timeout }: Props) => {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => resolve(), timeout)
  );
};
