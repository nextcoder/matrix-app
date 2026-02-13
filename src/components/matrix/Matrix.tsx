"use client";

import { useMemo, useState } from "react";

import { useMatrix } from "@/core/context/matrix";

import MatrixFooter from "./MatrixFooter";
import MatrixRow from "./MatrixRow";

export default function Matrix() {
  const { matrix, x } = useMatrix();

  const [hoveredCell, setHoveredCell] = useState<{
    id: string;
    value: number;
  } | null>(null);

  const highlightedSet = useMemo(() => {
    if (!hoveredCell) return new Set<string>();

    const allCells = matrix.flat();

    const nearest = allCells
      .filter((cell) => cell.id !== hoveredCell.id)
      .map((cell) => ({
        id: cell.id,
        diff: Math.abs(cell.amount - hoveredCell.value),
      }))
      .sort((a, b) => a.diff - b.diff)
      .slice(0, x)
      .map((item) => item.id);

    return new Set(nearest);
  }, [hoveredCell, matrix, x]);

  if (!matrix.length) return null;

  return (
    <div className="rounded-lg bg-white p-6">
      <div className="inline-block overflow-hidden rounded border border-gray-400">
        {matrix.map((row, rowIndex) => (
          <MatrixRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            highlightedSet={highlightedSet}
            hoveredCellId={hoveredCell?.id ?? null}
            setHoveredCell={setHoveredCell}
          />
        ))}

        <MatrixFooter />
      </div>
    </div>
  );
}
