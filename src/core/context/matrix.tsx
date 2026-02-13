"use client";

import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState } from "react";

import { Matrix } from "@/core/types/matrix";
import { generateMatrix } from "@/core/utils/generateMatrix";

interface MatrixContextType {
  matrix: Matrix;
  rows: number;
  cols: number;
  x: number;
  setConfig: (rows: number, cols: number, x: number) => void;
  incrementCell: (row: number, col: number) => void;
  addRow: () => void;
  removeRow: (rowIndex: number) => void;
}

const MatrixContext = createContext<MatrixContextType | null>(null);

export function MatrixProvider({ children }: { children: React.ReactNode }) {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [x, setX] = useState(0);
  const [matrix, setMatrix] = useState<Matrix>([]);

  const setConfig = (newRows: number, newCols: number, newX: number) => {
    setRows(newRows);
    setCols(newCols);
    setX(newX);
    setMatrix(generateMatrix(newRows, newCols));
  };

  const incrementCell = (rowIndex: number, colIndex: number) => {
    setMatrix((prev) =>
      prev.map((row, r) =>
        row.map((cell, c) => (r === rowIndex && c === colIndex ? { ...cell, amount: cell.amount + 1 } : cell))
      )
    );
  };

  const addRow = () => {
    if (!cols) return;

    const newRow = Array.from({ length: cols }, () => ({
      id: uuidv4(),
      amount: Math.floor(Math.random() * 900 + 100),
    }));

    setMatrix((prev) => [...prev, newRow]);
    setRows((prev) => prev + 1);
  };

  const removeRow = (rowIndex: number) => {
    setMatrix((prev) => prev.filter((_, index) => index !== rowIndex));
    setRows((prev) => prev - 1);
  };

  return (
    <MatrixContext.Provider
      value={{
        matrix,
        rows,
        cols,
        x,
        setConfig,
        incrementCell,
        addRow,
        removeRow,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
}

export function useMatrix() {
  const context = useContext(MatrixContext);
  if (!context) throw new Error("useMatrix must be used inside provider");
  return context;
}
