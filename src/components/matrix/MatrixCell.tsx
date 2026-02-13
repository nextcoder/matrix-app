"use client";

import React from "react";

import { useMatrix } from "@/core/context/matrix";
import { MatrixCell as CellType } from "@/core/types/matrix";

interface Props {
  cell: CellType;
  rowIndex: number;
  colIndex: number;
  isHighlighted: boolean;
  isHovered: boolean;
  setHoveredCell: (cell: { id: string; value: number } | null) => void;
}

function MatrixCellComponent({ cell, rowIndex, colIndex, isHighlighted, isHovered, setHoveredCell }: Props) {
  const { incrementCell } = useMatrix();

  return (
    <div
      onClick={() => incrementCell(rowIndex, colIndex)}
      onMouseEnter={() => setHoveredCell({ id: cell.id, value: cell.amount })}
      onMouseLeave={() => setHoveredCell(null)}
      className={`flex h-16 w-20 cursor-pointer items-center justify-center border border-gray-300 transition ${isHovered ? "bg-blue-400 text-white" : ""} ${isHighlighted ? "bg-yellow-300" : ""} `}
    >
      {cell.amount}
    </div>
  );
}

export default React.memo(MatrixCellComponent);
