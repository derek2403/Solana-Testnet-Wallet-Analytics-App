import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Step Finance', value: 10000000 },
  { name: 'Aldrin', value: 15000000 },
  { name: 'Saros', value: 20000000 },
  { name: 'Atrix', value: 25000000 },
  { name: 'Marinade', value: 30000000 },
  { name: 'Saber', value: 40000000 },
  { name: 'Meteora', value: 80000000 },
  { name: 'Orca', value: 250000000 },
];

const formatYAxis = (value) => {
  return `$${value / 1000000}M`;
};

const LiquidityBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis 
          dataKey="name" 
          tick={{ fill: '#6c7293' }} 
          axisLine={{ stroke: '#2c2c3d' }}
        />
        <YAxis 
          tickFormatter={formatYAxis} 
          tick={{ fill: '#6c7293' }} 
          axisLine={{ stroke: '#2c2c3d' }}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1E1E2D', border: 'none' }}
          labelStyle={{ color: '#ffffff' }}
          formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
        />
        <Bar dataKey="value" fill="#00E396" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LiquidityBarChart;