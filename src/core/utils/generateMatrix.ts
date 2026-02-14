import { v4 as uuidv4 } from "uuid";

import { Matrix } from "@/core/types/matrix";

export function generateMatrix(rows: number, cols: number): Matrix {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      id: uuidv4(),
      amount: Math.floor(Math.random() * 900 + 100),
    }))
  );
}
