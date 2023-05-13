
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer  } from 'recharts';

const ChartInvesting = ({data}) => {
  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="value" stroke="#304060" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="mon" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default ChartInvesting;