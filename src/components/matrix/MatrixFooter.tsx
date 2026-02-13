"use client";

import { useMatrix } from "@/core/context/matrix";
import { calculatePercentile } from "@/core/utils/calculatePercentile";

export default function MatrixFooter() {
  const { matrix } = useMatrix();

  if (!matrix.length) return null;

  const colsCount = matrix[0].length;

  const percentiles = Array.from({ length: colsCount }, (_, colIndex) => {
    const columnValues = matrix.map((row) => row[colIndex].amount);
    return calculatePercentile(columnValues, 60);
  });

  return (
    <div className="flex">
      {percentiles.map((value, index) => (
        <div
          key={index}
          className="flex h-16 w-20 items-center justify-center border border-gray-500 bg-gray-300 font-bold"
        >
          {value}
        </div>
      ))}

      <div className="h-16 w-24 border border-gray-500 bg-gray-300" />
    </div>
  );
}
