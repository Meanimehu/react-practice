import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

const scalePoints = (points, width, height) => {
  const xMax = Math.max(...points.map((p) => p.x));
  const yMax = Math.max(...points.map((p) => p.y));
  return points.map((point) => ({
    x: (point.x / xMax) * width,
    y: height - (point.y / yMax) * height,
  }));
};

const LineChart = ({ data }) => {
  const [width, height] = useWindowSize();
  const margin = 50; // Margin for axes labels
  const chartWidth = width - margin * 2;
  const chartHeight = height - margin * 2;

  const scaledPoints = scalePoints(data, chartWidth, chartHeight);

  const linePath = scaledPoints
    .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x + margin},${point.y + margin}`)
    .join(" ");

  const xMax = Math.max(...data.map((p) => p.x));
  const yMax = Math.max(...data.map((p) => p.y));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto" }}>
      {/* X and Y axes */}
      <line x1={margin} y1={height - margin} x2={width - margin} y2={height - margin} stroke="black" />
      <line x1={margin} y1={margin} x2={margin} y2={height - margin} stroke="black" />

      {/* X axis labels */}
      {scaledPoints.map((point, i) => (
        <text key={i} x={point.x + margin} y={height - margin + 20} textAnchor="middle">
          {data[i].x}
        </text>
      ))}

      {/* Y axis labels */}
      {scaledPoints.map((point, i) => (
        <text key={i} x={margin - 10} y={point.y + margin} textAnchor="end" alignmentBaseline="middle">
          {data[i].y}
        </text>
      ))}

      {/* Line path */}
      <path d={linePath} stroke="blue" fill="none" />
      
      {/* Points */}
      {scaledPoints.map((point, i) => (
        <circle key={i} cx={point.x + margin} cy={point.y + margin} r={3} fill="red" />
      ))}
    </svg>
  );
};

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 16 },
  { x: 5, y: 25 },
];

const Chart = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Responsive Line Chart</h1>
      <LineChart data={data} />
    </div>
  );
};

export default Chart;
