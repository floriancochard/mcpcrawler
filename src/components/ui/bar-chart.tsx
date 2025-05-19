"use client";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts";
import { Card } from "./card";

interface BarChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
  format: "speed" | "cost" | "percentage";
}

const formatters = {
  speed: (value: number) => `${value}/sec`,
  percentage: (value: number) => `${value}%`,
  cost: (value: number) => `$${value}`,
} as const;

export function BarChart({ data, title, format }: BarChartProps) {
  const valueFormatter = formatters[format];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={valueFormatter} />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              barSize={100}
              isAnimationActive={false}
              label={({ x, y, width, height, value }) => (
                <text
                  x={x! + width! / 2}
                  y={y! + height! / 2}
                  fill="#fff"
                  fontSize={16}
                  fontWeight="normal"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {value}
                </text>
              )}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
