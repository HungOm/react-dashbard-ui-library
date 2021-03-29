import React, { Component } from 'react'
import * as Recharts from 'recharts'

const chartData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
]

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
]

const pieData1 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }
]
const pieData2 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
]

const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 }
]

const radialData = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' }
]
const radialStyle = {
  top: 0,
  left: 350,
  lineHeight: '24px'
}

class RechartsComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Recharts - Charts')
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Charts /</span> Recharts
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-5" />

        {isIE10Mode && <div className="alert alert-danger">
          <strong>recharts</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>

          <div className="demo-vertical-spacing">

            <div style={{ width: '100%', height: 300 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.LineChart
                  data={chartData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <Recharts.CartesianGrid strokeDasharray="3 3" />
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Legend />
                  <Recharts.Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Recharts.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </Recharts.LineChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 300 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.AreaChart
                  data={chartData}
                  margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                  }}
                >
                  <Recharts.CartesianGrid strokeDasharray="3 3" />
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Recharts.Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Recharts.Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </Recharts.AreaChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 300 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.BarChart
                  data={chartData}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <Recharts.CartesianGrid strokeDasharray="3 3" />
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Legend />
                  <Recharts.Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  <Recharts.Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                  <Recharts.Bar dataKey="uv" fill="#ffc658" />
                </Recharts.BarChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 300 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.ComposedChart
                  data={chartData}
                  margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                  }}
                >
                  <Recharts.CartesianGrid stroke="#f5f5f5" />
                  <Recharts.XAxis dataKey="name" />
                  <Recharts.YAxis />
                  <Recharts.Tooltip />
                  <Recharts.Legend />
                  <Recharts.Bar dataKey="uv" barSize={20} fill="#413ea0" />
                  <Recharts.Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </Recharts.ComposedChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 300 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.ScatterChart
                  margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                  }}
                >
                  <Recharts.CartesianGrid />
                  <Recharts.XAxis type="number" dataKey="x" name="stature" unit="cm" />
                  <Recharts.YAxis type="number" dataKey="y" name="weight" unit="kg" />
                  <Recharts.Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Recharts.Scatter name="A school" data={scatterData} fill="#8884d8" />
                </Recharts.ScatterChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 350 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.PieChart>
                  <Recharts.Pie data={pieData1} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                  <Recharts.Pie data={pieData2} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </Recharts.PieChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 500 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={radarData}>
                  <Recharts.PolarGrid />
                  <Recharts.PolarAngleAxis dataKey="subject" />
                  <Recharts.PolarRadiusAxis />
                  <Recharts.Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </Recharts.RadarChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 500 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={radarData}>
                  <Recharts.PolarGrid />
                  <Recharts.PolarAngleAxis dataKey="subject" />
                  <Recharts.PolarRadiusAxis />
                  <Recharts.Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </Recharts.RadarChart>
              </Recharts.ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 500 }}>
              <Recharts.ResponsiveContainer>
                <Recharts.RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={radialData}>
                  <Recharts.RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                  <Recharts.Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={radialStyle} />
                </Recharts.RadialBarChart>
              </Recharts.ResponsiveContainer>
            </div>

          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default RechartsComponent
