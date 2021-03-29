import React, { Component } from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesBars,
  SparklinesReferenceLine
} from 'react-sparklines'

const data = [25, 17, 13, 9, 2, 5, 17, 19, 15, 20, 26, 12, 7, 29, 9, 13, 4, 13, 22, 17]

class ReactSparklines extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Sparklines - Charts')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Charts /</span> React Sparklines
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-5" />

        <div className="demo-vertical-spacing">
          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine color="#fa7e17" />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine color="#56b45d" />
            <SparklinesSpots style={{ fill: "#56b45d" }} />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </div>
      </div>
    )
  }
}

export default ReactSparklines
