import React from "react";

const BarChart = () => {
  const SVG_WIDTH = 400;
  const SVG_HEIGHT = 200;

  const data = [
    [
      "Mon",
      [
        { a1: 12, color: "#5E463B" },
        { a1: 12, color: "#34D399" },
        { a1: 32, color: "red" },
      ],
    ],
    [
      "Tue",
      [
        { a1: 20, color: "#5E463B" },
        { a1: 54, color: "#34D399" },
      ],
    ],
    [
      "Wed",
      [
        { a1: 11, color: "#5E463B" },
        { a1: 11, color: "#34D399" },
      ],
    ],
    [
      "Thu",
      [
        { a1: 25, color: "#5E463B" },
        { a1: 25, color: "#34D399" },
      ],
    ],
    [
      "Fri",
      [
        { a1: 30, color: "#5E463B" },
        { a1: 22, color: "#34D399" },
      ],
    ],
    [
      "Sat",
      [
        { a1: 62, color: "#5E463B" },
        { a1: 21, color: "#34D399" },
      ],
    ],
    [
      "Sun",
      [
        { a1: 46, color: "#5E463B" },
        { a1: 36, color: "#34D399" },
      ],
    ],
  ];

  const x0 = 50;
  const xAxisLength = SVG_WIDTH - x0 * 2;

  const y0 = 50;
  const yAxisLength = SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;

  const dataYMax = 100;
  const dataYMin = 0;

  const dataYRange = dataYMax - dataYMin;

  const numYTicks = 5;

  const barPlotWidth = xAxisLength / data.length;

  return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      {/* X axis */}
      <line
        x1={x0}
        y1={xAxisY}
        x2={x0 + xAxisLength}
        y2={xAxisY}
        stroke="grey"
        strokeWidth=".2"
      />
      {/* Y axis */}
      {/* <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" /> */}
      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);
        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));

        return (
          <g key={index}>
            <line
              x1={x0 - 25}
              y1={y}
              x2={x0 + xAxisLength}
              y2={y}
              stroke="grey"
              strokeWidth=".2"
              strokeDasharray="2,2"
            />
            <text x={x0 - 15} y={y + 5} textAnchor="end"  className="text-[12px] font-[300]">
              {yValue}
            </text>
          </g>
        );
      })}
      {/* <text x={x0 - 15} y={y0 - 25} textAnchor="middle">
        $
      </text> */}

      {/* Bar plots */}
      {data.map(([day, values], index) => {
        const x = x0 + index * barPlotWidth;

        const sidePadding = 10;

        let y = xAxisY;
        return (
          <g key={index}>
            {values.map(({ a1, color }, subIndex) => {
              const yRatio = a1 / dataYRange;
              const height = yRatio * yAxisLength;
              y -= height;

              return (
                <rect
                  key={subIndex}
                  x={x + sidePadding / 2}
                  y={y}
                  width={barPlotWidth - sidePadding}
                  height={height}
                  fill={color}
                />
              );
            })}
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle" className="text-[12px] font-[300]">
              {day}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default BarChart;
