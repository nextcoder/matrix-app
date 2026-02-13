import { useMatrix } from "@/core/context/matrix";
import { MatrixCell as CellType } from "@/core/types/matrix";
import { calculateRowSum } from "@/core/utils/calculateRowSum";

import MatrixCell from "./MatrixCell";

interface Props {
  row: CellType[];
  rowIndex: number;
  highlightedSet: Set<string>;
  hoveredCellId: string | null;
  setHoveredCell: (cell: { id: string; value: number } | null) => void;
}

export default function MatrixRow({ row, rowIndex, highlightedSet, hoveredCellId, setHoveredCell }: Props) {
  const { removeRow } = useMatrix();

  const rowSum = calculateRowSum(row);

  return (
    <div className="flex">
      {row.map((cell, colIndex) => (
        <MatrixCell
          key={cell.id}
          cell={cell}
          rowIndex={rowIndex}
          colIndex={colIndex}
          isHighlighted={highlightedSet.has(cell.id)}
          isHovered={hoveredCellId === cell.id}
          setHoveredCell={setHoveredCell}
        />
      ))}

      <div className="flex h-16 w-24 items-center justify-center border border-gray-400 bg-gray-200 font-semibold">
        {rowSum}
      </div>
      <button
        onClick={() => removeRow(rowIndex)}
        className="h-16 w-16 bg-red-500 text-white transition hover:bg-red-600"
      >
        ✕
      </button>
    </div>
  );
}
