import { Matrix } from "@/core/types/matrix";

export function generateMatrix(rows: number, cols: number): Matrix {
  let idCounter = 1;

  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      id: idCounter++,
      amount: Math.floor(Math.random() * 900 + 100),
    }))
  );
}
