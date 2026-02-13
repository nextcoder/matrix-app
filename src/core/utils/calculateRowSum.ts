import { MatrixCell } from "@/core/types/matrix";

export function calculateRowSum(row: MatrixCell[]): number {
  return row.reduce((sum, cell) => sum + cell.amount, 0);
}
