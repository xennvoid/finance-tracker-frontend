import { FC } from 'react';
import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';

interface TransactionTableBodySkeletonProps {
  rows: number;
  columns: number;
}

const TransactionTableBodySkeleton: FC<TransactionTableBodySkeletonProps> = ({ rows, columns }) => {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, idx) => (
        <TableRow key={idx}>
          <TableCell colSpan={columns}>
            <Skeleton />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TransactionTableBodySkeleton;
