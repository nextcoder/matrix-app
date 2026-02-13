"use client";

import { useState } from "react";

import { useMatrix } from "@/core/context/matrix";

export default function MatrixConfig() {
  const { rows: matrixRows, setConfig, addRow } = useMatrix();

  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);
  const [x, setX] = useState(1);

  const handleGenerate = () => {
    if (rows <= 0 || cols <= 0 || x <= 0) return;
    setConfig(rows, cols, x);
  };

  const isInvalid = rows <= 0 || cols <= 0 || x <= 0 || x >= rows * cols;

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="rows" className="space-y-2 text-nowrap">
            Rows (M)
          </label>{" "}
          <input
            id="rows"
            min={1}
            max={200}
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="w-24 rounded border px-3 py-2"
            placeholder="Rows (M)"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="cols" className="space-y-2 text-nowrap">
            Cols (N)
          </label>{" "}
          <input
            id="cols"
            min={1}
            max={200}
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            className="w-24 rounded border px-3 py-2"
            placeholder="Cols (N)"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <label htmlFor="x" className="space-y-2">
            X
          </label>
          <input
            id="x"
            min={1}
            max={rows * cols}
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            className="w-24 rounded border px-3 py-2"
            placeholder="X"
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={isInvalid}
        className={`rounded px-6 py-2 transition ${
          isInvalid ? "cursor-not-allowed bg-gray-400" : "bg-blue-600 text-white hover:bg-blue-700"
        } `}
      >
        Generate
      </button>
      {matrixRows > 0 && (
        <button
          onClick={addRow}
          className="mb-4 rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
        >
          + Add Row
        </button>
      )}
    </div>
  );
}
