
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


export default function Grafico({data}) {

    return (
 
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome"/>
          <YAxis />
          <Tooltip />

          <Line 
                type="monotone" 
                dataKey="unidade" 
                stroke="#8884d8"
                activeDot={{ r: 8}}
             />
        </LineChart>
    );
  }

