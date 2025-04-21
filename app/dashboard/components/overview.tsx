'use client';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    total: 1200,
  },
  {
    name: 'Feb',
    total: 1250,
  },
  {
    name: 'Mar',
    total: 1300,
  },
  {
    name: 'Apr',
    total: 1280,
  },
  {
    name: 'May',
    total: 1290,
  },
  {
    name: 'Jun',
    total: 1350,
  },
  {
    name: 'Jul',
    total: 1400,
  },
  {
    name: 'Aug',
    total: 1500,
  },
  {
    name: 'Sep',
    total: 1600,
  },
  {
    name: 'Oct',
    total: 1550,
  },
  {
    name: 'Nov',
    total: 1580,
  },
  {
    name: 'Dec',
    total: 1600,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar dataKey='total' fill='#adfa1d' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
