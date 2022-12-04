import { FC } from 'react';

export const Shower: FC<{ num: number }> = ({ num }) => {
  return (
    <div>
      Current count is1: {num}!
    </div>
  );
}
